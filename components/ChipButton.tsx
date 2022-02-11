import React from "react";
import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { Colors, spacing } from "../styles";

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
          backgroundColor:
            active || pressed ? Colors.primary.main : Colors.background.default,
          borderColor: Colors.primary.main,
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
            color:
              active || pressed
                ? Colors.primary.contrastText
                : Colors.text.primary,
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
