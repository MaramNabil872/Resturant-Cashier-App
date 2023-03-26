import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseDatePageRoutingModule } from './operation-date-routing.module';

import { OperationDatePage } from './operation-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseDatePageRoutingModule
  ],
  declarations: [OperationDatePage]
})
export class ChooseDatePageModule {}
