import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight'

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-test',
  styleUrl: './test.scss',
  templateUrl: './test.html',
})
export class Test {
  title = 'це интерполяция';
  firstName = 'Serhii';
  lastName = 'Yemets';
  appState: string = 'paused';

  isEnabled: boolean = true;

  isActive: boolean = true;
  isDisabled: boolean = false;

  isClickedState: boolean = false;

  inputText: string = 'Test';

  items = [
    {"id": 1, "name": "Яблоко"},
    {"id": 2, "name": "банан"},
    {"id": 3, "name": "груша"},
    {"id": 4, "name": "вишня"},
    {"id": 5, "name": "черешня"},
  ]



  @Input() childMessage: string = '';

  @Output() messageFromChild = new EventEmitter<string>();



  getFullName() {
    return `Меня зовут ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = !this.isClickedState;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('я твий сын!');
  }
}

