import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-under-account',
  templateUrl: './under-account.page.html',
  styleUrls: ['./under-account.page.scss'],
})
export class UnderAccountPage implements OnInit {
  allUsers=JSON.parse(localStorage.getItem('allUsers')|| '[]');
  selectedUser;
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
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة الموظفين من قاعدة البيانات")
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
  next(){
    // console.log(this.selectedUser);
    // console.log(this.amount)
    if(this.selectedUser && this.amount){
      localStorage.setItem('operation_employee_name',this.selectedUser);
      localStorage.setItem("operation_amount",this.amount)
      this.router.navigateByUrl('/summary')
    }else{
      alert('الرجاء ادخال البيانات المطلوبة')
    }

  }

}
