import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  isEnabled: boolean = true;

  isActive: boolean = true;
  isDisabled: boolean = false;

  isClickedState: boolean = false;

  inputText: string = 'Test';


  @Input() childMessage: string = '';

  @Output() messageFromChild = new EventEmitter<string>();

  getFullName() {
    return `Меня зовут ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('я твий сын!');
  }
}

