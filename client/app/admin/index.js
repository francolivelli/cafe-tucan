import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";
import AdminComponent from "../components/AdminComponent";

const index = () => {
  return (
    <View style={styles.layout}>
      <AdminComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.dark,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default index;
