import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css']
})
export class UserNewsComponent implements OnInit {

  constructor(private _appService: AppService) { }
   news:any;
  ngOnInit(): void {
    this._appService.getUserNews().subscribe((newsData)=>{
      console.log(newsData);
       this.news=newsData;
       console.log(this.news[0].evidence);
       
      });
  }
  back(){

  }

}
