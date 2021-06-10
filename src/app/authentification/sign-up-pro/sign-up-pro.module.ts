import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpProPageRoutingModule } from './sign-up-pro-routing.module';

import { SignUpProPage } from './sign-up-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpProPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [SignUpProPage]
})
export class SignUpProPageModule {}
