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
          zheng: 5,
          ling: 30,
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
}