import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') newColor: string;

  constructor( private el: ElementRef) {

    console.log('Dir Resaltado');

  }

  @HostListener('mouseenter') mousein() {
 /*    console.log(this.newColor);
    this.el.nativeElement.style.backgroundColor = 'green'; */
    this.resaltar(this.newColor || 'red');
  }

  @HostListener('mouseleave') mouseout() {
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
