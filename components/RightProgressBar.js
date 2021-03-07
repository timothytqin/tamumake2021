import React from "react";
import { View, StyleSheet } from "react-native";
import { GradientCircularProgress } from "react-native-circular-gradient-progress";
import CustomText from ".//CustomText";

export default function RightProgressBar({ cpm }) {
  return (
    <>
      <View style={styles.progress}>
        <GradientCircularProgress
          startColor="#fff"
          middleColor="#8CB4ED"
          endColor="#276DD4"
          size={360}
          progress={(cpm / 200) * 100 + 18}
        />
      </View>
      <View style={styles.cpm}>
        <CustomText value={cpm} bold size={60} />
        <CustomText value="CPM" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  progress: {
    position: "absolute",
    left: 36,
    transform: [{ rotate: "90deg" }],
  },
  cpm: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    left: 120,
    top: 150,
  },
});
