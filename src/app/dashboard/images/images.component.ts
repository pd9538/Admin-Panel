import { Observable } from 'rxjs';
import { ImageService } from './services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component,OnInit, QueryList, ViewChildren } from "@angular/core";
import { Images } from "src/app/Model/images";
import { compare, ImageSortableHeaderDirective, SortEvent } from './services/image-sortable.directive';
import Swal from 'sweetalert2';

@Component({
  templateUrl:'./images.component.html',
  styleUrls:['./images.component.css']
})
export class ImagesComponent implements OnInit{
    images:Observable<Images[]>;
    imageTable:Images[]=[];
    imageList:any;
    showNew:boolean=false;
    searchString:string;
    imagesModel:Images;

    page:number=1;
    count:number=0;
    tableSize:number=7;
    tableSizes:any=[3,6,9,12];

    config={
      id:'custom',
      itemsPerPage:7,
      currentPage:1,
      totalItems:0
    }

    responsive:boolean=true;
  autoHide:boolean=false;
  directionLinks:boolean=true;
  maxSize:number=7;
  labels:any={
    previousLabel:'<---',
    nextLabel:'--->',
    screenReaderPaginationLabel:'Pagination',
    screenReaderPageLabel:'page',
    screenReaderCurrentLabel:`You're on page`
  };

    imageData:any;
  data:Array<Images>=this.imageTable;
  @ViewChildren(ImageSortableHeaderDirective) headers:QueryList<ImageSortableHeaderDirective>;
    constructor(public router:Router,private imageService:ImageService){}


      ngOnInit(){
        this.reloadData();
      }

      reloadData(){
        this.imageService.getImageList().subscribe((data:any)=>{
          this.imageList=data;
          this.imageTable=this.imageList.data;
          this.config.totalItems=this.imageTable.length;
        })
      }

      updateImage(id:number){
        this.router.navigate(['/root/dashboard/images/edit-image/',id]);
      }

      deleteImage(id:number){
        this.imageService.deleteImage(id).subscribe((result:any)=>{
          if(result.status==1){
            Swal.fire(result.message,'','success');
          }
          else{
            Swal.fire(result.message,'','error');
          }
        })
      }

      onTableDataChange(event:any){
        this.page=event;
        this.reloadData();
      }

      onTableSizeChange(event:any){
        this.tableSize=event.target.value;
        this.page=1;
        this.reloadData();
      }

  onSort({column,direction}:SortEvent){
    this.imageService.getImageList().subscribe((data:any)=>{
      this.imageData=data;
      this.data=this.imageData.data;

      this.headers.forEach((header)=>{
        if(header.sortable!==column){
          header.direction='';
        }
      });

      if(direction==='' || column===''){
        this.imageTable=this.data;
      }
      else{
        this.imageTable=[...this.data].sort((a,b)=>{
          const res=compare(a[column],b[column]);
          return direction==='asc' ? res : -res;
        });
      }
    })
  }
}
