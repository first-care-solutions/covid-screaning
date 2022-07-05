import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/landing', pathMatch: 'full' },
  { path: 'pages/landing', component: LandingPageComponent },
  { path: 'home', redirectTo: 'pages/landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
