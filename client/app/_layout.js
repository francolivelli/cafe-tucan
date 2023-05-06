"react-native";
import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import store from "./states/store";

const StackLayout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </Provider>
  );
};

export default StackLayout;
