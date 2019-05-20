import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userAccounts: Array<any>;
  constructor() {
    this.userAccounts=[
      {
        email:"radwaamabrouk@gmail.com",
        password:"12345"
      },
      {
        email:"mmowaffak@gmail.com",
        password:"54321"
      },
  ]
  }

  handleSignIn(){

  }

  handleSignUp(newUser: any){
      let userAlreadyExists = false;
      for(let user of this.userAccounts){
        if(user.email == newUser.email){
          userAlreadyExists = true;
          break;
        }
      }
      if(!userAlreadyExists){
        this.userAccounts.push(newUser);
        return true;
      } else{
        return false;
      }
  }
}
