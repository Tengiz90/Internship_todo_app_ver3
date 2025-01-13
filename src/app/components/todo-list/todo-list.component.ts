import { Component, Input } from '@angular/core';
import { Todo } from '../../core/models/Todo.model';
import { CommonModule } from '@angular/common';
import { CustomCheckboxComponent } from "../custom-checkbox/custom-checkbox.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, CustomCheckboxComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: Todo[] = [
      new Todo(1, "Kill the enemy", false), 
      new Todo(2, "Take Out The trash", true),
      new Todo(3, "Hire a witcher", false),
      new Todo(4, "Ask for a favour", false),
      new Todo(5, "Clean the room", false),
      new Todo(1, "Kill the enemy", false), 
      new Todo(2, "Take Out The trash", true),
      new Todo(3, "Hire a witcher", false),
      new Todo(4, "Ask for a favour", false),
      new Todo(5, "Clean the room", false),
      new Todo(1, "Kill the enemy", false), 
      new Todo(2, "Take Out The trash", true),
      new Todo(3, "Hire a witcher", false),
      new Todo(4, "Ask for a favour", false),
      new Todo(5, "Clean the room", false),
      new Todo(1, "Kill the enemy", false), 
      new Todo(2, "Take Out The trash", true),
      new Todo(3, "Hire a witcher", false),
      new Todo(4, "Ask for a favour", false),
      new Todo(5, "Clean the room", false)
    ]  
}
