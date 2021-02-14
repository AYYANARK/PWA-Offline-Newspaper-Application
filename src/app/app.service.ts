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


}
