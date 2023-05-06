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
import categories from "../config/categories";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategoryId } from "../states/categorySlice";

const Categories = ({ onChange }) => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(state => state.category.activeCategoryId);

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategoryId(categoryId));
  };

  useEffect(() => {
    handleCategoryChange(activeCategoryId);
  }, [activeCategoryId]);

  return (
    <FlatList
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
