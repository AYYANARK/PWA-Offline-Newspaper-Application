import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  Register(userRegister){
    console.log(userRegister);
    return this.http.post("http://localhost/news/insertUser.php",userRegister);
  }

  loginCheck(userLoginCheck){
    console.log(userLoginCheck);
    return this.http.post("http://localhost/news/logincode.php",userLoginCheck,{responseType: 'text'});
}
  newsSubmit(news){
    console.log(news);
    return this.http.post("http://localhost/news/newsSubmit.php",news,{responseType: 'text'});

  }
  getNews(){
    return this.http.get<any>('http://localhost/news/viewNews.php');
  }
  newsUserSubmit(userSubmit){
    console.log(userSubmit);
    return this.http.post("http://localhost/news/newsUserSubmit.php",userSubmit,{responseType:'text'});

  }
   getUserNews(){
    return this.http.get<any>('http://localhost/news/viewUserNews.php');
   }

}
