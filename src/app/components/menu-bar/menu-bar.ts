import { Component } from '@angular/core';

import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

@Component({
  selector: 'app-menu-bar',
  imports: [TuiIcon, TuiIconPipe],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {

}
