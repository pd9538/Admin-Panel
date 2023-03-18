import { AddImagesComponent } from './add-images/add-images.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images.component';

const routes: Routes = [
  { path:'imageview',component:ImagesComponent},
  { path:'add-images',component:AddImagesComponent},
  { path:'add-images/:id',component:AddImagesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
