import { Component } from '@angular/core';
import { CustomInputComponent } from "../custom-input/custom-input.component";
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CustomInputComponent, CustomButtonComponent, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
