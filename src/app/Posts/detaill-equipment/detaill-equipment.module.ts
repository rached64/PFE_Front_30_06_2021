import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaillEquipmentPageRoutingModule } from './detaill-equipment-routing.module';

import { DetaillEquipmentPage } from './detaill-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaillEquipmentPageRoutingModule
  ],
  declarations: [DetaillEquipmentPage]
})
export class DetaillEquipmentPageModule {}
