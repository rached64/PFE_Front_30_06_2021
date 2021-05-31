import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpProPage } from './sign-up-pro.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpProPageRoutingModule {}
