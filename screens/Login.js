import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import Logo from "../assets/logo-large.png";
import CustomText from "../components/CustomText";
import CustomInput from "../components/CustomInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default function Login({ navigation }) {
  navigation.setOptions({ header: () => null });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 72, height: 72 }} />
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <CustomText value="My " />
        <CustomText value="Radiation" bold />
      </View>
      <View style={{ marginVertical: 50, width: 300 }}>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeholder="Username"
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomInput
            value={password}
            setValue={setPassword}
            width={260}
            placeholder="Password"
            password
          />
          <TouchableOpacity
            style={{
              padding: 5,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <Entypo name="eye" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#8CB4ED",
            marginVertical: 20,
            borderRadius: 5,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <CustomText value="Log in" bold color="#F2F3F7" />
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
