export type Product = {
  id: string;
  title: string;
  price: number;
  brand: string;
  imageUrl?: string;
  isFeatured: boolean;
};

export const productsMocks: Product[] = [
  {
    id: "a0b3d4f0-aea9-4750-9c37-d7bad562606e",
    title: "iPhone 12",
    price: 499.99,
    brand: "Apple",
    isFeatured: true,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000",
  },
  {
    id: "0bfd07ea-bc27-408f-b3e0-f82244910b10",
    title: "Galaxy S22 Ultra",
    price: 499.99,
    brand: "Samsung",
    isFeatured: true,
    imageUrl:
      "https://images.samsung.com/fr/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg",
  },
  {
    id: "7545fa19-7056-491a-a22c-826103e8043f",
    title: "ONEPLUS 9 Pro 5G",
    price: 499.99,
    brand: "ONEPLUS",
    isFeatured: false,
    imageUrl:
      "https://image01-eu.oneplus.net/ebp/202111/17/1-M00-52-02-rBpB6mGUsXCAINx6AAG65St-_x4106_1360_1360.png",
  },
  {
    id: "6455d479-1970-4a49-9e22-7b2cb2ef8f03",
    title: "GOOGLE Pixel 6 Pro",
    price: 499.99,
    brand: "Google",
    isFeatured: true,
    imageUrl:
      "https://lh3.googleusercontent.com/u9aRA0Y-ff0dM0Oyt7b06q1Hqc0ViN6YzevTE9RkdesFCQu4f2KJAiUWxT3mBAyLF1PfvRBqxKPQMJwy7cucht6m8An0FnDtWQ=rw-e365-w2880",
  },
  {
    id: "64af9875-dc5e-4a4e-b7d3-b754d8b7f1ab",
    title: "Galaxy S20 FE 5G",
    price: 499.99,
    brand: "Samsung",
    isFeatured: false,
    imageUrl:
      "https://images.samsung.com/is/image/samsung/assets/fr/2201/preorder/1_image_carousel/1_group_kv1/S21FE_Carousel_GroupKV1_PC.jpg?imwidth=2560",
  },
];
