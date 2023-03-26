import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnderAccountPageRoutingModule } from './under-account-routing.module';

import { UnderAccountPage } from './under-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnderAccountPageRoutingModule
  ],
  declarations: [UnderAccountPage]
})
export class UnderAccountPageModule {}
