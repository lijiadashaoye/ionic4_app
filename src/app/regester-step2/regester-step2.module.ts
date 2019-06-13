import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegesterStep2Page } from './regester-step2.page';

const routes: Routes = [
  {
    path: '',
    component: RegesterStep2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegesterStep2Page]
})
export class RegesterStep2PageModule {}
