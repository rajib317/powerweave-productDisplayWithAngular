import { Shoe } from './Shoe';

interface StateObject {
  currentShow: Shoe;
  cart: Shoe[];
}
export const State: StateObject = {
  currentShow: {
    sku: 1234,
    name: 'Lorem Ipsum Shoes',
    details: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto
    incidunt totam officia, nulla voluptate culpa voluptates delectus!
    Error, sint. Vel culpa sequi ipsa temporibus repudiandae rerum pariatur
    praesentium similique?`,
    sizes: [6, 7, 8, 9, 10, 11],
    price: 999.99,
    basePrice: 999.99,
    image: [
      {
        main: 'assets/img/1.jpg',
        thumb: 'assets/img/thumb1.png',
      },
      {
        main: 'assets/img/2.jpg',
        thumb: 'assets/img/thumb2.png',
      },
      {
        main: 'assets/img/3.jpg',
        thumb: 'assets/img/thumb3.png',
      },
      {
        main: 'assets/img/4.jpg',
        thumb: 'assets/img/thumb4.png',
      },
    ],
  },
  cart: [],
};
