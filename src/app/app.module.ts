import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms'
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  RouteReuseStrategy
} from '@angular/router';

import {
  IonicModule,
  IonicRouteStrategy
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  httpService
} from './service/service';


// 配置全局统一样式
const config: object = {
  mode: 'ios',
  backButtonText: '返回' // 设置默认返回按钮文字
}
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(config), AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    httpService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}