import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private URL = 'https://63db63afa3ac95cec5a09100.mockapi.io/app/';

  constructor(private http: HttpClient) { }

  Login(email:string,password:string){
    let loggedInFlag=false;
    return this.http.get(this.URL+'users')
  }
}
