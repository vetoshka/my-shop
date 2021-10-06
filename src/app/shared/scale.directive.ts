import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }
  @HostBinding('style.font-size') size!: string;

  @Input() scale!: string;
  

  @HostListener('click')
  click(): void {
    this._renderer.setStyle(this._elRef.nativeElement, 'font-size', `${this.scale}px`);
  }
}
