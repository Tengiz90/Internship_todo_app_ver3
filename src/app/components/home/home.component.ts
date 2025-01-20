import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoService } from '../../core/services/todo.service';
import { CustomLoadingComponent } from "../custom-loading/custom-loading.component";
import { CommonModule } from '@angular/common';
import { TodoSidebarComponent } from '../todo-sidebar/todo-sidebar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomInputComponent, TodoSidebarComponent, RouterModule, TodoListComponent, CustomLoadingComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isDropdownVisible: boolean = false;
  firstName: string = "";
  isDataLoading: boolean = true;
  constructor(private todoService: TodoService){}
  setDropdownVisibility(visbility: boolean) {
    this.isDropdownVisible = visbility
}
  public copyTodos(): void{

  }
}
