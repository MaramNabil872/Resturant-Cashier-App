import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasheirNetPageRoutingModule } from './casheir-net-routing.module';

import { CasheirNetPage } from './casheir-net.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasheirNetPageRoutingModule
  ],
  declarations: [CasheirNetPage]
})
export class CasheirNetPageModule {}
