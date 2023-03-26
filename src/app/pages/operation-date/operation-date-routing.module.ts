import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationDatePage } from './operation-date.page';

const routes: Routes = [
  {
    path: '',
    component: OperationDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseDatePageRoutingModule {}
