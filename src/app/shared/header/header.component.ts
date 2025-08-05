import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { Router } from '@angular/router';
import { SmoothScrollDirective } from '../directives/SmoothScrollDirective';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SmoothScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    console.log('Toggling mobile menu');
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onMenuClick() {
    console.log('Menu item clicked');
    this.isMobileMenuOpen = false;
  }
}
