import { Subject } from 'rxjs';
import { LoginService } from './../login.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  myGroup: FormGroup;
  newUser: any;
  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.myGroup =new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      confirm: new FormControl('',[Validators.required]),

    });
  }

 onSubmit(form){
   if (form.controls.password.value === form.controls.confirm.value){
    this.loginService.handleSignUp({
      email : form.controls.email.value,
      password: form.controls.password.value,
    });
   }
 }

 @HostListener("blur") matchPassword(){
   if(this.myGroup.controls['password'].value === this.myGroup.controls['confirm'].value) return true;
   else return false;
 }
}

