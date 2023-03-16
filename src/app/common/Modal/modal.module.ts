import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbdModalContentComponent} from './modal.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [NgbdModalContentComponent],
  exports: [NgbdModalContentComponent],
  bootstrap: [NgbdModalContentComponent]
  // entryComponents: [NgbdModalContent] // this line would be needed in Angular 8 or older
})
export class NgbdModalComponentModule {
}
