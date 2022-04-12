import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { 
      path: '', 
      redirectTo: 'pages/LandingPage',
      pathMatch: 'full'
   },
   { 
    path: 'home', 
    redirectTo: 'pages/LandingPage',
    pathMatch: 'full'
 },
 { 
  path: 'pages/landing', 
  redirectTo: 'pages/LandingPage',
  pathMatch: 'full'
},
{ 
  path: '/virtual-room', 
  redirectTo: 'pages/virtual-room',
  pathMatch: 'full'
},
{ 
  path: 'pages/virtual-room', 
  redirectTo: 'pages/virtual-room',
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
