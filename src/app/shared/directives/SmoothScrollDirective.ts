import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[smoothScroll]',
  standalone: true
})
export class SmoothScrollDirective {
  constructor(private elementRef: ElementRef<HTMLAnchorElement>) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log(`Scrolling to a`);

    event.preventDefault();

    const href = this.elementRef.nativeElement.getAttribute('href');
    console.log(`Scrolling to ${href}`);
    if (!href) return;
    
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}