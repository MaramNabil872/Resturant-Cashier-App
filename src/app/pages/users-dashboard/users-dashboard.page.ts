import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.page.html',
  styleUrls: ['./users-dashboard.page.scss'],
})
export class UsersDashboardPage implements OnInit {
  allEmployees:any;
  term="";
  constructor(private excelService:ExcelService,private alertController: AlertController,private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getEmployeesFromExcel();
  }

  getEmployeesFromExcel(){
    this.excelService.getEmployees().subscribe(
      (res) => {
        console.log(res);
        let employees: any = [];
        for (let i = 1; i < res['values'][0].length; i++) {
          let array = res['values'][0][i];
          employees.push(array);
        }
        console.log(employees);
        this.allEmployees=employees;
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة الموظفين من قاعدة البيانات")
      }
    );
  }

  async addEmployee(){
    const alert = await this.alertController.create({
      header: 'اضافة موظف',
      inputs: [
        {
            placeholder: 'ادخل اسم الموظف',
            name: 'name',
        },
    ],
      buttons: [
        {
          text: 'اضافة',
          role: 'confirm',
          handler: (alertData) => {
            console.log(alertData.name);
            this.add(alertData.name)
          
          },
        }
      ],
    });
    await alert.present();


  }

  add(name){
    this.excelService.addEmployee(name,this.allEmployees.length+2).subscribe(
      (res)=>{console.log(res)
        alert("تم الإضافة")
        window.location.reload();
      },
      (err)=>{console.log(err)
        alert("حدث خطأ في اضافة الموظف")
      }
    )
  }


  async deleteClick(driver){
  const alert = await this.alertController.create({
    header: 'تأكيد',
    message: 'هل أنت متأكد من حذف الموظف ؟',
    buttons: [
      {
        text: 'لا',
        role: 'cancel',
        handler: () => {
          console.log("cancel")
        },
      },
      {
        text: 'نعم',
        role: 'confirm',
        handler: () => {
          this.delete(driver);

        },
      },
    ],
  });

  await alert.present();
}

delete(employee){
  console.log(employee+2)
  this.excelService.deleteEmployee(employee+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم الحذف")
      window.location.reload();

    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في حذف الموظف")

    }
  )
}

  async edit(driver,index){
  const alert = await this.alertController.create({
    header: 'تعديل',
    inputs: [
      {
          value:driver,
          name: 'name',
      },
  ],
    buttons: [
      {
        text: 'تعديل',
        role: 'confirm',
        handler: (alertData) => {
          this.editEmployee(alertData.name,index)
        },
      },
    ],
  });
  

  await alert.present();
  // let navigationExtras: NavigationExtras = {
  //   queryParams: {
  //     operation: JSON.stringify(op),
  //     index:JSON.stringify(index+2)
  //   }
  // };
  // this.router.navigate(['edit-operation'], navigationExtras);
}

editEmployee(name,index){
  this.excelService.editEmployee(name,index+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم النعديل")
      window.location.reload();

    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في تعديل الموظف")

    }
  )
}

}
