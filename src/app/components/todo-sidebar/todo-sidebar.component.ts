import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './todo-sidebar.component.html',
  styleUrl: './todo-sidebar.component.css'
})
export class TodoSidebarComponent {
  constructor(private el: ElementRef){}
  isExpanded = false;
  pointerEventsOnSidebarButtonsEnabled = true;

  showMore(){
    this.isExpanded = true;
    this.showLess();
  }
  showLess() {
    setTimeout(() => {
      this.isExpanded = false;
    }, 3000); 
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const signOutButton = this.el.nativeElement.querySelector('#sign-out');
    const copyButton = this.el.nativeElement.querySelector('#copy');
    const addButton = this.el.nativeElement.querySelector('#add');
    const moreButton = this.el.nativeElement.querySelector('#more-button');
    const clickedInside = this.el.nativeElement.contains(event.target as Node) || copyButton?.contains(event.target as Node) || addButton?.contains(event.target as Node) || moreButton?.contains(event.target as Node)
    if (!clickedInside) {
      this.disablePointerEventsOnSidebarButtons();
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    this.enablePointerEventsOnSidebarButtons();
  }

  disablePointerEventsOnSidebarButtons(){
    this.pointerEventsOnSidebarButtonsEnabled = false;
  }
  enablePointerEventsOnSidebarButtons(){
    if(this.pointerEventsOnSidebarButtonsEnabled == false)
    this.pointerEventsOnSidebarButtonsEnabled = true;
  }
}
