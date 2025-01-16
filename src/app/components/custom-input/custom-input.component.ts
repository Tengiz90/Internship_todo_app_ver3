import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() endButtonType: string = "none";
  @Input() hasResponsiveHeight: boolean = false;

  @Output() valueChanged = new EventEmitter<string>();
  
  inputControl: FormControl = new FormControl('');

  passwordVisibilityActive: boolean = false;
  
  togglePasswordVisibility(event: Event){
    event.preventDefault()
    this.passwordVisibilityActive = ! this.passwordVisibilityActive
  }

  onInputChange(): void {
    this.valueChanged.emit(this.inputControl.value || '');  
  }

  clearValue(){
    this.inputControl.reset();
    this.onInputChange(); 
  }
}
