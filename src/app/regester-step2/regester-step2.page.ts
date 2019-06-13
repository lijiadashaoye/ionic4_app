import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
@Component({
  selector: 'app-regester-step2',
  templateUrl: './regester-step2.page.html',
  styleUrls: ['./regester-step2.page.scss'],
})
export class RegesterStep2Page implements OnInit {

  constructor(public navCon: NavController) {}
  ngOnInit() {}
  toBack() {
    this.navCon.back()
  }
  next() {
    this.navCon.navigateForward('/regester-step3')
  }
}