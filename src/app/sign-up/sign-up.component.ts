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

  constructor(private formBuider:FormBuilder , private _appService :AppService) {

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

register(){
  // console.log(this.attenForm.value);
   let userRegister=[];
  userRegister.push(this.userSign.value);
  console.log(userRegister);
  
  this._appService.Register(userRegister).subscribe((data) =>{
    console.log(data);
    
  });

}
}
