import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationTypePage } from './operation-type.page';

const routes: Routes = [
  {
    path: '',
    component: OperationTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationTypePageRoutingModule {}
