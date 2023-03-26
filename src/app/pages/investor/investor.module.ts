import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestorPageRoutingModule } from './investor-routing.module';

import { InvestorPage } from './investor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestorPageRoutingModule
  ],
  declarations: [InvestorPage]
})
export class InvestorPageModule {}
