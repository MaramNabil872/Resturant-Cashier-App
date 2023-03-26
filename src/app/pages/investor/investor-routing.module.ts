import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestorPage } from './investor.page';

const routes: Routes = [
  {
    path: '',
    component: InvestorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestorPageRoutingModule {}
