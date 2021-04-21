import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCutPipe } from './pipes/word-cut.pipe';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WordCutPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [WordCutPipe],
})
export class SharedModule {}
