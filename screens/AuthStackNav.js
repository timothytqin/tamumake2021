import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import RootNav from "./RootTabNav";

const Stack = createStackNavigator();

export default function AuthStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={RootNav} />
    </Stack.Navigator>
  );
}
