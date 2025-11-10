import { Component, Output, EventEmitter} from '@angular/core';

import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

@Component({
  selector: 'app-menu-bar',
  imports: [TuiIcon, TuiIconPipe],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  @Output() menuClosed = new EventEmitter<boolean>();

  closeMenu() {
    this.menuClosed.emit(false);
  }
}
