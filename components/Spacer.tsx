import { View } from "react-native";
import { spacing } from "../styles";

export type SpacerProps = {
  size: number;
};

export const VSpacer = ({ size }: SpacerProps) => {
  return <View style={{ width: spacing(size) }}></View>;
};

export const HSpacer = ({ size }: SpacerProps) => {
  return <View style={{ height: spacing(size) }}></View>;
};
