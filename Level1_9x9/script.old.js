;(function() {
    const data = (function () {
        let _data = [];
        for (let i = 1; i < 9; i++) {
            let title = i + 1;
            let values = [];
            for (let j = 0; j < 9; j++) {
                let multiply = j + 1;
                values.push(`${title} × ${multiply} ＝ ${title * multiply}`)
            }
            _data.push({ title, values });
        }
        return _data;
    }());
    // rander
    const list = document.querySelector('#Nine_Multiply_Nine');
    const header = list.querySelector('header.header');
    const template = document.querySelector('#ColTemplate').content;

    list.innerHTML = '';
    list.appendChild(header);

    data.forEach(item => {
        const temp = template.cloneNode(true);
        const content = temp.querySelector('.content');
        content.innerHTML = '';

        const title = document.createElement('header');
        title.className = 'title';
        title.innerText = item.title;
        content.appendChild(title);

        item.values.forEach(val => {
            let div = document.createElement('div');
            div.className = 'val';
            div.innerText = val;
            content.appendChild(div)
        });

        list.appendChild(temp);
    });
}());