import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    @HostListener('focus')
    onFocus() {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#fff9c4');
        this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
    }

    @HostListener('blur')
    onBlur() {
        this.renderer.removeStyle(this.el.nativeElement, 'background-color');
        this.renderer.removeStyle(this.el.nativeElement, 'border');
    }

}