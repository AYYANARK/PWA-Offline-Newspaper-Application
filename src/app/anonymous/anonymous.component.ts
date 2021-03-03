import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  constructor(private _appService: AppService) { }
  userNewsForm:FormGroup;
  ngOnInit(): void {
    this.userNewsForm = new FormGroup({
      evidence: new FormControl('', []),
        description: new FormControl('',[])
     });
  }

  userNews(){
    let userSubmit=[];
    userSubmit.push(this.userNewsForm.value);
    this._appService.newsUserSubmit(userSubmit).subscribe((news)=>{
      console.log(news);
    });

  }
  reset(){
      this.userNewsForm.reset();
    }

}
