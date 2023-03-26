import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationAboutPageRoutingModule } from './operation-about-routing.module';

import { OperationAboutPage } from './operation-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationAboutPageRoutingModule
  ],
  declarations: [OperationAboutPage]
})
export class OperationAboutPageModule {}
