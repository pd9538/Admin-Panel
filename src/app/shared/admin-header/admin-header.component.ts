import { LoginService } from './../../auth/services/login.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  username=localStorage.getItem('username');
  public now=new Date().getHours();
  constructor(public router:Router,
    private loginService:LoginService){}
  ngOnInit(){}


  logout(){
    this.loginService.logout();
  }


}
