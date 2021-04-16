import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCutPipe } from './pipes/word-cut.pipe';

@NgModule({
  declarations: [WordCutPipe],
  imports: [CommonModule],
  exports: [WordCutPipe],
})
export class SharedModule {}
