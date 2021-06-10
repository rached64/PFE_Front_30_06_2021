import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostSimplePageRoutingModule } from './add-post-simple-routing.module';

import { AddPostSimplePage } from './add-post-simple.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddPostSimplePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddPostSimplePage]
})
export class AddPostSimplePageModule {}
