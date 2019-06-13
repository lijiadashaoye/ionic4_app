import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegesterStep3Page } from './regester-step3.page';

const routes: Routes = [
  {
    path: '',
    component: RegesterStep3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegesterStep3Page]
})
export class RegesterStep3PageModule {}
