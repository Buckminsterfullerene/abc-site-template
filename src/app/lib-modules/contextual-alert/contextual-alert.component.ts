import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ContextualAlertModel} from './contextual-alert.model';


@Component({
  selector: 'app-contextual-alert',
  templateUrl: './contextual-alert.component.html'
})
export class ContextualAlertComponent implements OnInit, OnChanges {
  @Input() parentWidget: string = null;
  @Input() contextMsgModal: ContextualAlertModel;

  @Output() contextualAlertBtnClick = new EventEmitter<ContextualAlertModel>();
  widgetId = '';

  cntxtMsg: ContextualAlertModel;

  cntxtAlertBtnClickEmitter(currentTarget, contextAlert: ContextualAlertModel) {
    this.contextualAlertBtnClick.emit(currentTarget);
  }

  /**
   * @function
   * @name updateMsgAryData
   * @memberOf ContextualAlertComponent
   * @description Loops through the array of messages and updates the values.  The keys 'type' and 'icon' need the values
   * to be updated to acutal CSS classes.  Other updates checks the current value and replaces with defaults if needed.
   * @param {array} msgAry The array of messages to display in the contextual alert UL element.
   * @returns {array} Updated array of messages.
   */
  private updateMsgAryData(msgAry: Object[]) {
    msgAry.forEach((key: any) => {
      let type = key['type'];
      key['type'] = 'usa-alert--' + type;
      key['icon'] = 'alert-icon-' + type;
      key['message'] = key['message'];
      key['message2'] = key['message2'];
      key['buttonClasses'] = key['buttonClasses'] ? key['buttonClasses'] : 'ng-hide';
      key['buttonLabel'] = this.manageButtonLabel(key['buttonLabel'], key['buttonClasses']);
    });

    return msgAry;
  }

  /**
   * @function
   * @name manageButtonLabel
   * @memberOf ContextualAlertComponent
   * @description Checks if the message is set up properly for using a button.  If there is a no label but there are button CSS classes,
   * then output a message on the button stating there needs to be a label for using a button.
   * @param {string} label Text to be displayed for the button.
   * @param {string} btnCls A space delimited list of CSS classes to be added to the button.
   * @returns {String} The button label.
   */
  private manageButtonLabel(label: string, btnCls: string) {
    let btnClsAry: string[];
    let showDefaultLabel = true;

    if ((btnCls !== '' && btnCls !== undefined) && (label === '' || label === undefined)) {
      btnClsAry = btnCls.split(' ');

      for (let i in btnClsAry) {
        if (btnClsAry[i] === 'ng-hide') {
          showDefaultLabel = false;
          break;
        }
      }
    } else {
      showDefaultLabel = false;
    }

    return (showDefaultLabel) ? 'ERROR: BUTTON LABEL IS NEEDED.' : label;
  }

  private updateContextualAlert(alertObject: ContextualAlertModel) {
    const alertTypes = ['success', 'error', 'info', 'warning']; // List of valid alert types


    // Check to make sure the alert type is valid else set default to error.
    if (alertTypes.indexOf(alertObject.type) === -1) {
      alertObject.type = 'error';
    }


    if (alertObject.showCloseBtn === undefined) {
      if (alertObject.type === 'error') {
        alertObject.showCloseBtn = false;
      } else {
        alertObject.showCloseBtn = true;
      }
    }
    if (alertObject.message === 'globalServiceError') {
      alertObject.message = 'There was an error with the system, please try again later.';
    }

    // messageArray: (alertObject.messageArray) ? this.updateMsgAryData(alertObject.messageArray) : null,
    let additionalClasses = (alertObject.widgetClasses) ? alertObject.widgetClasses : '';
    alertObject = {
      message: alertObject.message,
      message2: alertObject.message2,
      messageArray: alertObject.messageArray,
      show: alertObject.show,
      buttonClasses: (alertObject.buttonClasses) ? alertObject.buttonClasses : 'ng-hide',
      buttonLabel: this.manageButtonLabel(alertObject.buttonLabel, alertObject.buttonClasses),
      buttonFunction: (alertObject.buttonFunction === undefined) ? 'true' : alertObject.buttonFunction,
      type: 'usa-alert--' + alertObject.type + ' ' + additionalClasses,
      icon: 'alert-icon-' + alertObject.type,
      doScroll: (alertObject.doScroll === undefined) ? false : alertObject.doScroll,
      showCloseBtn: alertObject.showCloseBtn
    };

    this.cntxtMsg = alertObject;
    setTimeout(() => {
      if (document.getElementById(this.widgetId + '-alert-message') !== null) {
        document.getElementById(this.widgetId + '-alert-message').focus();
      }
    }, 100);

  }

  constructor() {
  }

  ngOnChanges(inputs) {
    if (this.parentWidget === this.widgetId) {
      this.cntxtMsg = this.contextMsgModal;
      this.updateContextualAlert(this.contextMsgModal);
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.widgetId = this.parentWidget;
    // this.cntxtMsg.parentComponent = this.parentWidget;
    this.cntxtMsg = {
      message: '',
      message2: '',
      show: false,
      messageArray: [],
      buttonClasses: 'ng-hide',
      buttonLabel: 'ERROR: BUTTON LABEL IS NEEDED.',
      buttonFunction: 'true',
      type: '',
      icon: '',
      doScroll: false,
      showCloseBtn: false
    };
  }

}
