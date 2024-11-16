import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../database/model/notebook.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() product!: ProductModel[];

  @Output() onProductClick = new EventEmitter();

  handleProductClick(id: string) {
    this.onProductClick.emit(id);
  }
}
