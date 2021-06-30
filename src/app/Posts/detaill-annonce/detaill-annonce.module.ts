import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaillAnnoncePageRoutingModule } from './detaill-annonce-routing.module';

import { DetaillAnnoncePage } from './detaill-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaillAnnoncePageRoutingModule
  ],
  declarations: [DetaillAnnoncePage]
})
export class DetaillAnnoncePageModule {}
