import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from './modal-content/modal-content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  name = 'Star Bucks';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = this.name;

    modalRef.componentInstance.passEntry.subscribe((data) => {
      this.name = data;
    });
  }
}
