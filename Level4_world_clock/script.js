import zone from './data/zone.js';

(function(global){
    const _WorldClock = {
        init: function (options) {
            const clock = this;
            clock.data = Object.assign(clock.data, options);
            clock.render();
            clock.startTimer();
        },
        data: {
            options: {
                timeOptions: {
                    hour12: false,
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZoneName: 'short'
                }
            },
            
            // reFlash
            ContinuallyUpdated: undefined,
            FramePerSecond: 1000 / 0.5, // 0.5fps (5s),
            
            // target
            el: undefined,
            template: undefined,
            
            zoneData: [],
            filters: [] // filter zone data
        },
        render () {
            const clock = this;
            const clockList = clock.data.el.querySelector('.world_clock_list');
            const filterZone = clock.filterZone();
            let loaclDate = '';

            // 清除畫面
            clockList.innerHTML = '';

            // 填入資料
            for (const item of filterZone) {
                loaclDate = clock.getLocalDateString(item.zone_name);
                if (loaclDate == '') {
                    continue;
                }
                const temp = clock.data.template.content.cloneNode(true);
                
                // 整理資料名稱 (America/Argentina/San_Luis => San Luis)
                const cty = item.zone_name.split('/')[item.zone_name.split('/').length - 1];
                const countryName = cty.replace(/_/g, ' ');

                // 取出字串中的資料 ex: Fri, Mar 15, 2019, 15:15:19 GMT+8
                const [, month, day, year, times] = loaclDate.replace(',').split(' ');
                const [hour, minute, ] = times.split(':');
                const countryDate = `${day} ${month}. ${year}`;
                const countryTime = `${hour}:${minute}`;

                const newtemp = clock.replaceBrackets(temp, {
                    cityName: countryName,
                    date: countryDate,
                    time: countryTime,
                });

                if (hour >= 18 || hour <= 6) {
                    newtemp.classList.add('night');
                }
                clockList.appendChild(newtemp)
            }
        },

        // 把資料放上，取代Template裡的大括弧 {{ content }}
        replaceBrackets(node, object = {}) {
            const clone = document.createElement('div');
            clone.appendChild(node.firstElementChild);
            let text = clone.innerHTML;
            const keys = Object.keys(object);
            for (const key of keys) {
                const reg = RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
                text = text.replace(reg, object[key]);
            }
            clone.innerHTML = text;
            return clone.firstChild;
        },

        // 取得地點時間
        getLocalDateString(timeZone) {
            const now = new Date();
            const options = this.data.options.timeOptions;
            const DateString = now.toLocaleDateString('en-US', {...options, timeZone })
            return !DateString ? '' : DateString;
        },
        filterZone() {
            const zoneData = this.data.zoneData;
            const filters = this.data.filters;
            return zoneData
            .filter(a => !filters ? true : filters.some(b => a.zone_name.includes(b)))
            .sort((a, b) => {
                const an = a.zone_name, bn = b.zone_name;
                return an < bn ? -1 : (an > bn ? 1 : 0);
            });
        },

        // 隨時更新時間
        startTimer() {
            const clock = this;
            clock.data.ContinuallyUpdated = setInterval(() => {
                clock.render();
            }, clock.data.FramePerSecond);
        }
    }
    
    const WorldClock = function (options) {
        return _WorldClock.init(options);
    }

    global.WorldClock = global.WorldClock ? global.WorldClock : WorldClock;

    
}(window));

WorldClock({
    el: document.querySelector('.world_clock'),
    template: document.querySelector('#list_template'),
    zoneData: zone,
    filters: ['New_York', 'London', 'Bangkok', 'Taipei']
});