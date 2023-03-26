import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from "@angular/router";
import { ExcelService } from 'src/app/services/excel.service';
@Component({
  selector: 'app-edit-operation',
  templateUrl: './edit-operation.page.html',
  styleUrls: ['./edit-operation.page.scss'],
})
export class EditOperationPage implements OnInit {
  operation:any;
  index:any;
  constructor(private route:ActivatedRoute,private excelService:ExcelService,private router:Router) {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.operation=JSON.parse(params['operation'])
      this.index=JSON.parse(params['index'])

      console.log(this.operation)
  });   }

  ngOnInit() {
  }

  editOperation(form){
    console.log(form)
    this.excelService.editOperation(form.value,this.index).subscribe(
      (res)=>{
        console.log(res)
        this.router.navigateByUrl('/dashboard')
      },
      (err)=>{
        console.log(err)
        alert("حدث خطأ في تعديل العملية")
      }
    )
  }

}
