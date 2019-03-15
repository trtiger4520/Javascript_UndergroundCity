import zone from './data/zone.js';

(function(){
    // init
    const list = document.querySelector('.world_clock_list');
    const template = document.querySelector('#list_template');
    
    const options = {
        hour12: false,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    const data = ['New_York', 'London', 'Bangkok', 'Taipei'];
    const filterZone = zone
    .filter(a => data.some(b => a.zone_name.split('/').some(c => c === b)))
    .sort((a, b) => {
        const an = a.zone_name, bn = b.zone_name;
        return an < bn ? -1 : (an > bn ? 1 : 0);
    });

    function replace(innerText = '', value) {
        return innerText.replace(/\{\{.*\}\}/, value)
    }

    // update
    const now = new Date();
    const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

    // render
    filterZone.forEach(item => {
        let loaclDate = '';
        try {
            loaclDate = utc.toLocaleDateString('en-US', {...options, timeZone: item.zone_name });
        }
        catch {
            console.error('[' + item.zone_name + '] Can\'t find datetime');
            return;
        }
        
        
        
        const temp = template.content.cloneNode(true);
        const temp_area =  temp.querySelector('.area');
        const temp_name = temp.querySelector('.name');
        const temp_date = temp.querySelector('.date');
        const temp_time = temp.querySelector('.time');

        const countryName = item.zone_name.split('/')[item.zone_name.split('/').length - 1].replace(/_/g, ' ');
        const [, month, day, year, times] = loaclDate.replace(',').split(' ');
        const [hour, minute, ] = times.split(':');
        let countryDate = `${day} ${month}. ${year}`;
        let countryTime = `${hour}:${minute}`;
        if (hour >= 18 || hour <= 6) {
            temp_area.classList.add('night');
        }
        temp_name.innerText = replace(temp_name.innerText, countryName);
        temp_date.innerText = replace(temp_date.innerText, countryDate);
        temp_time.innerText = replace(temp_time.innerText, countryTime);
        list.appendChild(temp)

    })
}());