import { ThemeService } from './../services/theme.service';
import { Router } from '@angular/router';
import { LoginService } from './../../auth/services/login.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  theme:string='bootstrap';
  public now=new Date().getHours();

  constructor(private loginService:LoginService,
              private router:Router,
              private themeService:ThemeService,
              private renderer:Renderer2
    ){}
    username=localStorage.getItem('username');

    ngOnInit(): void {
      this.themeService.themeChanges().subscribe(theme=>{
        if(theme.oldValue){
            this.renderer.removeClass(document.body,theme.oldValue);
        }
        this.renderer.addClass(document.body,theme.newValue);
      })
      console.log(this.now);
    }
    logout(){
      this.loginService.logout();
    }

    toggleTheme(){
      if(this.theme==='bootstrap'){
        this.theme='bootstrap-dark';
      }else{
        this.theme='bootstrap';
      }
      this.themeService.setTheme(this.theme);
    }
}
