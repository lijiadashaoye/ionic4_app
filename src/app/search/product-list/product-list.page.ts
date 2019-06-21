import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';
import {
  IonContent
} from '@ionic/angular'

import {
  httpService
} from '../../service/service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  BaseUrl = '';
  lists = [];
  page = 1;
  @Input() cid = '';
  @Input() list = [];

  constructor(
    public http: httpService
  ) {}

  ngOnInit() {
    this.BaseUrl = this.http.BaseUrl;
    this.lists = this.list;
    if (this.cid) {
      this.loadData(null)
    }
  }
  // 获取数据
  loadData(event) {
    this.http.ajaxGet({
      url: `api/plist?cid=${this.cid}&page=${this.page}`
    }).subscribe(res => {
      if (res['result'].length == 0) {
        event ? event.target.disabled = true : ''; // 禁用上拉加载
      }
      this.page++;
      this.lists = [...this.lists, ...res['result']];
      event ? event.target.complete() : ''; // 停止旋转
    })
  }
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('infinite') infinite;

  scrolltop() {
    this.content.scrollToTop(0)
  }

  doSearch(text) {
    this.page = 1;
    this.scrolltop();
    this.http.ajaxGet({
      url: 'api/plist?search=' + text
    }).subscribe(res => {
      this.lists = res['result'];
      this.infinite.disabled = false; // 禁用上拉加载
    })
  }

}