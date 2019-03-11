export class Key {
    key: string;
    classlist: Array<string>;
    type: string;
    keyCodes: Array<number | string>;

    constructor(key?: string, type?: string, classlist?: string[]) {
        this.key = key;
        this.type = type;
        this.classlist = classlist;
    }
}

export const KEYTYPE = ['number', 'count', 'func', 'point'];

export const SYMBOL = ['+', '−', '×', '÷'];

export const FUNC = ['=', '⌫', 'C'];

export const KEYLIST: Array<Key> = [
    {
        key: '7',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [55, 103]
    },
    {
        key: '8',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [56, 104]
    },
    {
        key: '9',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [57, 105]
    },
    {
        key: '÷',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [111, 191]
    },
    {
        key: '4',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [52, 100]
    },
    {
        key: '5',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [53, 101]
    },
    {
        key: '6',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [54, 102]
    },
    {
        key: '×',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [106, '16+56']
    },
    {
        key: '1',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [49, 97]
    },
    {
        key: '2',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [50, 98]
    },
    {
        key: '3',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [51, 99]
    },
    {
        key: '+',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [107, '16+187']
    },
    {
        key: '0',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: [48, 96]
    },
    {
        key: '00',
        classlist: ['key', 'num'],
        type: 'number',
        keyCodes: []
    },
    {
        key: '.',
        classlist: ['key', 'num'],
        type: 'point',
        keyCodes: [110, 190]
    },
    {
        key: '−',
        classlist: ['key', 'count'],
        type: 'count',
        keyCodes: [109, 189]
    },
    {
        key: 'C',
        classlist: ['key', 'light'],
        type: 'func',
        keyCodes: [46]
    },
    {
        key: '⌫',
        classlist: ['key', 'light'],
        type: 'func',
        keyCodes: [8]
    },
    {
        key: '=',
        classlist: ['key', 'key-dbl', 'equal'],
        type: 'func',
        keyCodes: [13, 187]
    }

    ];
