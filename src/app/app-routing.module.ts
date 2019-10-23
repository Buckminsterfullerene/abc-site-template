import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ChartsComponent} from './charts/charts.component';
import {FormExampleComponent} from './form-example/form-example.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ModalComponent} from './modal/modal.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'form-example', component: FormExampleComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'charts/:chartType',
    component: ChartsComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  // Error pages
  {
    path: ':error',
    component: PageNotFoundComponent
  },
  { path: 'error-404', redirectTo: 'error' },
  { path: '**', redirectTo: 'error' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
