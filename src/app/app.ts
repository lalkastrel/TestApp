import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuBar } from './components/menu-bar/menu-bar'
import { MainPage } from './components/main-page/main-page'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, TuiRoot, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TestApp');
}
