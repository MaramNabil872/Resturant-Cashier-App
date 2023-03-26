import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasheirNetPage } from './casheir-net.page';

const routes: Routes = [
  {
    path: '',
    component: CasheirNetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasheirNetPageRoutingModule {}
