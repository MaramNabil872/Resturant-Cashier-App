import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Camera ,CameraResultType, CameraSource} from '@capacitor/camera';
import { IonAccordionGroup } from '@ionic/angular';
import { ExcelService } from 'src/app/services/excel.service';
import * as filestack from 'filestack-js';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {
  allUsers;
  selectedUser;
  amount="";
  imageURL;
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  constructor(private router:Router,private excelService:ExcelService) {
   }

  ngOnInit() {
    this.getDriversFromExcel()
  }

  getDriversFromExcel(){
    this.excelService.getDrivers().subscribe(
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
        alert("حدث خطأ في استعادة السائقين من قاعدة البيانات")
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
      localStorage.setItem('operation_driver_name',this.selectedUser);
      localStorage.setItem("operation_amount",this.amount)
      localStorage.setItem("operation_doc",this.imageURL)

      this.router.navigateByUrl('/summary')
    }else{
      alert('الرجاء ادخال البيانات المطلوبة')
    }

  }

  takePicture = async () => {
    const client = filestack.init('AraU28pAtT6CgjN4vNlJKz');
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera
    }).then(
      (res)=>{ 
        let blob=this.dataURLtoBlob(res.dataUrl)
        client.upload(blob).then(data =>
          {console.log(data.url)
            this.imageURL=data.url
            let imageElement= document.getElementById('img')
            imageElement['src'] =this.imageURL
    
          });
        // Can be set to the src of an image now
      },
      (err)=>{
        console.log(err)
      }
    )
   
  };


 dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    console.log(new Blob([u8arr], {type:mime}))
    return new Blob([u8arr], {type:mime});
}

}
