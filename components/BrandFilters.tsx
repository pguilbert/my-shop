import React from "react";
import { ScrollView } from "react-native";
import { spacing } from "../styles";
import ChipButton from "./ChipButton";
import { VSpacer } from "./Spacer";

const AllLabel = "All";

export type BrandFiltersProps = {
  brands: string[];
  onChange: (t?: string) => void;
};

export default function BrandFilters({
  brands: brandProp,
  onChange,
}: BrandFiltersProps) {
  const brands = [AllLabel, ...brandProp.sort((a, b) => a.localeCompare(b))];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ flexGrow: 0, flexShrink: 0 }}
    >
      {brands.map((f, i) => (
        <Item
          key={f}
          index={i}
          text={f}
          active={i === 0}
          onPress={() => onChange(f === AllLabel ? undefined : f)}
        />
      ))}

      <VSpacer size={2} />
    </ScrollView>
  );
}

type ItemProps = {
  index: number;
  text: string;
  active?: boolean;
  onPress: () => void;
};

const Item = ({ index, text, active, onPress }: ItemProps) => (
  <ChipButton
    active={active}
    onPress={onPress}
    style={{ marginLeft: index === 0 ? spacing(2) : spacing(1) }}
  >
    {text}
  </ChipButton>
);
