import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    }

    navigate(){
      this.router.navigate(['auth/login']);
    }
}
