import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ScaleDirective } from './scale.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ScaleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective , ScaleDirective]
})
export class SharedModule { }
