import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-summery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-summery.component.html',
  styleUrl: './todo-summery.component.css'
})
export class TodoSummeryComponent {
  collapsed: boolean = false;

  public toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
