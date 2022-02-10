import React from "react";
import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { spacing } from "../styles";

export type ChipButtonProps = {
  style?: StyleProp<ViewStyle>;
  active?: boolean;
  onPress: () => void;
  children?: React.ReactNode;
};

export default function ChipButton({
  active,
  onPress,
  style,
  children,
}: ChipButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          minWidth: 70,
          backgroundColor: active || pressed ? "black" : "white",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
          marginBottom: spacing(2),
        },
        style,
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <Text
          style={{
            color: active || pressed ? "white" : "black",
            padding: spacing(1),
            textAlign: "center",
          }}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}
