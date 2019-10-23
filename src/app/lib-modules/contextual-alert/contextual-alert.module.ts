import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextualAlertComponent } from './contextual-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ContextualAlertComponent],
  exports: [ ContextualAlertComponent ]
})
export class ContextualAlertModule { }
