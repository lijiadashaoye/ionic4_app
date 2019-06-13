import {
  Component
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  httpService
} from '../service/service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  BaseUrl = '';
  selectID = '';

  left_lists = []; // 左侧导航
  right_lists = []; // 右侧产品展示数据
  constructor(public navCon: NavController, public http: httpService) {}
  ngOnInit(): void {
    this.BaseUrl = this.http.BaseUrl;
    this.getProductList()
  }

  // 获取商品分类列表数据
  getProductList() {
    this.http.ajaxGet({
      url: 'api/pcate'
    }).subscribe(res => {
      this.left_lists = res['result'];
      this.getProductInfo(this.left_lists[0]._id)
    })
  }

  // 获取商品分类具体数据
  getProductInfo(id) {
    this.selectID = id;
    this.http.ajaxGet({
      url: `api/pcate?pid=${id}`
    }).subscribe(res => {
      this.right_lists = res['result'];
    })
  }

  toSearch() {
    this.navCon.navigateForward('/search')
  }
}