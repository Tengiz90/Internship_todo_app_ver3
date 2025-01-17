import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todo-sidebar.component.html',
  styleUrl: './todo-sidebar.component.css'
})
export class TodoSidebarComponent {
  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
