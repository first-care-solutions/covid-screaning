import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { VirtualRoomComponent } from './pages/virtual-room/virtual-room.component';
import { IonicModule, IonicRouteStrategy, IonVirtualScroll } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,LandingPageComponent, VirtualRoomComponent],
  entryComponents: [],
  imports: [BrowserModule, ScrollingModule, IonicModule.forRoot(), CommonModule ,AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
