import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background') background!: string;


  @HostListener('mouseover', ['$event'])
  mouseover(): void {
    this.background = '#FCF0FF'
  }

  @HostListener('mouseout', ['$event'])
  mouseout(): void {
    this.background = 'inherit'
  }

}
