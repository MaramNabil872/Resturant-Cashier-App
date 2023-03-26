import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router } from '@angular/router';
import { ExcelService } from '../services/excel.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private excelService: ExcelService) {}
  googleuser;
  access_token;


  ionViewWillEnter(): void {
    this.access_token=localStorage.getItem('access_token')?localStorage.getItem('access_token'):null;
    if(this.access_token)
    this.checkToken();
  }


  checkToken(){
    this.excelService.checkToken(this.access_token).subscribe(
      (res)=>{console.log(res);
      this.router.navigateByUrl('/operation-date')},
      (err)=>{console.log(err)
      GoogleAuth.refresh().then(
        (res)=>{console.log(res);
          localStorage.setItem(
            'access_token',
            res.accessToken
          );
          this.router.navigateByUrl('/operation-date')
      }
      )}
    )
  }
  async login() {
    this.googleuser = await GoogleAuth.signIn();
    console.log(this.googleuser);
    if (this.googleuser.authentication.accessToken) {
      localStorage.setItem(
        'access_token',
        this.googleuser.authentication.accessToken
      );
      if(this.googleuser.displayName)
      localStorage.setItem("loggesInUserName",this.googleuser.displayName)
      else
      localStorage.setItem("loggesInUserName",this.googleuser.name)

      this.getUsersFromExcel();
      // this.router.navigateByUrl('/operation_date')
    } else {
      alert('حدث خطأ في تسجيل الدخول يرجى التواصل مع المطور');
    }
  }

  getUsersFromExcel() {
    this.excelService.getUsers().subscribe(
      (res) => {
        console.log('result:', res);
        let users: any = [];
        for (let i = 1; i < res['values'].length; i++) {
          let array = res['values'][i];
          let user = {
            username: array[0],
            email: array[1],
            role: array[2],
          };
          users.push(user);
        }
        console.log(users);
        localStorage.setItem('allUsers', JSON.stringify(users));
        this.registerUserAndLogin();
      },
      (err) => {
        console.log('error', err);
        alert('حدث خطأ في استعادة المستخدمين من قاعدة البيانات');
      }
    );
  }

  registerUserAndLogin() {
    let allUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');
    console.log(allUsers);
    let flagExist = false;
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email === this.googleuser.email) {
        flagExist = true;
      }
    }
    if (!flagExist) {
      let user = {
        username: this.googleuser.displayName,
        email: this.googleuser.email,
        role: 'e',
      };
      this.excelService.postUser(user).subscribe(
        (res) => {
          console.log(res);
          alert('تم إضافة هذا المستخدم الى قاعدة البيانات');
          this.router.navigateByUrl('/operation-date');
        },
        (err) => {
          console.log(err);
          alert('حدث خطأ في اضافة المستخدم لقاعدة البيانات');
        }
      );
    } else {
      this.router.navigateByUrl('/operation-date');
    }
  }
}
