import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaillAnnoncePage } from './detaill-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: DetaillAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaillAnnoncePageRoutingModule {}
