import React from "react";
import { View } from "react-native";
import DropShadow from "react-native-drop-shadow";

export default function ShadowView({ children, containerStyles }) {
  return (
    <DropShadow
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      }}
    >
      <View
        style={{
          backgroundColor: "#F2F3F7",
          borderRadius: 8,
          padding: 10,
          marginVertical: 5,
          marginRight: 5,
          ...containerStyles,
        }}
      >
        {children}
      </View>
    </DropShadow>
  );
}
