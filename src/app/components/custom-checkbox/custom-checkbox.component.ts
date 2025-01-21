import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css'
})
export class CustomCheckboxComponent {
  @Input() size: string = 'small';
  @Input() checked: boolean = false;

  toggleCheckMark(){
    this.checked = !this.checked
  }
}
