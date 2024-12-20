import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoSummeryComponent } from "../todo-summery/todo-summery.component";
import { TodoService } from '../../core/services/todo.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomInputComponent, CustomButtonComponent, RouterModule, TodoListComponent, TodoSummeryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  firstName: string = "";
  constructor(private todoService: TodoService){}
}
