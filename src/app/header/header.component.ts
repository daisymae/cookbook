import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  // hamburger menu support
  collapsed = true;
  @Output() menuSelected = new EventEmitter<string>();

  onSelect(selected: string) {
    this.menuSelected.emit(selected);
  }
}
