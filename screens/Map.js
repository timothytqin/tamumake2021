import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Map({ navigation }) {
  navigation.setOptions({
    tabBarLabel: "",
    tabBarIcon: () => <Ionicons name="map-outline" size={25} />,
  });
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "http://maps.radiationnetwork.net/getmap~1~631~956~38.7813~-97.0391~2.7~y~y~n~n~y~n~n~n~n~n~.png",
        }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "20%",
    backgroundColor: "#F2F3F7",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
