import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuppliersDashboardPageRoutingModule } from './suppliers-dashboard-routing.module';

import { SuppliersDashboardPage } from './suppliers-dashboard.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppliersDashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [SuppliersDashboardPage]
})
export class SuppliersDashboardPageModule {}
