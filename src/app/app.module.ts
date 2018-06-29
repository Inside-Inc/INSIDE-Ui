import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClientSignUpHeaderComponent } from './client-sign-up/client-sign-up-header/client-sign-up-header.component';
import { ClientSignUpContentComponent } from './client-sign-up/client-sign-up-content/client-sign-up-content.component';
import { ClientVerificationAcceptedComponent } from './client-verification/client-verification-accepted/client-verification-accepted.component';
import { ClientAccountRestoreOptionsComponent } from './client-restore-account/client-account-restore-options/client-account-restore-options.component';
import { ClientVerificationCodeComponent } from './client-restore-account/client-verification-code/client-verification-code.component';
import { ClientControllersBarComponent } from './client-relations/client-controllers-bar/client-controllers-bar.component';
import { ClientSideMenuComponent } from './client-relations/client-side-menu/client-side-menu.component';
import { ClientFRequestComponent } from './client-relations/client-objects/client-f-request/client-f-request.component';
import { ClientAllComponent } from './client-relations/client-objects/client-all/client-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientSignUpHeaderComponent,
    ClientSignUpContentComponent,
    routingComponents,
    ClientVerificationAcceptedComponent,
    ClientAccountRestoreOptionsComponent,
    ClientVerificationCodeComponent,
    ClientControllersBarComponent,
    ClientSideMenuComponent,
    ClientFRequestComponent,
    ClientAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
