import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-loading.component.html',
  styleUrl: './custom-loading.component.css'
})
export class CustomLoadingComponent {
 @Input() size: string = 'small';
}
