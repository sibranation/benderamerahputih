import { Component } from '@angular/core';
import { TESTIMONI } from './testimoni.constant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimoni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimoni.component.html',
  styleUrl: './testimoni.component.scss'
})
export class TestimoniComponent {
  testimoni = TESTIMONI;
}
