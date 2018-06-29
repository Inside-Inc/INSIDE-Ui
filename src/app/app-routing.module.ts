import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { ClientSignInComponent } from './client-sign-in/client-sign-in.component';
import { ClientSignUpComponent } from './client-sign-up/client-sign-up.component';
import { ClientVerificationFormComponent } from './client-verification/client-verification-form/client-verification-form.component';
import { ClientAccountRestoreOptionsComponent } from './client-restore-account/client-account-restore-options/client-account-restore-options.component';
const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // }
  {path: 'client-sign-in', component: ClientSignInComponent},
  {path: 'client-sign-up', component: ClientSignUpComponent},
  {path: 'client-verification-form', component: ClientVerificationFormComponent},
  {path: 'client-restore-account-options', component: ClientAccountRestoreOptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
     ClientSignInComponent,
     ClientSignUpComponent,
     ClientVerificationFormComponent,
     ClientAccountRestoreOptionsComponent
];
