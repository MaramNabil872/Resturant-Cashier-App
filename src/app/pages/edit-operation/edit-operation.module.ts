import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditOperationPageRoutingModule } from './edit-operation-routing.module';

import { EditOperationPage } from './edit-operation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditOperationPageRoutingModule
  ],
  declarations: [EditOperationPage]
})
export class EditOperationPageModule {}
