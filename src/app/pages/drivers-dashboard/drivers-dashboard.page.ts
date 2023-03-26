import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-drivers-dashboard',
  templateUrl: './drivers-dashboard.page.html',
  styleUrls: ['./drivers-dashboard.page.scss'],
})
export class DriversDashboardPage implements OnInit {

  allDrivers:any;
  term="";
  constructor(private excelService:ExcelService,private alertController: AlertController,private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDriversFromExcel();
  }

  getDriversFromExcel(){
    this.excelService.getDrivers().subscribe(
      (res) => {
        console.log(res);
        let drivers: any = [];
        for (let i = 1; i < res['values'][0].length; i++) {
          let array = res['values'][0][i];
          drivers.push(array);
        }
        console.log(drivers);
        this.allDrivers=drivers;
        // this.excelService.addDriver("maryoma",this.allDrivers.length+2).subscribe(
        //   (res)=>{console.log(res)},
        //   (err)=>{console.log(err)}
        // )
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة السائقين من قاعدة البيانات")
      }
    );
  }

  async addDriver(){
    const alert = await this.alertController.create({
      header: 'اضافة سائق',
      inputs: [
        {
            placeholder: 'ادخل اسم السائق',
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
    this.excelService.addDriver(name,this.allDrivers.length+2).subscribe(
      (res)=>{console.log(res)
        alert("تم الإضافة")
        window.location.reload()
      },
      (err)=>{console.log(err)
        alert("حدث خطأ في اضافة السائق")
      }
    )
  }


  async deleteClick(driver){
  const alert = await this.alertController.create({
    header: 'تأكيد',
    message: 'هل أنت متأكد من حذف السائق ؟',
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

delete(driver){
  console.log(driver+2)
  this.excelService.deleteDriver(driver+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم الحذف")
      window.location.reload();

    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في حذف السائق")

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
          this.editDriver(alertData.name,index)
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

editDriver(name,index){
  this.excelService.editDriver(name,index+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم النعديل")
      window.location.reload();

    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في تعديل السائق")

    }
  )
}

}
