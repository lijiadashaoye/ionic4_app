import {
  enableProdMode
} from '@angular/core';
import {
  platformBrowserDynamic
} from '@angular/platform-browser-dynamic';

import {
  AppModule
} from './app/app.module';
import {
  environment
} from './environments/environment';

// npm i hammerjs --save
import 'hammerjs'; // 引入配置手势事件


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));