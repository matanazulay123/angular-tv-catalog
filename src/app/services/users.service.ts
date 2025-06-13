import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl :string = "http://localhost:3000/users"
  headers = { 'content-type': 'application/json' };
  users: User[]=[]

  constructor (private http: HttpClient ) {
    this.refreshUsers()
   }


  refreshUsers(){
    this.getUsers().subscribe(
    (data)=>{ this.users=data }

    )
  }


  signUp(email:string,password : string, name : string, birthday: string, gender:string) {
    let user = new User(email,password,name,birthday,gender)
   this.addUsers(user).subscribe(
    (data)=>{ this.refreshUsers() }
   )
  }


    getUsers() : Observable <any> { 
      return this.http.get(this.baseUrl)
    }

   
  checkUser(email:string){
    for(let user of this.users)
        if(user.email==email){
          return true
        }
     alert("not found")
    return false
  }
  
  addUsers(user:User): Observable<any>{
    let body = JSON.stringify(user)
    return this.http.post(this.baseUrl,body,{headers:this.headers})
  }

  login(email:string,pass:string){
    for(let user of this.users)
      if(user.email==email&&user.password==pass){
        return true
      }
        return false
  }

  getUser(email : string){
    for(let user of this.users){
      if(user.email==email)
        return user
    }
    return null
  }
 
 submit(email: string, password:string){
  for(let user of this.users)
    if(user.email==email&& user.password==password){
      localStorage.setItem('currentUser',email);
      localStorage.setItem('currentUser',user.picture);
      return true;
    }
     return false;
  
 }


}
