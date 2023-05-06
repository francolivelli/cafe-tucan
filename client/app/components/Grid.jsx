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
import add from "../../assets/icons/add.png";
import colors from "../config/colors";
import { useRouter } from "expo-router";

const Grid = ({ products, activeCategoryId, onCoffeDetails }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {products
          .filter((product) => {
            if (activeCategoryId === null) {
              return true;
            }
            return product.categoryId === activeCategoryId;
          })
          .map((product) => (
            <View key={product.id} style={styles.product}>
              <BlurView
                tint="dark"
                intensity={95}
                style={styles.productContent}>
                <TouchableOpacity
                  onPress={
                    !isMediumScreen
                      ? () => {
                          router.push(`details/${product.id}`);
                        }
                      : () => onCoffeDetails(product.id)
                  }
                  style={styles.productImage}>
                  <Image source={product.image} style={styles.productImage} />
                </TouchableOpacity>
                <Text numberOfLines={1} style={styles.productTitle}>
                  {product.name}
                </Text>
                <Text numberOfLines={2} style={styles.productDescription}>
                  {product.shortDescription
                    ? `${product.shortDescription}\n${product.description}`
                    : product.description}
                </Text>
                <View style={styles.productFooter}>
                  <View style={styles.productPriceWrapper}>
                    <Text style={styles.productCurrency}>$</Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={
                      !isMediumScreen
                        ? () => {
                            router.push(`details/${product.id}`);
                          }
                        : () => onCoffeDetails(product.id)
                    }
                    style={styles.addButton}>
                    <Image source={add} style={styles.addButtonIcon} />
                  </TouchableOpacity>
                </View>
              </BlurView>
            </View>
          ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const isMediumScreen = width >= 768;
const isLargeScreen = width >= 992;

const styles = StyleSheet.create({
  container: {
    marginTop: 290,
    marginBottom: SPACING * 2,
    ...(isMediumScreen && {
      justifyContent: "center",
      marginTop: SPACING * 3,
      alignItems: "center",
    }),
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    ...(isMediumScreen && {
      justifyContent: "flex-start",
      marginLeft: "12%",
      gap: "1vw",
      width: "80%",
    }),
    ...(isLargeScreen && {
      justifyContent: "flex-start",
      gap: "2vw",
      width: "90%",
    }),
  },
  product: {
    width: width / 2 - SPACING * 2,
    marginBottom: SPACING,
    borderRadius: SPACING * 2,
    overflow: "hidden",
    ...(isMediumScreen && {
      width: "40%",
      marginBottom: 0,
      marginHorizontal: SPACING,
      marginVertical: SPACING
    }),
    ...(isLargeScreen && {
      width: "18%",
    }),
  },
  productContent: {
    padding: SPACING,
  },
  productImage: {
    height: 150,
    width: "100%",
    borderRadius: SPACING * 2,
  },
  productTitle: {
    color: colors.white,
    fontWeight: "600",
    fontSize: SPACING * 1.7,
    marginTop: SPACING,
    marginBottom: SPACING / 2,
  },
  productDescription: {
    color: colors.secondary,
    fontSize: SPACING * 1.2,
  },
  productFooter: {
    marginVertical: SPACING / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPriceWrapper: {
    flexDirection: "row",
  },
  productCurrency: {
    color: colors.primary,
    marginRight: SPACING / 2,
    fontSize: SPACING * 1.6,
  },
  productPrice: {
    color: colors.white,
    fontSize: SPACING * 1.6,
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: SPACING / 2,
    borderRadius: SPACING,
    width: SPACING * 2.7,
    height: SPACING * 2.7,
  },
  addButtonIcon: {
    width: "100%",
    height: "100%",
  },
});

export default Grid;
