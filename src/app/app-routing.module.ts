import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { VirtualRoomComponent } from './pages/virtual-room/virtual-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/landing', pathMatch: 'full' },
  { path: 'pages/landing', component: LandingPageComponent },
  { path: 'home', redirectTo: 'pages/landing', pathMatch: 'full' },
  { path: 'pages/virtual-room', component: VirtualRoomComponent },
  { path: 'virtual-room', redirectTo: 'pages/virtual-room', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
