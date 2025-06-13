import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm !: FormGroup
  constructor(private formBuilder:FormBuilder,
    private userService : UsersService,
    private router:Router) {
      this.registerForm = this.formBuilder.group({
        name : ['', Validators.required],
        email : ['', Validators.compose([Validators.required, Validators.email])],
        password : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        birthday : ['', Validators.required],
        gender : ['', Validators.required]
      })
    }



  register(){
    let mail = this.registerForm.value.email

    let name = this.registerForm.value.name
    let pass = this.registerForm.value.password
    let birthday = this.registerForm.value.birthday
    let gender = this.registerForm.value.gender
    this.userService.signUp(mail,pass,name,birthday,gender)
    this.router.navigateByUrl('profile')
  }

}
