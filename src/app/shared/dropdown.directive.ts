import { Directive, HostListener, HostBinding } from '@angular/core';

/**
 * A directive to add css class (open) to element once it is clicked
 * Remove the class when the click is ended
 */
@Directive({
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
