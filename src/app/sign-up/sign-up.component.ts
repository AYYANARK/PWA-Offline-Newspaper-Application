import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userSign:FormGroup;

  constructor(private formBuider:FormBuilder , private _appService :AppService,public dialogRef: MatDialogRef<SignUpComponent>) {

   }

  ngOnInit(): void {
    this.userSign =this.formBuider.group({
      
      name:[],
      id:[],
      jd:[],
      email:[],
      uname:[],
      pword:[]

    });
  
}
get uname() { return this.userSign.get('uname'); }
get pword() { return this.userSign.get('pword');}
get email() { return this.userSign.get('email'); }
get id() { return this.userSign.get('id');}
get name() { return this.userSign.get('name'); }

register(){
  // console.log(this.attenForm.value);
  if(this.userSign.valid){
   let userRegister=[];
  userRegister.push(this.userSign.value);
  console.log(userRegister);
  
  this._appService.Register(userRegister).subscribe((data) =>{
    console.log(data);
    
  });
  }
}
signupClose(){
  this.dialogRef.close();
  
}
}
