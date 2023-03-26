import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  loggedInUser=localStorage.getItem('loggesInUserName');
  operation_type=localStorage.getItem('operation_type');
  fromOrTo= localStorage.getItem("fromOrTo");
  operation_fromto=localStorage.getItem("operation_fromto");
  operation_about=localStorage.getItem("operation_about");
  operation_employee_name=localStorage.getItem("operation_employee_name");
  operation_supplier_name=localStorage.getItem("operation_supplier_name");
  operation_driver_name=localStorage.getItem("operation_driver_name");
  operation_amount=localStorage.getItem("operation_amount");
  operation_doc=localStorage.getItem("operation_doc");
  operation_supplier=localStorage.getItem("operation_supplier");

  constructor(private router:Router,private excelService:ExcelService) { }

  ngOnInit() {
  }

  confirm(){
    let  operation_empoyee_driver_supplier;
    if(this.operation_about=='موظف' || this.operation_about=='تقفيل حساب المشتريات'){
      operation_empoyee_driver_supplier= this.operation_employee_name;
    }else if(this.operation_about=='مورد'){
      operation_empoyee_driver_supplier= this.operation_supplier_name;
    }else if(this.operation_about=='سائق'){
      operation_empoyee_driver_supplier= this.operation_driver_name;
    }else{
      operation_empoyee_driver_supplier="";
    }
    let operation={
      operation_date:localStorage.getItem('operation_date'),
      operation_type:this.operation_type,
      operation_fromto:this.operation_fromto,
      operation_about:this.operation_about,
      operation_empoyee_driver_supplier:operation_empoyee_driver_supplier,
      operation_amount:this.operation_amount,
      operation_doc:this.operation_doc,
      operation_supplier:this.operation_supplier
    }
    this.excelService.postOperation(operation).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigateByUrl('/success')
      },
      (err) =>{
        console.log(err);
        alert("حدث خطأ في ادخال العملية الى قاعدة البيانات")
      }
    )
  }

}
