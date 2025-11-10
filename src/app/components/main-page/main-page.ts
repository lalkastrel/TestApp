import { Component } from '@angular/core';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

import { MenuBar } from '../menu-bar/menu-bar';

@Component({
  selector: 'app-main-page',
  imports: [TuiIcon, MenuBar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
