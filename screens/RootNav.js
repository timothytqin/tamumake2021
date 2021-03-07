import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import Insights from "./Insights";

const Tab = createBottomTabNavigator();

export default function RootNav() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Insights" component={Insights} />
    </Tab.Navigator>
  );
}
