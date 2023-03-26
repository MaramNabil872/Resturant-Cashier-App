import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goBack(){
    localStorage.removeItem('operation_fromto')
    localStorage.removeItem('operation_amount')
    localStorage.removeItem('operation_employee_name')
    localStorage.removeItem('fromOrTo')
    localStorage.removeItem('operation_doc')
    localStorage.removeItem('operation_type')
    localStorage.removeItem('operation_supplier')
    localStorage.removeItem('operation_date')
    localStorage.removeItem('operation_about')


    this.router.navigateByUrl('/operation-date')
  }

}
