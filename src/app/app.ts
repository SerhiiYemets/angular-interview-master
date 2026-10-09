import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './components/test/test';


@Component({
  imports: [RouterOutlet, Test],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('interview-master');
}
