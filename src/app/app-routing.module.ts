import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import {LoadingPageComponent} from './loading-page/loading-page.component';
import { LoggedMainComponent } from './logged-main/logged-main.component';

const routes: Routes = [
  {path:'', component: LoadingPageComponent},
  { path: 'log-in', component: LogInComponent},
  {path:'logged-main', component: LoggedMainComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
