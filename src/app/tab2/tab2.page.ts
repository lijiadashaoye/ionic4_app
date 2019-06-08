import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  left_lists = []; // 左侧导航
  right_lists = []; // 右侧产品展示数据
  ngOnInit(): void {
    for (let i = 1; i < 20; i++) {
      this.left_lists.push(`分类${i}`)
    }
    for (let i = 0; i < 12; i++) {
      this.right_lists.push({
        pic: `assets/images/list${i+1}.jpg`,
        title: `第${i+1}个`
      })
    }
  }
}