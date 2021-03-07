import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { GradientCircularProgress } from "react-native-circular-gradient-progress";
import CustomText from ".//CustomText";
import Background from "../assets/progress.png";

export default function RightProgressBar({ cpm }) {
  return (
    <>
      <View style={styles.progress}>
        <GradientCircularProgress
          startColor="#F2F3F7"
          middleColor="#8CB4ED"
          endColor="#276DD4"
          size={360}
          progress={(cpm / 200) * 100 + 24}
          strokeWidth={6}
        />
      </View>
      <View style={styles.cpm}>
        <CustomText value={cpm} bold size={60} />
        <CustomText value="CPM" />
      </View>
      <Image
        style={{
          width: 360,
          height: 370,
          resizeMode: "contain",
          left: -40,
        }}
        source={Background}
      />
    </>
  );
}

const styles = StyleSheet.create({
  progress: {
    position: "absolute",
    left: 36,
    transform: [{ rotate: "90deg" }],
    zIndex: 100,
  },
  cpm: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    left: 120,
    top: 150,
    zIndex: 200,
  },
});
