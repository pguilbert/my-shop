import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import Animated, { FadeInUp, FadeOutUp, Layout } from "react-native-reanimated";
import { Product } from "../models/Product";
import { Colors, spacing } from "../styles";
import { VSpacer } from "./Spacer";

type FeaturedProductsProps = {
  products: Product[];
};

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products || products.length < 1) {
    return null;
  }
  return (
    <ScrollView
      horizontal={true}
      overScrollMode="never"
      showsHorizontalScrollIndicator={false}
      style={{
        flexGrow: 0,
        flexShrink: 0,
        marginBottom: spacing(1),
      }}
    >
      {products.map((p) => (
        <Item key={p.id} {...p} />
      ))}
      <VSpacer size={2} />
    </ScrollView>
  );
}

const ITEM_SIZE = 200;
const Item = (product: Product) => {
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      layout={Layout}
      style={{
        marginLeft: spacing(2),
        height: ITEM_SIZE,
        width: ITEM_SIZE,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: Colors.grey.A200,
        borderRadius: 20,
      }}
    >
      <Image
        style={StyleSheet.absoluteFillObject}
        source={{
          uri: product.imageUrl,
        }}
      />
    </Animated.View>
  );
};
