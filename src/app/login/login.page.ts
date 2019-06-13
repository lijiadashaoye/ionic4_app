import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCon: NavController) {}

  ngOnInit() {}
  toBack() {
    this.navCon.back()
  }
  // 联系客服
  makePhone() {
    console.log('联系客服')
  }
  // 忘记密码
  forgetPass() {
    console.log('忘记密码')
  }
  // 新用户注册
  newUser() {
    this.navCon.navigateForward('/regester-step1')
  }
  // 执行登陆
  toLogin() {
    console.log('登陆')
  }
}