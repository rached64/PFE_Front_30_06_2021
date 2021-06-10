import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from './services/categories.service';
import { PostsService } from './services/posts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NativeStorage } from '@ionic-native/native-storage/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CategoriesService,PostsService,NativeStorage],
  bootstrap: [AppComponent]
})
export class AppModule {}
