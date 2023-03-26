import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersDashboardPageRoutingModule } from './users-dashboard-routing.module';

import { UsersDashboardPage } from './users-dashboard.page';
import { SharedModule } from 'src/app/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersDashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [UsersDashboardPage]
})
export class UsersDashboardPageModule {}
