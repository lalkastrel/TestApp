import { Component } from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';

import { MenuBar } from '../menu-bar/menu-bar';
import ProgressBar from '../tui-components/progress-bar/progress-bar';

@Component({
  selector: 'app-main-page',
  imports: [TuiIcon, MenuBar, ProgressBar],
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
