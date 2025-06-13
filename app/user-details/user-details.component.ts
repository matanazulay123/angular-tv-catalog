import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  name !: string
  image !: string
  email !: any
  birthday !:string

  constructor(private actRoute : ActivatedRoute,
    private userService:UsersService) {
    //this.email = actRoute.snapshot.params['email']
    this.email = sessionStorage.getItem('user')
    
    let user = userService.getUser(this.email)
    if(user != null){
      this.name = user.name
      this.image = user.picture
      this.birthday=user.birthday
    }
  }

}
