import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { ClientSignInComponent } from './client-sign-in/client-sign-in.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // }
  {path: 'client-sign-in', component: ClientSignInComponent },
  {path: 'client-sign-up', component: ClientSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
     ClientSignInComponent,
     ClientSignUpComponent
];
