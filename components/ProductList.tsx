import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Product, productsMocks } from "../models/Product";
import { Colors, spacing } from "../styles";
import BrandFilters from "./BrandFilters";
import FeaturedProducts from "./FeaturedProducts";
import { HSpacer } from "./Spacer";

export default function ProductList() {
  const brands = [...new Set(productsMocks.map((p) => p.brand))];
  const [brandFilter, setBrandFilter] = useState<string>();
  const products = brandFilter
    ? productsMocks.filter((p) => p.brand === brandFilter)
    : productsMocks;
  const featuredProducts = products.filter((p) => p.isFeatured);

  return (
    <>
      <FlatList
        data={products}
        renderItem={(i) => <Item {...i.item} />}
        keyExtractor={(i) => i.id}
        ListHeaderComponent={
          <>
            <BrandFilters brands={brands} onChange={setBrandFilter} />
            <FeaturedProducts products={featuredProducts} />
            <HSpacer size={2} />
          </>
        }
      ></FlatList>
    </>
  );
}

const Item = (item: Product) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginHorizontal: spacing(2),
        borderTopWidth: 1,
        borderTopColor: Colors.grey,
        paddingVertical: spacing(1),
      }}
    >
      <View
        style={{
          width: 90,
          height: 90,
          borderRadius: 5,

          backgroundColor: Colors.grey,
          marginRight: spacing(1),
        }}
      ></View>
      <Text>
        <ProductTitle>{item.title}</ProductTitle>
        {"\n"}
        <Text style={{ fontSize: 14, fontWeight: "400" }}>{item.price} €</Text>
      </Text>
    </View>
  );
};

const ProductTitle = ({ children }: { children: React.ReactNode }) => (
  <Text style={{ fontSize: 18, fontWeight: "400" }}>{children}</Text>
);
