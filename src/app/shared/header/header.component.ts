import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  onLogoClick() {
    this.router.navigate(['/']);
  }
}
