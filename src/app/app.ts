import { Component, signal } from '@angular/core';
import { Test } from './components/test/test';

@Component({
  imports: [Test],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('interview-master');

  messageFromParent = 'Я твій батько';

  messageFromChild = '';

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
