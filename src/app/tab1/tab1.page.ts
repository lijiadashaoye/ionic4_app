import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
  ngOnInit(): void {
    for (let i = 1; i < 4; i++) {
      this.listSlide.push({
        pic: `assets/images/slide0${i}.png`,
        url: ''
      })
    }
    for (let i = 0; i < 10; i++) {
      this.hotList.push({
        pic: `assets/images/0${i}.jpg`,
        title: `第${i+1}个`
      })
    }
  }

  ionSlideTouchEnd(e) { // 手动滑动结束
    setTimeout(() => e.target.startAutoplay(), 3000)
  }
  ionSlideTap(e) { // 点击图片
    e.target.getActiveIndex()
  }

}