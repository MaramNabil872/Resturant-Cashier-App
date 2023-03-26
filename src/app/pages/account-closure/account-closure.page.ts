import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-account-closure',
  templateUrl: './account-closure.page.html',
  styleUrls: ['./account-closure.page.scss'],
})
export class AccountClosurePage implements OnInit {
  allUsers:any;
  allSuppliers:any;
  selectedUser;
  selectedSuuplier;
  amount="";
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  constructor(private router:Router,private excelService:ExcelService) { }

  ngOnInit() {
    this.getEmployeesFromExcel();
  }

  getEmployeesFromExcel(){
    this.excelService.getEmployees().subscribe(
      (res) => {
        console.log(res);
        let users: any = [];
        for (let i = 1; i < res['values'][0].length; i++) {
          let array = res['values'][0][i];
          users.push(array);
        }
        console.log(users);
        this.allUsers=[]
        users.map((user)=>{this.allUsers.push({username:user,choosen:false})})
        console.log(this.allUsers)
        const nativeEl = this.accordionGroup;
        nativeEl.value = "employee";
        this.getSuppliersFromExcel();
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة الموظفين من قاعدة البيانات")
      }
    );
  }

  getSuppliersFromExcel(){
    this.excelService.getSuppliers().subscribe(
      (res) => {
        console.log(res);
        let users: any = [];
        for (let i = 1; i < res['values'][0].length; i++) {
          let array = res['values'][0][i];
          users.push(array);
        }
        console.log(users);
        this.allSuppliers=[]
        users.map((user)=>{this.allSuppliers.push({username:user,choosen:false})})
        console.log(this.allSuppliers)
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة الموردين من قاعدة البيانات")
      }
    );
  }
  userChange(user,index){
    this.selectedUser=user.username;
    this.allUsers.map((user)=>{user['choosen']=false})
    this.allUsers[index].choosen=true;
    setTimeout(() => {
      const nativeEl = this.accordionGroup;
      nativeEl.value = "amount";
    }, 500);


  }

  supplierChange(user,index){
    this.selectedSuuplier=user.username;
    this.allSuppliers.map((user)=>{user['choosen']=false})
    this.allSuppliers[index].choosen=true;
  }
  next(){
    // console.log(this.selectedUser);
    // console.log(this.amount)
    if(this.selectedUser && this.amount){
      localStorage.setItem('operation_employee_name',this.selectedUser);
      localStorage.setItem('operation_supplier',this.selectedSuuplier);

      localStorage.setItem("operation_amount",this.amount)
      this.router.navigateByUrl('/summary')
    }else{
      alert('الرجاء ادخال البيانات المطلوبة')
    }

  }

}
