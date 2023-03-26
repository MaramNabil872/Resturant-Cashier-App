import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-suppliers-dashboard',
  templateUrl: './suppliers-dashboard.page.html',
  styleUrls: ['./suppliers-dashboard.page.scss'],
})
export class SuppliersDashboardPage implements OnInit {
  allSuppliers:any;
  term="";
  constructor(private excelService:ExcelService,private alertController: AlertController,private router:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getSuppliersFromExcel();
  }

  getSuppliersFromExcel(){
    this.excelService.getSuppliers().subscribe(
      (res) => {
        console.log(res);
        let suppliers: any = [];
        for (let i = 1; i < res['values'][0].length; i++) {
          let array = res['values'][0][i];
          suppliers.push(array);
        }
        console.log(suppliers);
        this.allSuppliers=suppliers;
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة الموردين من قاعدة البيانات")
      }
    );
  }

  async addSupplier(){
    const alert = await this.alertController.create({
      header: 'اضافة المورد',
      inputs: [
        {
            placeholder: 'ادخل اسم المورد',
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
    this.excelService.AddSupplier(name,this.allSuppliers.length+2).subscribe(
      (res)=>{console.log(res)
        alert("تم الإضافة")
        window.location.reload()
      },
      (err)=>{console.log(err)
        alert("حدث خطأ في اضافة المورد")
      }
    )
  }


  async deleteClick(supplier){
  const alert = await this.alertController.create({
    header: 'تأكيد',
    message: 'هل أنت متأكد من حذف المورد ؟',
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
          this.delete(supplier);

        },
      },
    ],
  });

  await alert.present();
}

delete(supplier){
  console.log(supplier+2)
  this.excelService.deleteSupplier(supplier+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم الحذف")
      window.location.reload();

    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في حذف المورد")

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
          this.editSupplier(alertData.name,index)
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

editSupplier(name,index){
  this.excelService.editSupplier(name,index+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم النعديل")
      window.location.reload();

    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في تعديل المورد")

    }
  )
}

}
