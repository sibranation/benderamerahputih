import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    SliderComponent,
    ServicesComponent,
    TestimoniComponent
  ]
})
export class HomeComponent {}
