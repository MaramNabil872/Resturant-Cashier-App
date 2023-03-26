import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private userService: UsersService,private router:Router) {}

  ngOnInit() {}

  login(form: any) {
    console.log(form.value);
    let loggedIn = this.userService.Login(
      form.value.email,
      form.value.password
    );
    console.log(loggedIn)
    if (loggedIn == 'logeddIn') {
      this.router.navigateByUrl('/operation-date')
    } else {
      alert(loggedIn)
    }
  }
}
