import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-operation-about',
  templateUrl: './operation-about.page.html',
  styleUrls: ['./operation-about.page.scss'],
})
export class OperationAboutPage implements OnInit {
  operations:any;
  selectedOperation;
  constructor(private router:Router) { }

  ngOnInit() {
    let operation_type=localStorage.getItem('operation_type');
    let operation_fromto=localStorage.getItem('operation_fromto');

    console.log(operation_type)
    if(operation_type=="إيداع نقود" && operation_fromto=="مكتب"){
      this.operations=[
        {
          name:'تصفية كاشير',
          id:1,
          route:'casheir-net',
          value:false

        },
        {
          name:'تقفيل حساب المشتريات',
          id:2,
          route:'account-closure',
          value:false
        },
        {
          name:'من الكاشير إلى المكتب',
          id:3,
          route:'investor',
          value:false

        },
      ]
    }else if(operation_type=="إيداع نقود" && operation_fromto=="كاشير"){
      this.operations=[
        {
          name:'تقفيل حساب المشتريات',
          id:1,
          route:'account-closure',
          value:false
        },
        {
          name:'من المكتب إلى الكاشير',
          id:3,
          route:'investor',
          value:false

        },
      ]
    }else{
      this.operations=[
        {
          name:'موظف',
          id:1,
          route:'employee',
          value:false

        },
        {
          name:'مورد',
          id:2,
          route:'supplier',
          value:false

        },
        {
          name:'تحت حساب المشتريات',
          id:3,
          route:'under-accunt',
          value:false

        },
        {
          name:'سائق',
          id:4,
          route:'driver',
          value:false

        },
      ]
    }
  }

  changeValue(op){
    for(let i=0;i<this.operations.length;i++){
      if(this.operations[i].id==op.id){
        this.operations[i].value=true;
        this.selectedOperation=this.operations[i];
      }else{
        this.operations[i].value=false;
      }
    }
    this.next();
  }


  next(){
    localStorage.setItem('operation_about',this.selectedOperation.name)
    switch(this.selectedOperation.name) {
      case 'موظف':
        // code block
        this.router.navigateByUrl('/employee')
        break;
      case 'مورد':
        // code block
        this.router.navigateByUrl('/supplier')
        break;
      case 'سائق':
          // code block
          this.router.navigateByUrl('/driver')
          break;
      case 'تحت حساب المشتريات':
            // code block
            this.router.navigateByUrl('/under-account')
            break;
            case 'تقفيل حساب المشتريات':
              // code block
              this.router.navigateByUrl('/account-closure')
              break;
            case 'تصفية كاشير':
              // code block
              this.router.navigateByUrl('/casheir-net')
              break;
              case 'من المكتب إلى الكاشير':
                // code block
                this.router.navigateByUrl('/investor')
                break;
              case 'من الكاشير إلى المكتب':
                this.router.navigateByUrl('/investor')
                break;

      default:
        // code block
    }
  }

}
