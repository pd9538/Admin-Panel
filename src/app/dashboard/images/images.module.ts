import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesComponent } from './images.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { AddImagesComponent } from './add-images/add-images.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ImagesComponent,
    AddImagesComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    NgbDatepickerModule
  ]
})
export class ImagesModule { }
