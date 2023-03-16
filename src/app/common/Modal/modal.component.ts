import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './modal.component.html',
  styles: [".btn { color:#828282 !important; border-color:#828282 !important } .btn:hover { color:#fff !important; background-color:#1b47e9 !important; border-color:#ebe3e1 !important }"]
})
export class NgbdModalContentComponent  {
  @Input() content:any;
  @Input() sure: any;
  @Input() modalType:any;

  constructor(public activeModal: NgbActiveModal) {
  }


  @Input() cancel: () => void = () => {
  }
}
