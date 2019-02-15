;(function(global) {
    const _ninemultiplynine = {
        init: function() {
            this.data = this.compute();
            this.render();
            return this;
        },

        data: [],
        
        compute: function() {
            const _compute = function(i) {
                let val = [];
                for (let j = 1; j < 10; j++) {
                    val.push({ number: i, multiply: j, equal: i * j });
                }
                return val;
            }
            const _data = [];
            for (let i = 2; i < 10; i++) {
                _data.push({ title: i, values: _compute(i) });
            }
            return _data;
        },

        render: function() {
            const list = document.querySelector('#Nine_Multiply_Nine');
            const header = document.querySelector('#ColTitle').content;
            const template = document.querySelector('#ColTemplate').content;
            
            const _renderTitle = function (target, value) {
                const title = document.createElement('header');
                title.className = 'title';
                title.innerText = value;
                target.appendChild(title);
            }

            const _renderValues = function (target, values) {
                values.forEach(val => {
                    const {number, multiply, equal} = val;
                    const div = document.createElement('div');
                    div.className = 'val';
                    div.innerText = `${number} × ${multiply} ＝ ${equal}`;
                    target.appendChild(div)
                });
            }

            list.appendChild(header);
            this.data.forEach(item => {
                const newTemplate = template.cloneNode(true);
                const content = newTemplate.querySelector('.content');
                content.innerHTML = '';
                _renderTitle(content, item.title);
                _renderValues(content, item.values);
                list.appendChild(newTemplate);
            });
        }
    };
    let NineMultiplyNine = function() {
        return _ninemultiplynine.init();
    };

    global.NineMultiplyNine = global.NineMultiplyNine || NineMultiplyNine();
}(window));

// ;(function() {
//     const data = (function () {
//         let _data = [];
//         for (let i = 1; i < 9; i++) {
//             let title = i + 1;
//             let values = [];
//             for (let j = 0; j < 9; j++) {
//                 let multiply = j + 1;
//                 values.push(`${title} × ${multiply} ＝ ${title * multiply}`)
//             }
//             _data.push({ title, values });
//         }
//         return _data;
//     }());
//     // rander
//     const list = document.querySelector('#Nine_Multiply_Nine');
//     const header = list.querySelector('header.header');
//     const template = document.querySelector('#ColTemplate').content;

//     list.innerHTML = '';
//     list.appendChild(header);

//     data.forEach(item => {
//         const temp = template.cloneNode(true);
//         const content = temp.querySelector('.content');
//         content.innerHTML = '';

//         const title = document.createElement('header');
//         title.className = 'title';
//         title.innerText = item.title;
//         content.appendChild(title);

//         item.values.forEach(val => {
//             let div = document.createElement('div');
//             div.className = 'val';
//             div.innerText = val;
//             content.appendChild(div)
//         });

//         list.appendChild(temp);
//     });
// }());