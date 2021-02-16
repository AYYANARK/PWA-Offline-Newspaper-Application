import { Component, Input, Output, OnInit, EventEmitter,NgModule } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  trig: any;
  userLogin: FormGroup;
  routes: ActivatedRoute;
  name_test: String = "";
  constructor(private formBuider: FormBuilder, private _appService: AppService, public dialogRef: MatDialogRef<LoginComponent>, private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.userLogin = new FormGroup({
        uname: new FormControl('', []),
        pword: new FormControl('',[])
        
      }); // <-- add custom validator at the FormGroup level
    }

    get uname() { return this.userLogin.get('uname'); }
    get pword() { return this.userLogin.get('pword');}
  loginClose(){
    this.dialogRef.close();
    
  }
  login() {
    if(this.userLogin.valid){
      let userLoginCheck = [];
      userLoginCheck.push(this.userLogin.value);
      console.log(userLoginCheck);
      this._appService.loginCheck(userLoginCheck).subscribe((loginData) => {
        console.log(loginData);
        this.dialogRef.close({data: loginData});
      });
    }
    }
   
}


