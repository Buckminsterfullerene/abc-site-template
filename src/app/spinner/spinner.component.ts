import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnChanges {
  @Input() widgetSpinnerLoading = false;
  @Input() allowBackdropColor = false;
  @Input() loadingText = 'Loading';
  @Input() styleClasses;
  showWidgetSpinner = false;

  constructor() {
  }

  ngOnChanges(inputs) {
    this.showWidgetSpinner = this.widgetSpinnerLoading;
  }

}
