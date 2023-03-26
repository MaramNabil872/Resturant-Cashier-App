import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderAccountPage } from './under-account.page';

const routes: Routes = [
  {
    path: '',
    component: UnderAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderAccountPageRoutingModule {}
