import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import UpperDash from "../components/UpperDash";
import CustomText from "../components/CustomText";
import ShadowView from "../components/ShadowView";
import { firestore } from "../firebase/firebase";

export default function Insights({ navigation }) {
  navigation.setOptions({
    tabBarLabel: "",
    tabBarIcon: () => <MaterialIcons name="lightbulb-outline" size={25} />,
  });

  const details = [
    "Average over the past week. Above the recommended 40 CPM.",
    "Stay away from radioactive devices for the next 7 hours.",
    "Stay away from radioactive devices for the next 7 hours. ",
  ];

  const [data, setData] = useState([]);
  const [avgCPM, setAvgCPM] = useState(0);

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    firestore.collection("readings").onSnapshot((snapshot) => {
      var tempData = [];
      let sum = 0;
      snapshot.forEach((doc) => {
        const docData = doc.data();
        const newData = {
          x: parseInt(docData.timestamp) * 1000,
          y: parseInt(docData.cpm) + getRndInteger(-1, 1),
        };
        tempData.push(newData);
        sum += newData.y;
      });
      tempData.sort((a, b) => a.x > b.x);
      setData(tempData);
      setAvgCPM(sum / tempData.length);
    });
  }, []);

  return (
    <View style={styles.container}>
      <UpperDash cpm={Math.floor(avgCPM)} />
      <View style={{ marginVertical: 50 }}>
        <FlatList
          data={details}
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
    backgroundColor: "#F2F3F7",
    flex: 1,
  },
});
