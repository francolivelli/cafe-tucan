import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategoryId } from "../states/categorySlice";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import { API_URL } from "@env";

const Categories = () => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(
    (state) => state.category.activeCategoryId
  );
  const flatListRef = React.useRef(null);
  const firstIndex = 0;

  const [categories, setCategories] = useState()

  useEffect(() => {
    handleCategoryChange(activeCategoryId);
  }, [activeCategoryId]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesResponse = await axios.get(`https://cafe-tucan-server.vercel.app/api/categories`);
      setCategories(categoriesResponse.data);
    };
  
    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategoryId(categoryId));
  };

  return (
    isLargeScreen ? (
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal={isLargeScreen ? false : true}
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategoryChange(item.id)}
            style={styles.touchable}>
            <Text
              style={[
                styles.categoryText,
                activeCategoryId === item.id && styles.activeCategoryText,
              ]}>
              {item.name}
            </Text>
            {activeCategoryId === item.id ? (
              <View style={styles.circle} />
            ) : (
              <></>
            )}
          </TouchableOpacity>
        )}
      />) : (
      <Animatable.View
      animation="fadeIn"
      useNativeDriver
      onAnimationEnd={() => {
        flatListRef.current.scrollToEnd();
        setTimeout(() => {
          flatListRef.current.scrollToIndex({ index: firstIndex });
        }, 1000);
      }}
>
      <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal={isLargeScreen ? false : true}
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategoryChange(item.id)}
            style={styles.touchable}>
            <Text
              style={[
                styles.categoryText,
                activeCategoryId === item.id && styles.activeCategoryText,
              ]}>
              {item.name}
            </Text>
            {activeCategoryId === item.id ? (
              <View style={styles.circle} />
            ) : (
              <></>
            )}
          </TouchableOpacity>
        )}
      />
    </Animatable.View>
    )
  );
};

const { width } = Dimensions.get("window");
const isLargeScreen = width >= 768;

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: SPACING,
    ...(isLargeScreen && {
      marginVertical: SPACING * 2,
    }),
  },
  touchable: {
    marginRight: SPACING * 2,
    alignItems: "center",
    ...(isLargeScreen && {
      marginVertical: SPACING / 1.4,
    }),
  },
  categoryText: {
    color: colors.secondary,
    fontSize: SPACING * 2,
  },
  activeCategoryText: {
    color: colors.primary,
  },
  circle: {
    height: SPACING,
    width: SPACING,
    backgroundColor: colors.primary,
    borderRadius: SPACING / 2,
    ...(isLargeScreen && {
      height: 0,
      width: 0,
    }),
  },
});

export default Categories;
