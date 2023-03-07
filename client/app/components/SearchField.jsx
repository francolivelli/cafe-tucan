import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Image, TextInput, View } from "react-native";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import search from "../../assets/icons/search.png";

const SearchField = ({ onChange }) => {
  const [input, setInput] = useState("");

  const handlePress = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={{ borderRadius: SPACING, overflow: "hidden" }}>
      <BlurView
        intensity={30}
        style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          clearButtonMode="always"
          onPress={(this.value = "")}
          value={input}
          onChangeText={(text) => {
            handlePress(text);
          }}
          style={{
            width: "100%",
            color: colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3,
          }}
          placeholder="¿Qué se te antoja hoy?"
          placeholderTextColor={colors.light}
        />
        <Image
          style={{
            position: "absolute",
            left: SPACING / 1.5,
            height: SPACING * 1.8,
            width: SPACING * 1.8,
          }}
          source={search}         
        />
      </BlurView>
    </View>
  );
};

export default SearchField;
