import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.page.html',
  styleUrls: ['./investor.page.scss'],
})
export class InvestorPage implements OnInit {
  amount="";
  operation_about;
  constructor(private router:Router) { }

  ngOnInit() {
    this.operation_about=localStorage.getItem('operation_about')
  }

next(){
  if(this.amount!=""){
    localStorage.setItem("operation_amount",this.amount)
    this.router.navigateByUrl('/summary')
  }else{
    alert('الرجاء ادخال البيانات المطلوبة')
  }
}


}
