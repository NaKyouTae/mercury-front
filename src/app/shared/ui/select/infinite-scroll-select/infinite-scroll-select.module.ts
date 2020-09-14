import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollSelectComponent } from './infinite-scroll-select.component';
import { CustomPipeModule } from 'src/app/shared/pipe/custom-pipe.module';

@NgModule({
  declarations: [InfiniteScrollSelectComponent],
  imports: [CommonModule, CustomPipeModule],
  exports: [InfiniteScrollSelectComponent],
})
export class InfiniteScrollSelectModule {}
