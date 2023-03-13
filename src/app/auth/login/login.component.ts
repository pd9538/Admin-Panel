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
    this.createForm();
  }
  get f(){ return this.loginForm.controls;}

  createForm(){
    this.loginForm=new FormGroup({
      username:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit(){
      this.loginService.login(this.loginForm.value).subscribe(result=>{
          if(result.status==1){
            const token=this.loginService.randomString(15);
            localStorage.setItem('token',token);
            this.isUserLoggedIn= result.status==1;
            localStorage.setItem('isUserLoggedIn',this.isUserLoggedIn?"true":"false");
            localStorage.setItem('username',result.data.name);
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
            Swal.fire("Please Enter Valid Credential",result.errors.username,'error');
          }
      })
      this.loginForm.reset();
  }


}
