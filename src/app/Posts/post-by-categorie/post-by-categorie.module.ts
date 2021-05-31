import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostByCategoriePageRoutingModule } from './post-by-categorie-routing.module';

import { PostByCategoriePage } from './post-by-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostByCategoriePageRoutingModule
  ],
  declarations: [PostByCategoriePage]
})
export class PostByCategoriePageModule {}
