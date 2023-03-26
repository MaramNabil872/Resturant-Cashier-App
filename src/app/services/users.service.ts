import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = 'https://63db63afa3ac95cec5a09100.mockapi.io/app/';
  constructor(private http: HttpClient) { }

  getAllUsers(){
    this.http.get(this.URL+'users').subscribe(
        (res)=>{
            localStorage.setItem("allUsers",JSON.stringify(res))
        },
        (err)=>{
            console.log(err)
        }
    )
  }
  Login(email:string,password:string){
    let exist="doesn't exist";
    let allUsers=JSON.parse(localStorage.getItem("allUsers")|| '{}');
    console.log(allUsers)
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].email===email){
            exist="exists";
            if(allUsers[i].password===password){
              localStorage.setItem("loggesInUserName",allUsers[i].name)
                exist="logeddIn";
            }else{
                exist="incorrect password";
            }
        }
    }
    return exist;
  }

  register(user:any){
    console.log(user)
  }
}
