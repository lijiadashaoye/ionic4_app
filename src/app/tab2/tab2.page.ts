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
  ngOnInit(): void {
    for (let i = 1; i < 20; i++) {
      this.left_lists.push(`分类${i}`)
    }
  }
}