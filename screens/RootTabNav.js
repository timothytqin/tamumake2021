import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import Insights from "./Insights";
import Map from "./Map";

const Tab = createBottomTabNavigator();

export default function RootNav({ navigation }) {
  navigation.setOptions({ header: () => null });
  // http://maps.radiationnetwork.net/getmap~1~631~956~38.7813~-97.0391~2.7~y~y~n~n~y~n~n~n~n~n~.png
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#F2F3F7",
        },
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Insights" component={Insights} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}
