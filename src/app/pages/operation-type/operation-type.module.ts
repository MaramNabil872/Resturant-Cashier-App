import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationTypePageRoutingModule } from './operation-type-routing.module';

import { OperationTypePage } from './operation-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationTypePageRoutingModule
  ],
  declarations: [OperationTypePage]
})
export class OperationTypePageModule {}
