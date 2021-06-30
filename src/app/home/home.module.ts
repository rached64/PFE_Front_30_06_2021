import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PostPage } from '../Posts/post/post.page';
import { CategoriesPage } from '../categories/categories/categories.page';
import { AnnoncePage } from '../Posts/annonce/annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PostPage,CategoriesPage,AnnoncePage]
})
export class HomePageModule {}
