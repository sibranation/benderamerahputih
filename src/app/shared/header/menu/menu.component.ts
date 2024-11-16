import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MENU } from './menu.constant';
import type { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isOpen = false;
  menu: Menu[] = MENU;

  constructor(private readonly router: Router) {}

  handleHamburgerClick() {
    this.isOpen = true;
  }

  handleCloseClick() {
    this.isOpen = false;
  }

  onStudioClick() {
    this.router.navigate(['/studio']);
  }
}
