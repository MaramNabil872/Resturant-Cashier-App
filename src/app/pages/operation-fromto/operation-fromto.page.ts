import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-operation-fromto',
  templateUrl: './operation-fromto.page.html',
  styleUrls: ['./operation-fromto.page.scss'],
})
export class OperationFromtoPage implements OnInit {
  operation_type=localStorage.getItem('operation_type')
  title:string="";
  isCasheirClickedFlag=false;
  isKhaznaClickedFlag=false;
  constructor(private router:Router) { 
  
  }

  ngOnInit() {
    if(this.operation_type=='إيداع نقود'){
    this.title="إيداع إلى "
    localStorage.setItem("fromOrTo","إيداع إلى ")
    }else{
      this.title="سحب من"
      localStorage.setItem("fromOrTo","سحب من")


    }
  }



  isCasheirClicked(){
    return this.isCasheirClickedFlag;
  }

  onCasheirClicked(){
    this.isCasheirClickedFlag=true;
    this.isKhaznaClickedFlag=false;
    this.next();
  }

  onKhaznaClicked(){
    this.isKhaznaClickedFlag=true;
    this.isCasheirClickedFlag=false;
    this.next();
  }

  isKhaznaClicked(){
    return this.isKhaznaClickedFlag;
  }
  next(){
    if(this.isCasheirClickedFlag==true){
      localStorage.setItem("operation_fromto","كاشير");
      this.router.navigateByUrl('/operation-about')

    } else if(this.isKhaznaClickedFlag==true){
    localStorage.setItem("operation_fromto","مكتب");
    this.router.navigateByUrl('/operation-about')


  } else{
    alert("You must choose an operation to contine")
  }

}

}
