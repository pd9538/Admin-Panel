import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  isUserLoggedIn:boolean=false;
  payload={
    username:'test',
  };

  secret='mysecret';

  constructor(private fb:FormBuilder,
              private router:Router,
              private loginService:LoginService
    ){}

  ngOnInit(): void {
   this.loginForm=new FormGroup({
    'mobile':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required])
   });
  }
  get f(){ return this.loginForm.controls;}

  onSubmit(){
      this.loginService.login(this.loginForm.value).subscribe((result:any)=>{
          if(result.status==1 && result[0].token){
            localStorage.setItem('token',result[0].token);
            this.isUserLoggedIn= result.status==1;
            localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn?"true":"false");
            localStorage.setItem('username',result[0].user_id);
            this.router.navigate(['root/dashboard']);
            setInterval(()=>{
              localStorage.removeItem('token');
              this.isUserLoggedIn=false;
              localStorage.removeItem('isUserLoggedIn');
              localStorage.removeItem('username');
              this.router.navigate(['auth/login']);
            },90000)
          }
          else{
            Swal.fire("Please Enter Valid Credential",result.error,'error');
          }
      })
      this.loginForm.reset();
  }


}
