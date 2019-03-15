import zone from './data/zone.js';
import WorldClock from './world_clock.js';

window.WorldClock = new WorldClock({
    el: document.querySelector('.world_clock'),
    template: document.querySelector('#list_template'),
    zoneData: zone,
    filters: ['New_York', 'London', 'Bangkok', 'Taipei', 'Sydney']
});

console.info('可以改變filters清單的關鍵字 ex: WorldClock.data.filters = ["Asia"]');
