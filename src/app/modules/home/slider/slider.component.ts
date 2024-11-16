import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  imports: [MatIconModule]
})
export class SliderComponent {
  constructor(private readonly router: Router) {}
  handleStudioClick() {
    this.router.navigate(['/studio']);
  }

  handlePackageClick() {
    this.router.navigate(['/books']);
  }
}
