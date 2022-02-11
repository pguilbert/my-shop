import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Product, productsMocks } from "../models/Product";
import { Colors, margins, spacing, Typography } from "../styles";
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
            <BrandFilters
              brands={brands}
              onChange={setBrandFilter}
              value={brandFilter}
            />
            <FeaturedProducts products={featuredProducts} />
            <HSpacer size={2} />
            <Text style={[{ color: Colors.grey.A700 }, margins.ml(2)]}>
              {products.length} results
            </Text>
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
        borderTopColor: Colors.grey.A200,
        paddingVertical: spacing(1),
      }}
    >
      <Image
        style={{
          width: 90,
          height: 90,
          borderRadius: 5,
          backgroundColor: Colors.grey.A200,
          marginRight: spacing(1),
        }}
        source={{
          uri: item.imageUrl,
        }}
      />
      <Text>
        <Text style={Typography.h2}>{item.title}</Text>
        <Text
          style={{ fontSize: 14, fontWeight: "400", color: Colors.grey.A700 }}
        >
          {"\n"}
          {item.price} €
        </Text>
      </Text>
    </View>
  );
};
