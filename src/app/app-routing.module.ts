import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // for routing functionality
import { HeroesComponent } from './heroes/heroes.component'; // to give the router somewhere to go once the routes are configured
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// tell the Router which view to display when a user clicks a link or
// pastes a URL into the browser address bar
// a typical Angular Route has two properties
// path: a string that matches the URL in the browser address bar
// component: the component that the router should create when navigating to this route
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}, // localhost:4200/heroes will display the HeroesComponent
  {path: 'dashboard', component: DashboardComponent}, // localhost:4200/dashboard
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // landing page
  {path: 'detail/:id', component: HeroDetailComponent} // each hero will have it's own page
];

/**
 * In angular, the best practice is to load and configure the router in a separate, top-level module
 * that is dedicated to routing and imported by the root AppModule
 */
@NgModule({
  // configure the router at the application's root level; perform the initial navigation
  // i.e. perform the initial navigation based on the current browser URL
  imports: [RouterModule.forRoot(routes)],
  // export RouterModule so RouterModule can be available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
