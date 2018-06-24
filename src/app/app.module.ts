import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClientSignUpHeaderComponent } from './client-sign-up/client-sign-up-header/client-sign-up-header.component';
import { ClientSignUpContentComponent } from './client-sign-up-content/client-sign-up-content.component';
import { SignInComponent } from './sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientSignUpHeaderComponent,
    ClientSignUpContentComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
