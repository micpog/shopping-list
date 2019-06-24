import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // @HostListener('mouseover') toggleOpen() {
  //   this.isOpen = true;
  // }
  // @HostListener('mouseleave') toggleClose() {
  //   this.isOpen = false;
  // }

  @HostListener('document:click', ['$event']) toogleOnClick(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) { }
}
