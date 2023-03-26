import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage {

  constructor(private excelService:ExcelService) { }

  register(form:any){
    let user={
        "username": form.value.username,
        "email": form.value.email,
        "password": form.value.password,
        "role":form.value.role
       }
    // this.excelService.register(user);
  }

}
