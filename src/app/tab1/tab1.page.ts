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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  BaseUrl = '';
  listSlide = [];
  hotList = [];
  slideOpts = {
    initialSlide: 0, // 最先显示的页面
    speed: 1000, // 轮播速度
    loop: true, // 循环  
    autoplay: { // 等待多久开始自动播放
      delay: 1000,
    },
  };
  lists = []; // list的数据
  constructor(public navCon: NavController, public http: httpService) {}

  ngOnInit(): void {
    this.BaseUrl = this.http.BaseUrl;
    this.getLunBoData();
    this.getProductList();
    this.getLikeList();
  }
  // 获取轮播图片
  getLunBoData() {
    this.http.ajaxGet({
      url: 'api/focus'
    }).subscribe(res => {
      this.listSlide = res['result'];
    })
  }
  // 获取商品列表数据
  getProductList() {
    // is_hot=1
    // is_best=1
    // is_new=1
    // search
    this.http.ajaxGet({
      url: 'api/plist?is_best=1'
    }).subscribe(res => {
      this.lists = res['result'];
    })
  }
  // 获取猜你喜欢列表数据
  getLikeList() {
    // is_hot=1
    // is_best=1
    // is_new=1
    // search
    this.http.ajaxGet({
      url: 'api/plist?is_hot=1'
    }).subscribe(res => {
      this.hotList = res['result'];
    })
  }


  ionSlideTouchEnd(e) { // 手动滑动结束
    setTimeout(() => e.target.startAutoplay(), 3000)
  }
  ionSlideTap(e) { // 点击图片
    e.target.getActiveIndex().then(res=>{
      console.log(res)
    })
  }

  toSearch() {
    this.navCon.navigateForward('/search')
  }

}