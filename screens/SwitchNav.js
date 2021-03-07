import React from "react";
import RootNav from "./RootTabNav";
import AuthStackNav from "./AuthStackNav";

export default function SwitchNav() {
  return !window.loggedIn ? <AuthStackNav /> : <RootNav />;
}
