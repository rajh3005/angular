import { Directive, ElementRef, HostListener, Optional, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appcapitalize]'
})
export class CapitalizeDirective {
  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private renderer: Renderer2,
    @Optional() private control: NgControl
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const value = target?.value ?? '';
    const capitalized = value
      .split(' ')
      .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
      .join(' ');

    if (target) {
      this.renderer.setProperty(target, 'value', capitalized);
    }

    if (this.control?.control) {
      this.control.control.setValue(capitalized, { emitEvent: false });
    }
  }
}
