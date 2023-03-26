import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversDashboardPageRoutingModule } from './drivers-dashboard-routing.module';

import { DriversDashboardPage } from './drivers-dashboard.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversDashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [DriversDashboardPage]
})
export class DriversDashboardPageModule {}
