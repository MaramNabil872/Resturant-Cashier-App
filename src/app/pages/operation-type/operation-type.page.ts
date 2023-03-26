import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation-type',
  templateUrl: './operation-type.page.html',
  styleUrls: ['./operation-type.page.scss'],
})
export class OperationTypePage implements OnInit {
  isCashOutClickedFlag=false;
  isCashInClickedFlag=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  isCashOutClicked(){
    return this.isCashOutClickedFlag;
  }

  onCashOutClicked(){
    this.isCashOutClickedFlag=true;
    this.isCashInClickedFlag=false;
    this.next();
  }

  onCashInClicked(){
    this.isCashInClickedFlag=true;
    this.isCashOutClickedFlag=false;
    this.next();
  }

  isCashInClicked(){
    return this.isCashInClickedFlag;
  }
  next(){
    if(this.isCashInClickedFlag==true){
      localStorage.setItem("operation_type","إيداع نقود");
      this.router.navigateByUrl('/operation-fromto')

    } else if(this.isCashOutClickedFlag==true){
    localStorage.setItem("operation_type","سحب نقود");
    this.router.navigateByUrl('/operation-fromto')


  } else{
    alert("You must choose an operation to contine")
  }
}

}
