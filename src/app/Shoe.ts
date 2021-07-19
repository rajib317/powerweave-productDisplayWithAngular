export interface Shoe {
  sku: number;
  name: string;
  details: string;
  sizes: number[];
  price: number;
  basePrice: number;
  image: imagePack[];
}
interface imagePack {
  thumb: string;
  main: string;
}
