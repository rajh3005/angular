import { Directive, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[apptextboxcolor]'
})
export class TextBoxColorDirective implements AfterViewInit {
  @Input() apptextboxcolor = '#e0f7ea';

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.apptextboxcolor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#1f2937');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', '#60a5fa');
  }
}
