import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppliersDashboardPage } from './suppliers-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliersDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliersDashboardPageRoutingModule {}
