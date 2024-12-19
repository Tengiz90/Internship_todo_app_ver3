import { Component } from '@angular/core';
import { HeaderComponent } from '../custom-header/header.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CustomCheckboxComponent } from '../custom-checkbox/custom-checkbox.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CustomInputComponent, CustomButtonComponent, CustomCheckboxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
