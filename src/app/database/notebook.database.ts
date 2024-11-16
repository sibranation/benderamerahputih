import { BOOK_CODE } from './code.database';
import { ProductModel } from './model/notebook.model';

export const NOTEBOOK_DB: ProductModel[] = [
  {
    title: 'Courage Notebook',
    description: 'Change Takes Courage.',
    id: 1,
    images: {
      thumbnail: 'assets/books/notebook/no1-thumbnail.jpeg'
    },
    code: BOOK_CODE.NO1,
    price: 'Rp. 14.999',
    discounted_percentage: '40%',
    discounted_price: 'Rp. 25.000',
    stock: 10
  },
  {
    title: 'Sky Notebook',
    description: 'The sky is not the limit. Your mind is.',
    id: 2,
    images: {
      thumbnail: 'assets/books/notebook/no2-thumbnail.png'
    },
    code: BOOK_CODE.NO2,
    price: 'Rp. 14.999',
    discounted_percentage: '40%',
    discounted_price: 'Rp. 25.000',
    stock: 10
  }
];
