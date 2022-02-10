import React from "react";
import { ScrollView, View } from "react-native";
import { Product } from "../models/Product";
import { spacing } from "../styles";
import { VSpacer } from "./Spacer";

const ITEM_SIZE = 240;
const LEFT_MARGIN = spacing(2);
const SNAP_TO_INTERVAL = ITEM_SIZE + LEFT_MARGIN;
const BORDER_RADIUS = 20;

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
      snapToInterval={SNAP_TO_INTERVAL}
      showsHorizontalScrollIndicator={false}
      style={{
        flexGrow: 0,
        flexShrink: 0,
        marginBottom: spacing(1),
      }}
    >
      {products.map((p) => (
        <Item key={p.id} />
      ))}
      <VSpacer size={2} />
    </ScrollView>
  );
}

const Item = () => {
  return (
    <View
      style={{
        marginLeft: LEFT_MARGIN,
        height: ITEM_SIZE,
        width: ITEM_SIZE,
        backgroundColor: "#eee",
        borderRadius: BORDER_RADIUS,
      }}
    ></View>
  );
};
