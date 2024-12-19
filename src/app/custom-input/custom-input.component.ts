import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() isPassword: boolean = false;
  @Input() hasResponsiveHeight: boolean = false;
  
  passwordVisibilityActive: boolean = false;
  
  togglePasswordVisibility(event: Event){
    event.preventDefault()
    this.passwordVisibilityActive = ! this.passwordVisibilityActive
  }
}
