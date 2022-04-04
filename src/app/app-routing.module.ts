import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { CheckComponent } from './components/check/check.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'check', component: CheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
