import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../../directives/highlight'
import { TrancatePipe } from '../../pipes/trancate-pipe';
import { Todo } from '../../services/todo';

// @Component({
//   imports: [CommonModule, FormsModule, TrancatePipe ],
//   selector: 'app-test',
//   styleUrl: './test.scss',
//   templateUrl: './test.html',
// })
// export class Test {
//   title = 'це интерполяция';
//   firstName = 'Serhii';
//   lastName = 'Yemets';
//   appState: string = 'paused';

//   isEnabled: boolean = true;

//   isActive: boolean = true;
//   isDisabled: boolean = false;

//   isClickedState: boolean = false;

//   inputText: string = 'Test';

//   items = [
//     {"id": 1, "name": "Яблоко"},
//     {"id": 2, "name": "банан"},
//     {"id": 3, "name": "груша"},
//     {"id": 4, "name": "вишня"},
//     {"id": 5, "name": "черешня"},
//   ]

//   today = new Date();
//   longText = "Очень долгий текст, который нужно обрезать"

//   @Input() childMessage: string = '';

//   @Output() messageFromChild = new EventEmitter<string>();



//   getFullName() {
//     return `Меня зовут ${this.firstName} ${this.lastName}`;
//   }

//   toggleState() {
//     this.isClickedState = !this.isClickedState;
//   }

//   sendMessageToParent() {
//     this.messageFromChild.emit('я твий сын!');
//   }
// }

@Component({
  imports: [CommonModule, FormsModule, TrancatePipe ],
  selector: 'app-test',
  styleUrl: './test.scss',
  templateUrl: './test.html',
})
export class Test implements OnInit {
  newTask: string = '';
  tasks: string[] = [];

  constructor() {}

  private todoService = inject(Todo);

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
      this.updateTasks();
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks() {
    this.tasks = this.todoService.getTasks();
  }
}

