import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { Image, TextInput, View, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import search from "../../assets/icons/search.png";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategoryId } from "../states/categorySlice";

const SearchField = ({ onChange, input }) => {
  const [localInput, setLocalInput] = useState("");

  const dispatch = useDispatch();
  const activeCategoryId = useSelector(state => state.category.activeCategoryId);

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategoryId(categoryId));
  };

  useEffect(() => {
    if (activeCategoryId) {
      setLocalInput("");
    }
  }, [activeCategoryId]);

  useEffect(() => {
    setLocalInput(input);
  }, [input]);

  return (
    <View style={styles.container}>
      <BlurView intensity={30} style={styles.blurView}>
        <TextInput
          clearButtonMode="always"
          onPress={() => setLocalInput("")}
          value={localInput}
          onChangeText={(text) => {
            setLocalInput(text);
            if (text !== "") {
              onChange(text);
              handleCategoryChange(null);
            }
          }}
          style={styles.textInput}
          placeholder="¿Qué se te antoja hoy?"
          placeholderTextColor={colors.light}
        />
        <Image style={styles.searchIcon} source={search} />
      </BlurView>
    </View>
  );
};

const { width } = Dimensions.get("window");
const isLargeScreen = width >= 768;

const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING,
    overflow: "hidden",
    maxWidth: 400,
    width: "100%",
    ...(isLargeScreen && {
      width: "95%",
    }),
  },
  blurView: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    maxWidth: 400,
    color: colors.white,
    fontSize: SPACING * 1.7,
    padding: SPACING,
    paddingLeft: SPACING * 3,
  },
  searchIcon: {
    position: "absolute",
    left: SPACING / 1.5,
    height: SPACING * 1.8,
    width: SPACING * 1.8,
  },
});

export default SearchField;
