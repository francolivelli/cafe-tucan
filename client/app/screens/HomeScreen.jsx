import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";

const logo = require("../../assets/logo.png");

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: SPACING }}>
      <ScrollView>
        <View
          style={{
            padding: SPACING,
          }}></View>
        <View
          style={{
            width: "100%",
            marginVertical: SPACING,
            height: SPACING * 14,
            alignItems: "center",
          }}>
          <Image source={logo} style={{ width: "75%", height: "80%" }} />
        </View>
        <SearchField />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
