import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { NOTEBOOK_DB } from '../../database/notebook.database';

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  imports: [ProductCardComponent, CommonModule]
})
export class BooksComponent {
  notebook = NOTEBOOK_DB;

  handleProductClick(code: Event) {
    console.log(code);
  }
}
