import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studio-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './studio-header.component.html',
  styleUrl: './studio-header.component.scss'
})
export class StudioHeaderComponent {
  constructor(private readonly router: Router) {}

  goHomeClick() {
    this.router.navigate(['/']);
  }
}
