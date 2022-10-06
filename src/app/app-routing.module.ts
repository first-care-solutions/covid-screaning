import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VirtualRoomComponent } from './pages/virtual-room/virtual-room.component';

const routes: Routes = [
  { path: 'virtual-room', component: VirtualRoomComponent },
  { path: 'pages/virtual-room', component: VirtualRoomComponent },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'pages/landing',
    component: LandingPageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
