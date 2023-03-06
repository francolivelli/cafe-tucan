import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const SearchField = ({ onChange }) => {
  const [input, setInput] = useState("");

  const handlePress = (text) => {
    setInput(text);
    onChange(text);
  };

  const [loaded] = useFonts({
    Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    });
    
    if (!loaded) {
    return null;
    }

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
        <Ionicons
          style={{ position: "absolute", left: SPACING / 2 }}
          name="search"
          color={colors.light}
          size={SPACING * 2}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;
