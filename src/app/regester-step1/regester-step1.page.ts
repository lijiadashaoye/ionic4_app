import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';

@Component({
  selector: 'app-regester-step1',
  templateUrl: './regester-step1.page.html',
  styleUrls: ['./regester-step1.page.scss'],
})
export class RegesterStep1Page implements OnInit {

  constructor(public navCon: NavController,
   ) {}

  ngOnInit() {}
  toBack() {
    this.navCon.back()
  }
  next() {
    this.navCon.navigateForward('/regester-step2')
  }
  content() {
    
  }
}