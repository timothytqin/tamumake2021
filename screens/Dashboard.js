import React from "react";
import { View, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import LineChart from "../components/LineChart";
import UpperDash from "../components/UpperDash";

export default function Dashboard({ navigation }) {
  navigation.setOptions({
    tabBarLabel: "",
    tabBarIcon: () => <SimpleLineIcons name="speedometer" size={25} />,
  });

  const data = [
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 3 },
    { x: 4, y: 5 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ];

  return (
    <View style={styles.container}>
      <UpperDash cpm={42} />
      <View style={{ marginVertical: "10%" }}>
        <LineChart data={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    paddingTop: "20%",
    backgroundColor: "#fff",
    flex: 1,
  },
});
