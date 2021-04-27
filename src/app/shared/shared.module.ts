import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCutPipe } from './pipes/word-cut.pipe';
import { TimePipe } from './pipes/time.pipe';
import { MillisecondPipe } from './pipes/millisecond.pipe';

@NgModule({
  declarations: [WordCutPipe, TimePipe, MillisecondPipe],
  imports: [CommonModule],
  exports: [WordCutPipe, TimePipe, MillisecondPipe],
})
export class SharedModule {}
