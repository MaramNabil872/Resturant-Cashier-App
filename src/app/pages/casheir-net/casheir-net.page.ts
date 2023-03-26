import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casheir-net',
  templateUrl: './casheir-net.page.html',
  styleUrls: ['./casheir-net.page.scss'],
})
export class CasheirNetPage implements OnInit {
  amount="";
  constructor(private router:Router) { }

  ngOnInit() {
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
