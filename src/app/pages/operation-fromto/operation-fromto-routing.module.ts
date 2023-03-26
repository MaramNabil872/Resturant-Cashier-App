import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationFromtoPage } from './operation-fromto.page';

const routes: Routes = [
  {
    path: '',
    component: OperationFromtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationFromtoPageRoutingModule {}
