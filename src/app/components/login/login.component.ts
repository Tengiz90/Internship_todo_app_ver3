import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CustomInputComponent } from "../custom-input/custom-input.component";
import { CustomButtonComponent } from '../custom-button/custom-button.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CustomInputComponent, CustomButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
