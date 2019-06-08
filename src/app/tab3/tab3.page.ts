import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  productList = []; // 数据列表
  total = { // 合计
    money: 0,
    num: 0
  }
  isCheckAll = false; // 全选的判断
  isClick = null;

  ngOnInit(): void {
    for (let i = 3; i--;) {
      let obj = {
        checked: false,
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
  // 每个产品数量变动
  changeNum(type, item) {
    if (type) {
      item.bottom.num++
    } else {
      if (item.bottom.num > 1) {
        item.bottom.num--
      }
    }
    this.setTotal()
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
  // 计算当前项项的总价
  // 如果所有项的 checked 全是 true 就表示全选 使 this.isCheckAll = true;
  // 若有一个为false，则不是全选，使 this.isCheckAll = fasle;
  changeTotal() {
    let arr = this.productList.map(item => item.checked)
    if (!arr.includes(false)) {
      this.isCheckAll = true;
    } else {
      this.isCheckAll = false;
    }
    this.setTotal()
  }
  // 设置全选按钮
  selectAll() {
    if (this.isCheckAll) {
      this.productList.forEach(item => item.checked = this.isCheckAll)
    } else {
      // 如果this.isCheckAll=false，执行此段代码
      // 再判断是否有未选中的，如果没有未选中的，则表示已经是全选状态，则全部变为不选中
      let arr = this.productList.map(item => item.checked)
      if (!arr.includes(false)) {
        this.productList.forEach(item => item.checked = this.isCheckAll)
      }
    }
    this.setTotal()
  }
  // 计算总价
  setTotal() {
    this.total.num = 0;
    this.total.money = 0;
    (async () => {
      await this.productList.forEach(item => {
        if (item.checked) {
          this.total.num += item.bottom.num;
          for (let i = 0; i < item.bottom.num; i++) {
            this.total.money += item.bottom.price
          }
        }
      })
      let arr = this.total.money.toFixed(2).split('.');
      if (arr[1].length === 1) {
        this.total.money = +(arr[0] + '.' + arr[1] + '0')
      } else {
        this.total.money = +(arr[0] + '.' + arr[1])
      }
    })()
  }
}