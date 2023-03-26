import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperationFromtoPageRoutingModule } from './operation-fromto-routing.module';

import { OperationFromtoPage } from './operation-fromto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationFromtoPageRoutingModule
  ],
  declarations: [OperationFromtoPage]
})
export class OperationFromtoPageModule {}
