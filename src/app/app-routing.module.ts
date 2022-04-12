import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { VirtualRoomComponent } from './pages/virtual-room/virtual-room.component';



const routes: Routes = [
  { 
      path: '', 
      redirectTo: 'pages/LandingPage',
      pathMatch: 'full'
   },
   { 
    path: 'home', 
    redirectTo: 'pages/LandingPage',
    component: LandingPageComponent,
    pathMatch: 'full'
 },
 { 
  path: 'pages/landing', 
  redirectTo: 'pages/LandingPage',
  component: LandingPageComponent,
  pathMatch: 'full'
},
{ 
  path: '/virtual-room', 
  redirectTo: 'pages/virtual-room',
  component: VirtualRoomComponent,
  pathMatch: 'full'
},
{ 
  path: 'pages/virtual-room',
  redirectTo: 'pages/virtual-room',
  component: VirtualRoomComponent,
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: ''
    },
            
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
