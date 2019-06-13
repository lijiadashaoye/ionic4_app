import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from "@ionic/angular"

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  isLogin = false;
  userName = ''
  constructor(public nav: NavController) {}

  ngOnInit() {
    let kk = JSON.parse(sessionStorage.getItem('user'));
    if (kk) {
      this.userName = kk.user;
      this.isLogin = true;
    }

  }
  toLogin() {
    this.nav.navigateForward('/login')
  }

}