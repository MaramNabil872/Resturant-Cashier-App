import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountClosurePage } from './account-closure.page';

const routes: Routes = [
  {
    path: '',
    component: AccountClosurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountClosurePageRoutingModule {}
