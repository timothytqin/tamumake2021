import React from "react";
import { Text } from "react-native";

export default function CustomText({ bold, color, size, value }) {
  return (
    <Text
      style={{
        color: color ? color : "#456078",
        fontSize: size ? size : 14,
        fontWeight: bold ? "bold" : "400",
      }}
    >
      {value}
    </Text>
  );
}
