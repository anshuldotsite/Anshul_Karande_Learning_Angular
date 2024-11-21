import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true,
})
export class HighlightOnFocusDirective {
  @Input('appHiglightOnFocus') highlightColor: string = '#dbc1ac';

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus(): void {
    this.highlight(this.highlightColor || 'lightblue');
  }

  @HostListener('blur') onBlur(): void {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
