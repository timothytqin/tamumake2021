import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./screens/AuthStackNav";

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}
