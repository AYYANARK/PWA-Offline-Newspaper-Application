import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatDialog,MatDialogConfig,MatDialogRef, throwMatDialogContentAlreadyAttachedError} from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dialog: MatDialog,private _appService: AppService,private router: Router,private route: ActivatedRoute) {}
  title = 'newspaper';
  loginFlag:boolean=false;
  signFlag:boolean=false;
  loginForm: FormGroup;
  loginResult:any;
  logoutFlag:boolean=false;
  routes: ActivatedRoute;
  news:any;
 
 loginClick() {
     
    const dialogRef = this.dialog.open(LoginComponent, { disableClose: true,autoFocus:true,width:'350px',
      height:'240px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
       this.loginResult=result.data;
       if(this.loginResult=="0")
       {
         alert("Wrong Credentials");
         this.loginClick();
       }
    })
}

ngOnInit(): void {
  this.loginResult=0;
  this._appService.getNews().subscribe((newsData)=>{
    console.log(newsData);
     this.news=newsData;
     console.log(this.news[0].evidence);
     
    });
}

logoutClick(){
   this.loginResult=0;
}


signClick() {

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  this.dialog.open(SignUpComponent, { disableClose: true,panelClass: 'my-dialog',autoFocus:true,width:'350px',height:'460px'
  });
  }
 
}







