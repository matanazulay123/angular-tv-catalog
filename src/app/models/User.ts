export class User{
    email: string;
    password:string;
    name:string;
    birthday:string;
    gender:string;
    picture:string;
  
      constructor(email:string,password:string,name:string,birthday:string,gender:string){
          this.email=email
          this.password=password
          this.name=name
          this.birthday=birthday
          this.gender=gender
          if(this.gender=='male')
            this.picture='assets/male.jpg'
        else this.picture='assets/female.jpg'
          
          
      }

       
      
  }
  