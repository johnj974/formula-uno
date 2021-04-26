import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCutPipe } from './pipes/word-cut.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [WordCutPipe, TimePipe],
  imports: [CommonModule],
  exports: [WordCutPipe, TimePipe],
})
export class SharedModule {}
