import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
