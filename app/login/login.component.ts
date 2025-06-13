import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm !: FormGroup
  constructor(private formBuilder:FormBuilder, private userService : UsersService,
    private router:Router) {
      this.loginForm = this.formBuilder.group({
        email : [''],
        password : ['']
      })
  }


  login(){
    let users = this.userService.getUsers()
    let mail = this.loginForm.value.email
    let pass = this.loginForm.value.password
    let res =this.userService.submit(mail,pass)
    if(res){
        sessionStorage.setItem('user',mail)
        this.router.navigate(['profile/user'])
        return
    }
    alert('not found')
}
}
