import React from "react";
import ShadowView from "./ShadowView";
import CustomText from ".//CustomText";
import RadioButton from "./RadioButton";

export default function RangeTile({ range, level, color, selected }) {
  return (
    <ShadowView containerStyles={selected ? { backgroundColor: color } : {}}>
      <RadioButton size={20} color={selected ? "#F2F3F7" : color} />
      <CustomText value={range} bold color={selected ? "#F2F3F7" : ""} />
      <CustomText value={level} color={selected ? "#F2F3F7" : ""} />
    </ShadowView>
  );
}
