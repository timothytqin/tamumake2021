import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import LineChart from "../components/LineChart";
import UpperDash from "../components/UpperDash";
import { firestore } from "../firebase/firebase";
import CustomText from "../components/CustomText";

export default function Dashboard({ navigation }) {
  navigation.setOptions({
    tabBarLabel: "",
    tabBarIcon: () => <SimpleLineIcons name="speedometer" size={25} />,
  });

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
      {data.length > 0 && (
        <View style={{ marginVertical: "10%" }}>
          <LineChart data={data} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText value={`${new Date().getHours() - 4}:00`} />
            <CustomText value={`${new Date().getHours() - 3}:00`} />
            <CustomText value={`${new Date().getHours() - 2}:00`} />
            <CustomText value={`${new Date().getHours() - 1}:00`} />
            <CustomText value={`${new Date().getHours()}:00`} />
          </View>
        </View>
      )}
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
