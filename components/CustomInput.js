import React from "react";
import { TextInput } from "react-native";
import InsetShadow from "react-native-inset-shadow";

export default function CustomInput({ value, setValue, width }) {
  return (
    <InsetShadow
      containerStyle={{ height: 40, borderRadius: 5, marginVertical: 5 }}
      shadowColor="#BECDE2"
      shadowOffset={{
        width: 5,
        height: 5,
      }}
      shadowOpacity={1}
      shadowRadius={2}
    >
      <TextInput
        style={{ height: 40, padding: 5, width: width ? width : 300 }}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder={"Username"}
      />
    </InsetShadow>
  );
}
