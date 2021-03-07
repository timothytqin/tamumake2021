import React from "react";
import ShadowView from "./ShadowView";
import CustomText from ".//CustomText";
import RadioButton from "./RadioButton";

export default function RangeTile({ range, level, color, selected }) {
  return (
    <ShadowView containerStyles={selected ? { backgroundColor: color } : {}}>
      <RadioButton size={20} color={selected ? "#fff" : color} />
      <CustomText value={range} bold color={selected ? "#fff" : ""} />
      <CustomText value={level} color={selected ? "#fff" : ""} />
    </ShadowView>
  );
}
