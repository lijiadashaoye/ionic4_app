import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'regester-step1', loadChildren: './regester-step1/regester-step1.module#RegesterStep1PageModule' },
  { path: 'regester-step2', loadChildren: './regester-step2/regester-step2.module#RegesterStep2PageModule' },
  { path: 'regester-step3', loadChildren: './regester-step3/regester-step3.module#RegesterStep3PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
