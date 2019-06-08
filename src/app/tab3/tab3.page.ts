import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  productList = [];

  ngOnInit(): void {
    for (let i = 3; i--;) {

      let obj = {
        bottom: {
          img: `assets/images/list${i+1}.jpg`,
          title: '产品介绍',
          checked: '已选产品',
          num: 1,
          price: 5.31
        }
      }
      if (i % 2 === 0) {
        obj['top'] = {
          title: '可以换购',
          type: '去换购'
        }
      }
      this.productList.push(obj)
    }
  }
  changeNum(type, item) {
    if (type) {
      item.bottom.num++
    } else {
      if (item.bottom.num > 1) {
        item.bottom.num--
      }
    }
  }

  // 设置价格整数位
  setZheng(price, num) {
    let total: number = 0;
    for (let i = 0; i < num; i++) {
      total += price
    }
    let arr = total.toFixed(2).split('.');
    return arr[0]
  }
  // 设置价格小数位
  setLing(price, num) {
    let total: number = 0;
    for (let i = 0; i < num; i++) {
      total += price
    }
    let arr = total.toFixed(2).split('.');
    if (arr[1].length === 1) {
      return arr[1] + '0'
    } else {
      return arr[1]
    }
  }
}