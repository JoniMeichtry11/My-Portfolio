import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "about-me", component: AboutMeComponent
  },
  {
    path: "proyects", component: ProyectsComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "**", redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
