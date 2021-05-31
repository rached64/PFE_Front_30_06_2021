import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostByCategoriePage } from './post-by-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: PostByCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostByCategoriePageRoutingModule {}
