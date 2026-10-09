import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
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

  getFullName() {
    return `Меня зовут ${this.firstName} ${this.lastName}`;
  }
}
