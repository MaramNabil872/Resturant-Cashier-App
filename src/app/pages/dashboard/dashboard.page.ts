import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  allOperations:any;
  term="";
  constructor(private excelService:ExcelService,private alertController: AlertController,private router:Router) { }

  ngOnInit() {
    // this.getOperationsFromExcel();

  }

  ionViewWillEnter(){
    this.getOperationsFromExcel();
  }

  getOperationsFromExcel(){
    this.excelService.getOperations().subscribe(
      (res) => {
        console.log(res);
        let operations: any = [];
        for (let i = 1; i < res['values'].length; i++) {
          let array = res['values'][i];
          let operation = {
            date: array[0],
            type: array[1],
            fromto: array[2],
            about: array[3],
            empoyee_driver_supplier: array[4],
            amount: array[5],
            attachment: array[6],
            supplier: array[7],
            createdAt: array[8],
            doneBy:array[9],
          };
          operations.push(operation);
        }
        console.log(operations);
        this.allOperations=operations;
      },
      (err) => {
        console.log(err);
        alert("حدث خطأ في استعادة العمليات من قاعدة البيانات")
      }
    );
  }

  handleClick(id,op){
    console.log(id)
  }


  async deleteClick(op){
  const alert = await this.alertController.create({
    header: 'تأكيد',
    message: 'هل أنت متأكد من حذف العملية ؟',
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
          this.delete(op);

        },
      },
    ],
  });

  await alert.present();
}

delete(op){
  console.log(op+2)
  this.excelService.deleteOperation(op+2).subscribe(
    (res)=>{
      console.log(res);
      alert("تم الحذف")
    },
    (err)=>{
      console.log(err);
      alert("حدث خطأ في حذف العملية")

    }
  )
}

edit(op,index){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      operation: JSON.stringify(op),
      index:JSON.stringify(index+2)
    }
  };
  this.router.navigate(['edit-operation'], navigationExtras);
}
}





