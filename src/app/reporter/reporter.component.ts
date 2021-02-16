import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

  constructor() { }
   reporter:FormGroup;
  ngOnInit(): void {
    console.log('hiiii');
    //  this.dialogRef.close();
  }
  

}
