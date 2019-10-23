import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {WelcomeComponent} from './welcome/welcome.component';
import {ContextualAlertModule} from './lib-modules/contextual-alert/contextual-alert.module';
import { FormExampleComponent } from './form-example/form-example.component';
import {GoogleChartsModule} from 'angular-google-charts';
import { ChartsComponent } from './charts/charts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import {ModalContentComponent} from './modal/modal-content/modal-content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    WelcomeComponent,
    FormExampleComponent,
    WelcomeComponent,
    ChartsComponent,
    PageNotFoundComponent,
    ModalComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ContextualAlertModule,
    GoogleChartsModule,
    NgbModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule {
}
