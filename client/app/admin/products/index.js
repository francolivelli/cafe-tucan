import { StyleSheet, View } from "react-native";
import React from "react";
import List from "../../components/List";
import colors from "../../config/colors";

const index = () => {
  return (
    <View style={styles.layout}>
      <List />
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
