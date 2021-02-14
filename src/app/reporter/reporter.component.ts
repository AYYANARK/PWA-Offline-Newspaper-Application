import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hiiii');
    //  this.dialogRef.close();
  }
  

}
