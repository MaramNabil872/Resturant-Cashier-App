import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversDashboardPage } from './drivers-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DriversDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversDashboardPageRoutingModule {}
