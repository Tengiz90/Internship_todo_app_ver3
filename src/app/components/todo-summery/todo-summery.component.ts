import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-todo-summery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-summery.component.html',
  styleUrl: './todo-summery.component.css'
})
export class TodoSummeryComponent {
  collapsed: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {};
    public toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
 

}
