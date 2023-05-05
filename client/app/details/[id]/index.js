import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import back from "../../../assets/icons/back.png";
import close from "../../../assets/icons/close.png";
import colors from "../../config/colors";
import SPACING from "../../config/SPACING";
import { BlurView } from "expo-blur";
import { useRouter, useSearchParams } from "expo-router";
import allProducts from "../../config/coffees";
import { Image } from "react-native";

const { height, width } = Dimensions.get("window");

const CoffeeDetails = ({ productId, onShowDetails }) => {
  const router = useRouter();
  const { id } = useSearchParams();
  const finalId = productId || id;
  const product = allProducts[finalId - 1];

  const sizes = ["S", "M", "L"];

  return (
    <View style={styles.layout}>
      <ScrollView contentContainerStyle={styles.container}>
        <SafeAreaView style={styles.subContainer}>
          <SafeAreaView style={styles.picContainer}>
            <ImageBackground
              source={product.image}
              style={styles.imageBackground}
              imageStyle={styles.imageBackgroundStyle}>
              {!isMediumScreen && (
                <>
                  <View style={styles.backBtnContainer}>
                    <TouchableOpacity
                      onPress={() => router.push("/")}
                      style={styles.backBtnTouchable}>
                      <Image source={back} style={styles.backBtnImage} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.blurViewContainer}>
                    <BlurView
                      intensity={80}
                      tint="dark"
                      style={styles.blurView}>
                      <View>
                        <Text style={styles.nameText}>{product.name}</Text>
                        {product.shortDescription && (
                          <Text style={styles.shortDescriptionText}>
                            {product.shortDescription}
                          </Text>
                        )}
                      </View>
                    </BlurView>
                  </View>
                </>
              )}
            </ImageBackground>
          </SafeAreaView>
          <View style={styles.descriptionContainer}>
            {isMediumScreen && (
              <View>
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.closeBtnContainer}>
                  <TouchableOpacity
                    onPress={() => onShowDetails(null)}
                    style={styles.closeBtnTouchable}>
                    <Image source={close} style={styles.closeBtnImage} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text style={styles.subtitle}>Descripción</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            {product.size && (
              <View style={styles.sizeContainer}>
                <Text style={styles.subtitle}>Tamaño</Text>
                <View style={styles.sizeOptions}>
                  {sizes.map((size, index) => (
                    <View
                      key={index}
                      style={[
                        styles.sizeOptionContainer,
                        product.size == size && styles.sizeOptionSelected,
                      ]}>
                      <Text
                        style={[
                          styles.sizeOptionText,
                          product.size === size &&
                            styles.sizeOptionSelectedText,
                        ]}>
                        {size}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
            {isMediumScreen && (
              <SafeAreaView style={styles.bottomContainer}>
                <View style={styles.imagesNoteContainer}>
                  <Text style={styles.imagesNoteText}>
                    Las imágenes son a modo ilustrativo.
                  </Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>Precio</Text>
                  <View style={styles.priceAmountContainer}>
                    <Text style={styles.priceDollarText}>$</Text>
                    <Text style={styles.priceAmountText}>{product.price}</Text>
                  </View>
                </View>
              </SafeAreaView>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
      {!isMediumScreen && (
        <SafeAreaView style={styles.bottomContainer}>
          <View style={styles.imagesNoteContainer}>
            <Text style={styles.imagesNoteText}>
              Las imágenes son a modo ilustrativo.
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Precio</Text>
            <View style={styles.priceAmountContainer}>
              <Text style={styles.priceDollarText}>$</Text>
              <Text style={styles.priceAmountText}>{product.price}</Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

const isMediumScreen = width >= 768;
const isLargeScreen = width >= 992;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.dark,
    width: "100%",
    height: "100%",
    ...(isMediumScreen && {
      flexDirection: "row",
      flex: 0,
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.5)",
    }),
  },
  container: {
    backgroundColor: colors.dark,
    ...(isMediumScreen && {
      flexDirection: "row",
      backgroundColor: null,
      height: "33vw",
      width: "70%",
      alignSelf: "center",
      transform: [{ translateY: "50%" }],
    }),
    ...(isLargeScreen && {
      height: "26vw",
      width: "55%",
    }),
  },
  subContainer: {
    ...(isMediumScreen && {
      backgroundColor: colors.dark,
      flexDirection: "row",
      height: "100%",
      width: "100%",
      alignItems: "center",
      borderRadius: SPACING * 3,
    }),
  },
  picContainer: {
    ...(isMediumScreen && {
      height: "100%",
      width: "45%",
    }),
  },
  imageBackground: {
    height: height / 2 + SPACING * 2,
    width: "100%",
    justifyContent: "space-between",
    ...(isMediumScreen && {
      height: "100%",
      width: "100%",
    }),
  },
  imageBackgroundStyle: {
    borderRadius: SPACING * 3,
  },
  backBtnContainer: {
    flexDirection: "row",
    padding: SPACING * 2,
  },
  backBtnTouchable: {
    backgroundColor: colors.dark,
    padding: SPACING,
    borderRadius: SPACING * 1.5,
    height: SPACING * 4,
    width: SPACING * 4,
  },
  backBtnImage: {
    height: "100%",
    width: "100%",
  },
  blurViewContainer: {
    borderRadius: SPACING * 3,
    overflow: "hidden",
  },
  blurView: {
    padding: SPACING * 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: SPACING * 2,
    color: colors.white,
    fontWeight: "600",
  },
  shortDescriptionText: {
    fontSize: SPACING * 1.5,
    color: colors["white-smoke"],
    fontWeight: "500",
    marginTop: SPACING,
  },
  descriptionContainer: {
    padding: SPACING,
    marginTop: SPACING,
    ...(isMediumScreen && {
      paddingHorizontal: "3%",
      marginTop: 0,
      height: "100%",
      width: "55%",
    }),
  },
  title: {
    ...(isMediumScreen && {
      color: colors.white,
      fontSize: "2.5vw",
      marginVertical: "2%",
    }),
    ...(isLargeScreen && {
      fontSize: "2vw",
      marginVertical: "5%",
    }),
  },
  closeBtnContainer: {
    ...(isMediumScreen && {
      position: "absolute",
      top: "6%",
      right: 0,
    }),
  },
  closeBtnTouchable: {
    ...(isMediumScreen && {
      height: "1.8vw",
      width: "1.8vw",
    }),
  },
  closeBtnImage: {
    ...(isMediumScreen && {
      height: "100%",
      width: "100%",
    }),
  },
  subtitle: {
    color: colors["white-smoke"],
    fontSize: SPACING * 1.7,
    marginBottom: SPACING,
    ...(isMediumScreen && {
      marginBottom: SPACING / 2,
      fontSize: "1.75vw",
    }),
    ...(isLargeScreen && {
      fontSize: "1.3vw",
    }),
  },
  descriptionText: {
    color: colors.white,
    ...(isMediumScreen && {
      fontSize: "1.4vw",
    }),
    ...(isLargeScreen && {
      fontSize: "1.1vw",
    }),
  },
  sizeContainer: {
    marginVertical: SPACING * 2,
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...(isMediumScreen && {
      justifyContent: "space-around",
    }),
  },
  sizeOptionContainer: {
    borderWidth: 2,
    paddingVertical: SPACING / 2,
    borderRadius: SPACING,
    backgroundColor: colors["dark-light"],
    width: width / 3 - SPACING * 2,
    alignItems: "center",
    ...(isMediumScreen && {
      paddingVertical: SPACING / 3,
      height: SPACING * 2.5,
      maxWidth: "25%",
    }),
  },
  sizeOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.dark,
  },
  sizeOptionText: {
    color: colors["white-smoke"],
    fontSize: SPACING * 1.9,
    ...(isMediumScreen && {
      fontSize: SPACING * 1.3,
    }),
  },
  sizeOptionSelectedText: {
    color: colors.primary,
  },
  imagesNoteContainer: {
    justifyContent: "center",
    marginLeft: SPACING,
    ...(isMediumScreen && {
      marginLeft: "2%",
    }),
    ...(isLargeScreen && {
      marginLeft: "0.5%",
    }),
  },
  imagesNoteText: {
    color: colors["dark-light"],
    ...(isMediumScreen && {
      fontSize: "1.2vw",
    }),
    ...(isLargeScreen && {
      fontSize: "1vw",
    }),
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.dark,
    ...(isMediumScreen && {
      position: "absolute",
      bottom: SPACING / 5,
      alignSelf: "center",
      width: "90%",
    }),
    ...(isLargeScreen && {
      bottom: SPACING / 2,
    }),
  },
  priceContainer: {
    padding: SPACING,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: SPACING * 3,
    ...(isMediumScreen && {
      padding: "3%",
      paddingRight: "3%"
    }),
  },
  priceText: {
    color: colors.white,
    fontSize: SPACING * 1.5,
    ...(isMediumScreen && {
      fontSize: "1.5vw",
    }),
    ...(isLargeScreen && {
      fontSize: "1.2vw",
    }),
  },
  priceAmountContainer: {
    flexDirection: "row",
  },
  priceDollarText: {
    color: colors.primary,
    fontSize: SPACING * 2,
    ...(isMediumScreen && {
      fontSize: "2vw",
    }),
    ...(isLargeScreen && {
      fontSize: "1.6vw",
    }),
  },
  priceAmountText: {
    color: colors.white,
    fontSize: SPACING * 2,
    marginLeft: SPACING / 2,
    ...(isMediumScreen && {
      fontSize: "2vw",
    }),
    ...(isLargeScreen && {
      fontSize: "1.6vw",
    }),
  },
});

export default CoffeeDetails;
