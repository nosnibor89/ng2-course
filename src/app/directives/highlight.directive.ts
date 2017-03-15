import { element } from 'protractor';
import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private backgroundColor = this.default;

  @Input() default = 'white';
  @Input() hightlight = 'green';
  @Input() bordered: boolean;

  constructor(private renderer: Renderer, private element: ElementRef) {

    // element.nativeElement.className = 'border';
    // renderer.setElementClass(element.nativeElement, 'border', this.bordered);
    // renderer.setElementStyle(element.nativeElement, 'background-color', this.default);
  }

  ngOnInit() {
    this.renderer.setElementClass(this.element.nativeElement, 'border', this.bordered);
    this.backgroundColor = this.default;
  }

  @HostListener('mouseenter') onMouseOver($event) {
    this.backgroundColor = this.hightlight;
  };

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.default;
  };

  // Passing the event
  // @HostListener('click', ['$event']) onClick($event) {

  // };

  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    return this.backgroundColor;
  }



}
