import {Component, OnInit} from '@angular/core';
import {ContextualAlertModel} from '../lib-modules/contextual-alert/contextual-alert.model';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  parentElementValue = 'app-form-example';
  contextualAlertModel: ContextualAlertModel;

  constructor() {
  }

  ngOnInit() {

  }

  showGlobalError() {
    this.contextualAlertModel = {
      message: 'globalServiceError',
      show: true,
      type: 'danger',
      doScroll: true,
      widgetClasses: 'form-control-width-lg'
    };
  }

  showSuccess() {
    this.contextualAlertModel = {
      message: 'Saved was successful.',
      show: true,
      type: 'success',
      doScroll: true,
      widgetClasses: 'form-control-width-lg'
    };
  }

  showInfo() {
    this.contextualAlertModel = {
      message: 'Show some information.',
      show: true,
      type: 'info',
      doScroll: true,
      widgetClasses: 'form-control-width-lg'
    };
  }

  showWarning() {
    this.contextualAlertModel = {
      message: 'I am showing you a warning.',
      show: true,
      type: 'warning',
      doScroll: true,
      widgetClasses: 'form-control-width-lg'
    };
  }
}
