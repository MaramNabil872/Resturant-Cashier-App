import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperationAboutPage } from './operation-about.page';

const routes: Routes = [
  {
    path: '',
    component: OperationAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationAboutPageRoutingModule {}
