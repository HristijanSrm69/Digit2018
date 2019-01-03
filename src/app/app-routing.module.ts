import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FitnessComponent } from './fitness/fitness.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { FunComponent } from './fun/fun.component';
const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'fitness', component: FitnessComponent},
  { path: 'education', component: EducationComponent},
  { path: 'fun', component: FunComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
