import { NgxPaginationModule } from 'ngx-pagination';
import { ImageSortableHeaderDirective } from './services/image-sortable.directive';
import { ImageFilterPipe } from './services/image-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesComponent } from './images.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { AddImagesComponent } from './add-images/add-images.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    ImagesComponent,
    AddImagesComponent,
    ImageFilterPipe,
    ImageSortableHeaderDirective
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgxPaginationModule,
    FileUploadModule
  ]
})
export class ImagesModule { }
