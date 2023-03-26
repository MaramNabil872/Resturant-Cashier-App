import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountClosurePageRoutingModule } from './account-closure-routing.module';

import { AccountClosurePage } from './account-closure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountClosurePageRoutingModule
  ],
  declarations: [AccountClosurePage]
})
export class AccountClosurePageModule {}
