import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoSummeryComponent } from "../todo-summery/todo-summery.component";
import { TodoService } from '../../core/services/todo.service';
import { CustomLoadingComponent } from "../custom-loading/custom-loading.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomInputComponent, CustomButtonComponent, RouterModule, TodoListComponent, TodoSummeryComponent, CustomLoadingComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  firstName: string = "";
  isDataLoading: boolean = true;
  constructor(private todoService: TodoService){}
  public copyTodos(): void{

  }
}
