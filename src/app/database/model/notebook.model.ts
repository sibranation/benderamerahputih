export interface ProductModel {
  title: string;
  description: string;
  id: number;
  images: {
    thumbnail: string;
  };
  code: string;
  price: string;
  discounted_percentage?: string;
  discounted_price?: string;
  stock: number;
}
