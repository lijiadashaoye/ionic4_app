import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegesterStep1Page } from './regester-step1.page';

const routes: Routes = [
  {
    path: '',
    component: RegesterStep1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegesterStep1Page]
})
export class RegesterStep1PageModule {}
