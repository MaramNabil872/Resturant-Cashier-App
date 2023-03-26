import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomFilterPipe} from './pipes/custom-filter-pipe.pipe';

@NgModule({
  declarations: [CustomFilterPipe],
  imports: [
    CommonModule,
    ],
  exports:[CustomFilterPipe]
})
export class SharedModule {}
