import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuBar } from './components/menu-bar/menu-bar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TestApp');
}
