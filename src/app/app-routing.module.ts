import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pages/landing', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
