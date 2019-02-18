;(function(golbal){
    const _clock = {
        //初始化並執行
        init: function () {
            let clock = this;
            let trygetElement = clock.getElement();
            if (!trygetElement) return; //如果抓不到指針則跳出

            clock.update(this.setTransition.bind(clock));
            this.data.countfn = setInterval(clock.update.bind(clock), clock.data.fps);
            return this;
        },

        data: {
            nowTime: 0,
            pointer: {
                hour: 0,
                minute: 0,
                second: 0,
            },
            currentTime: 0,
            countfn: undefined,
            fps: 1000 / 60,
            hand: {
                hourHand: undefined,
                minuteHand: undefined,
                secondHand: undefined
            }
        },

        //取得指針的物件
        getElement: function() {
            try {
                const clock = document.querySelector('#Clock');
                this.data.hand.hourHand = clock.querySelector('.hour-hand');
                this.data.hand.minuteHand = clock.querySelector('.minute-hand');
                this.data.hand.secondHand = clock.querySelector('.second-hand');
                return true;
            }
            catch {
                console.error('指針物件丟失');
                return false;
            }
        },

        getTime: function() {

            // 指針紀錄當前進入的時間後，以累加的方式 
            // (解決rotate角度歸0時指針會繞回去的transition動畫，使指針繼續轉下去，
            // 以及分針與時針可以依照秒數緩慢移動，如：六點半時，時針與分針不可能重疊)
            const utc8 = 3600 * 8 * 1000; // +8hour
            const now = this.data.nowTime = Date.now() + utc8;
            let currentTime = this.data.currentTime;
            let hasCurrentTime = currentTime === 0;
            let secondsLeft = hasCurrentTime ?  (now / 1000) :  (now - currentTime) / 1000;
            secondsLeft = secondsLeft % 43200;

            let newHour = secondsLeft / 3600 + (hasCurrentTime ? 0 : this.data.pointer.hour);
            this.data.pointer.hour = newHour;

            secondsLeft = secondsLeft % 3600;
            let newMinute = secondsLeft / 60 + (hasCurrentTime ? 0 : this.data.pointer.minute);
            this.data.pointer.minute = newMinute;

            secondsLeft = secondsLeft % 60;
            let newSecond = secondsLeft + (hasCurrentTime ? 0 : this.data.pointer.second);
            this.data.pointer.second = newSecond;
            
            this.data.currentTime = now;

            // 原始版本
            // let nowTime = new Date(now);
            // this.data.hour = nowTime.getHours();
            // this.data.minute = nowTime.getMinutes();
            // this.data.second = nowTime.getSeconds();

            return this;
        },

        setTransition: function() {
            const {hourHand, minuteHand, secondHand} = this.data.hand;
            let className = 'transitions';
            // hourHand.classList.add(className);
            // minuteHand.classList.add(className);
            secondHand.classList.add(className);
        },

        //再次取得時間與更新畫面
        update: async function(collback) {
            this.getTime().render();
            if(typeof(collback) === 'function') collback();
        },

        //繪製畫面
        render: function() {
            const {hourHand, minuteHand, secondHand} = this.data.hand;

            let hourRotate = (Math.floor(this.data.pointer.hour * 10) / 10) * (360 / 12);
            hourHand.style.transform = `rotate(${hourRotate}deg)`;

            let minuteRotate = (Math.floor(this.data.pointer.minute * 20) / 20) * (360 / 60);
            minuteHand.style.transform = `rotate(${minuteRotate}deg)`;

            let secondRotate = Math.floor(this.data.pointer.second) * (360 / 60);
            secondHand.style.transform = `rotate(${secondRotate}deg)`;

            return this;
        }

    }

    let Clock = function() {
        return _clock.init();
    }

    window.IClock = window.IClock ? window.IClock : Clock();
    console.info('可以使用 IClock.data 查看資料狀態喔~');
}(window));