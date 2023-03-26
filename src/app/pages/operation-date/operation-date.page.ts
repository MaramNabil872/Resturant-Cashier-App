import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-date',
  templateUrl: './operation-date.page.html',
  styleUrls: ['./operation-date.page.scss'],
})
export class OperationDatePage implements OnInit {
  dateExample = new Date().toISOString();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(date){
    console.log(date)
    date=date.substr(0,10)
    console.log(date)
    localStorage.setItem("operation_date",date);
    this.router.navigateByUrl('/operation-type')

  }

}
