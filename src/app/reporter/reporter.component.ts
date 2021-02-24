import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

  constructor(private _appService: AppService) { }
   reporter:FormGroup;
   news:any;
  ngOnInit(): void {
    this.reporter = new FormGroup({
      heading: new FormControl('', []),
        subHeading: new FormControl('',[]),
        newsDate:new FormControl('',[]),
        description: new FormControl('',[]),
        evidence:new FormControl('',[]),
        place:new FormControl('',[]),
        category:new FormControl('',[])

     });
    }

reset(){
  this.reporter.reset();

}
  newsSubmit(){
    let reporterSubmit= [];
    reporterSubmit.push(this.reporter.value);
    console.log(reporterSubmit);
    this._appService.newsSubmit(reporterSubmit).subscribe((newsData) => {
      console.log(newsData);
      this.news=newsData;
      if(this.news==1){
        alert("News Uploaded!");
      }
      else{
        alert("Error in News Upload!");
      }
    });
  }
  }
  


