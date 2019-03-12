import { Component, OnInit, Input, HostListener } from '@angular/core';

import { Key, KEYTYPE, SYMBOL, FUNC } from '../key';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {
  @Input() keylist: Array<Key>;
  private total: number;
  private clacDetail: string;

  private enterKeyList = [];
  private reStartEnter = false;

  constructor() { }

  ngOnInit() {
    this.total = 0;
    this.clacDetail = '';
  }

  @HostListener('document:keydown', ['$event']) onKeydown(e) {
    const keyCode: number = e.keyCode;
    const usingShift: boolean = e.shiftKey;
    const targetkey = this.keylist.find(key => key.keyCodes.some(code => {
      if (usingShift && typeof(code) === 'string') {
        const keyCombi: number = Number(code.split('+')[1]);
        return keyCombi === keyCode;
      } else {
        return code === keyCode;
      }
    }));
    if (!targetkey) { return; }
    this.enterKey(targetkey);
  }

  // 當按下計算機裡的任何一個按鈕時
  enterKey(key: Key | string): void {
    let enterKey: Key;
    if (typeof(key) === 'string') {
      enterKey = {...this.findKey(key)};
    } else {
      enterKey = key;
    }

    const enterKeyLength = this.enterKeyList.length;

    if (this.reStartEnter) {
      this.clearClacAndTotal();
    }

    switch (enterKey.type) {
      // 如果是數字類型
      case KEYTYPE[0]: {

        this.enterKeyList.push(enterKey);

        break;
      }

      // 如果是計算類型
      case KEYTYPE[1]: {

        // 避免計算類型放在第一個項目
        if (!(enterKeyLength > 0)) { break; }
        if (this.enterKeyList[enterKeyLength - 1].type === KEYTYPE[1]) {
          this.enterKeyList.splice(enterKeyLength - 1, 1);
        }
        this.enterKeyList.push(enterKey);
        break;
      }

      // 如果是函式類型
      case KEYTYPE[2]: {
        switch (enterKey.key) {
          // =
          case FUNC[0]: {

            // 計算結果
            this.total = this.calculatorContent();
            this.reStartEnter = true;
            break;
          }

          // ⌫
          case FUNC[1]: {

            // 去掉最後輸入的內容
            if (enterKeyLength > 0) {
              this.enterKeyList.splice(enterKeyLength - 1, 1);
            }

            break;
          }

          // c
          case FUNC[2]: {

            this.clearClacAndTotal();

            break;
          }
        }
        break;
      }

      // 小數點類型
      case KEYTYPE[3]: {
        // 確認清單內沒有小數點
        const checkpoint = this.enterKeyList.reduce((search, k) => {

          // 如果輸入運算子
          if (k.type === KEYTYPE[3]) {
            search = true;
          } else if (k.type === KEYTYPE[1]) {
            search = false;
          }
          return search;
        }, false);

        // 如果放在第一個項目的話加上0
        if (enterKeyLength <= 0) {
          this.enterKeyList.push(new Key('0', KEYTYPE[0], []));
        }

        // 防止重複小數點
        if (!checkpoint) {
          this.enterKeyList.push(enterKey);
        }

        break;
      }

      default: {
        break;
      }
    }

    this.clacDetail = this.randerClacDetail();
  }
  findKey(keyName: string): Key {
    return this.keylist.find(k => k.key === keyName);
  }

  // 將KeyList轉成算式清單(組合數字)
  parseClacList(KeyList: Array<Key>): Array<Key> {
    let lastType: string;
    const numtype = KEYTYPE[0];
    const pointtype = KEYTYPE[3];
    const newList: Array<Key> = [];
    for (const k of KeyList) {
      const length = newList.length;
      const judge = (lastType === numtype || lastType === pointtype) && (k.type === numtype || k.type === pointtype);
      if (length !== 0 && judge) {
        newList[length - 1].key = newList[length - 1].key + k.key;
      } else {
        newList.push(k);
      }
      lastType = k.type;
    }
    return newList;
  }

  // 列出機算項目
  randerClacDetail(): string {
    // 阻止傳址傳值
    const enterKeyList = JSON.parse(JSON.stringify(this.enterKeyList));
    return this.parseClacList(enterKeyList).map(k => k.key).join(' ').trim();
  }

  computational(numberA: number, numberB: number, symbol: string) {
    switch (symbol) {

      // +
      case SYMBOL[0]: {
        return numberA + numberB;
      }

      // -
      case SYMBOL[1]: {
        return numberA - numberB;
      }

      // *
      case SYMBOL[2]: {
        return numberA * numberB;
      }

      // /
      case SYMBOL[3]: {
        return numberA / numberB;
      }
    }
  }

  // 計算結果
  calculatorContent(): number {
    // 將輸入的Key字串整理成算式陣列
    const numtype = KEYTYPE[0];
    const pointtype = KEYTYPE[3];
    const counttype = KEYTYPE[1];

    // 阻止傳址傳值
    const enterKeyList = JSON.parse(JSON.stringify(this.enterKeyList));
    const calcList = this.parseClacList(enterKeyList);

    interface CalcListTotal {
      total: number;
      beforeNumber: number;
      clactype: string;
    }
    const Total = calcList.reduce((clt: CalcListTotal, val: Key, index: number) => {
      // 此處要保證第一個是數值 (enterKey的時候就要判別)
      if (index === 0 && val.type === numtype) {
        clt.total += Number(val.key);
        clt.beforeNumber = Number(val.key);
      } else {

        if (val.type === numtype || val.type === pointtype) {
          clt.total = this.computational(clt.beforeNumber, Number(val.key), clt.clactype);
          clt.beforeNumber = clt.total;
        }

        if (val.type === counttype) {
          clt.clactype = val.key;
        }
      }
      return clt;
    }, {
      total: 0,
      beforeNumber: null,
      clactype: ''
    }).total;
    // console.log(calcList, Total);
    return parseFloat(Number(Total).toFixed(10));
  }

  clearClacAndTotal() {
    this.enterKeyList = [];
    this.total = 0;
    this.reStartEnter = false;
  }

  get Total() {
    const num = this.total.toString().split('.');
    num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num.join('.');
  }

  get Calc() {
    return this.clacDetail === '' ? '-' : this.clacDetail;
  }
  set Calc(values) {
    this.clacDetail = values;
  }
}
