import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostSimplePage } from './add-post-simple.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostSimplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostSimplePageRoutingModule {}
