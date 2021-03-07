import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomText from "./CustomText";
import LeftStatusBar from "./LeftStatusBar";
import RightProgressBar from "./RightProgressBar";
import Logo from "../assets/logo.png";

export default function UpperDash({ cpm }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.left}>
        <View style={styles.header}>
          <CustomText value="My " size={20} />
          <CustomText value="Radiation" bold size={20} />
          <Image style={styles.logo} source={Logo} />
        </View>
        <LeftStatusBar cpm={cpm} />
      </View>
      <View style={styles.right}>
        <RightProgressBar cpm={cpm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    width: 36,
    height: 36,
    marginLeft: 10,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 2,
  },
});
