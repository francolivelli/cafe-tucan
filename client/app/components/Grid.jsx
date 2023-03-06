import {
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const Grid = ({ products, activeCategoryId }) => {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>
      {products
        .filter((product) => {
          if (activeCategoryId === null) {
            return true;
          }
          return product.categoryId === activeCategoryId;
        })
        .map((product) => (
          <View
            key={product.id}
            style={{
              width: width / 2 - SPACING * 2,
              marginBottom: SPACING,
              borderRadius: SPACING * 2,
              overflow: "hidden",
            }}>
            <BlurView
              tint="dark"
              intensity={95}
              style={{
                padding: SPACING,
              }}>
              <TouchableOpacity
                onPress={() => {
                  router.push(`${product.id}/details`);
                }}
                style={{
                  height: 150,
                  width: "100%",
                }}>
                <Image
                  source={product.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: SPACING * 2,
                  }}
                />
              </TouchableOpacity>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.white,
                  fontWeight: "600",
                  fontSize: SPACING * 1.7,
                  marginTop: SPACING,
                  marginBottom: SPACING / 2,
                }}>
                {product.name}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  color: colors.secondary,
                  fontSize: SPACING * 1.2,
                }}>
                {product.shortDescription
                  ? `${product.shortDescription}\n${product.description}`
                  : product.description}
              </Text>
              <View
                style={{
                  marginVertical: SPACING / 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: colors.primary,
                      marginRight: SPACING / 2,
                      fontSize: SPACING * 1.6,
                    }}>
                    $
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: SPACING * 1.6,
                    }}>
                    {product.price}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    router.push(`${product.id}/details`);
                  }}
                  style={{
                    backgroundColor: colors.primary,
                    padding: SPACING / 2,
                    borderRadius: SPACING,
                  }}>
                  <Ionicons
                    name="add"
                    size={SPACING * 2}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Grid;
