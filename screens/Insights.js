import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import UpperDash from "../components/UpperDash";
import CustomText from "../components/CustomText";
import ShadowView from "../components/ShadowView";

export default function Insights({ navigation }) {
  navigation.setOptions({
    tabBarLabel: "",
    tabBarIcon: () => <MaterialIcons name="lightbulb-outline" size={25} />,
  });

  const data = [
    "Average over the past week. Above the recommended 40 CPM.",
    "Stay away from radioactive devices for the next 7 hours.",
    "Stay away from radioactive devices for the next 7 hours. ",
  ];

  return (
    <View style={styles.container}>
      <UpperDash cpm={42} />
      <View style={{ marginVertical: 50 }}>
        <FlatList
          data={data}
          horizontal
          renderItem={({ item, index }) => (
            <ShadowView
              key={index}
              containerStyles={{
                width: 120,
                height: "50%",
                marginHorizontal: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="lightbulb-outline" size={25} />
              </View>
              <View style={{ flex: 2 }}>
                <CustomText value={item} />
              </View>
            </ShadowView>
          )}
        />
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
