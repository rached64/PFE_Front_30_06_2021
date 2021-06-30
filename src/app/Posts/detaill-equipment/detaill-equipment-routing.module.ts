import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaillEquipmentPage } from './detaill-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: DetaillEquipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaillEquipmentPageRoutingModule {}
