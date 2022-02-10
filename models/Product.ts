export type Product = {
  id: string;
  title: string;
  price: number;
  brand: string;
  isFeatured: boolean;
};

export const productsMocks: Product[] = [
  {
    id: "a0b3d4f0-aea9-4750-9c37-d7bad562606e",
    title: "iPhone 12",
    price: 499.99,
    brand: "Apple",
    isFeatured: true,
  },
  {
    id: "0bfd07ea-bc27-408f-b3e0-f82244910b10",
    title: "Galaxy S22 Ultra",
    price: 499.99,
    brand: "Samsung",
    isFeatured: true,
  },
  {
    id: "7545fa19-7056-491a-a22c-826103e8043f",
    title: "ONEPLUS 9 Pro 5G",
    price: 499.99,
    brand: "ONEPLUS",
    isFeatured: false,
  },
  {
    id: "6455d479-1970-4a49-9e22-7b2cb2ef8f03",
    title: "GOOGLE Pixel 6 Pro",
    price: 499.99,
    brand: "Google",
    isFeatured: true,
  },
  {
    id: "64af9875-dc5e-4a4e-b7d3-b754d8b7f1ab",
    title: "Galaxy S20 FE 5G",
    price: 499.99,
    brand: "Samsung",
    isFeatured: false,
  },
];
