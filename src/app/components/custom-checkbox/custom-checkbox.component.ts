import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css'
})
export class CustomCheckboxComponent {
  checked: boolean = false;

  toggleCheckMark(){
    this.checked = !this.checked
  }
}
