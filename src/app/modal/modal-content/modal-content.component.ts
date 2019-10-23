import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ContextualAlertModel} from '../../lib-modules/contextual-alert/contextual-alert.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  @Input() name;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  parentElementValue = 'app-modal-content';
  contextualAlertModel: ContextualAlertModel;
  myForm: FormGroup;

  createForm() {
    this.myForm = this.formBuilder.group({
      name: [this.name, Validators.compose([Validators.required])]
    });
  }

  constructor(private formBuilder: FormBuilder,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.passEntry.emit(this.name);
    this.activeModal.close();
  }
}
