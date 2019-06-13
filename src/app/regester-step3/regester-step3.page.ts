import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
@Component({
  selector: 'app-regester-step3',
  templateUrl: './regester-step3.page.html',
  styleUrls: ['./regester-step3.page.scss'],
})
export class RegesterStep3Page implements OnInit {

  constructor(public navCon: NavController) {}

  ngOnInit() {}
  toBack() {
    this.navCon.back()
  }
  next() {
    sessionStorage.setItem('user', JSON.stringify({
      user: '李朋'
    }))
    this.navCon.navigateForward('/tabs/tab4')
  }
}