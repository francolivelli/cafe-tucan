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
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";
import SPACING from "../../config/SPACING";
import { BlurView } from "expo-blur";
import { useSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import allProducts from "../../config/coffees";

const { height, width } = Dimensions.get("window");

const sizes = ["S", "M", "L"];

const CoffeeDetailsScreen = () => {

  const router = useRouter()
  const {id} = useSearchParams()
  const product = allProducts[id-1]

  return (
      <>
        <ScrollView style={{ backgroundColor: colors.dark }}>
          <SafeAreaView>
            <ImageBackground
              source={product.image}
              style={{
                height: height / 2 + SPACING * 2,
                justifyContent: "space-between",
              }}
              imageStyle={{
                borderRadius: SPACING * 3,
              }}>
              <View
                style={{
                  flexDirection: "row",
                  padding: SPACING * 2,
                }}>
    
                  <TouchableOpacity
                    onPress={()=>router.push("/")}
                    style={{
                      backgroundColor: colors.dark,
                      padding: SPACING,
                      borderRadius: SPACING * 1.5,
                    }}>
                    <Ionicons
                    name="arrow-back"
                    color={colors.light}
                    size={SPACING * 2}
                  />
                  </TouchableOpacity>
                
              </View>
              <View
                style={{
                  borderRadius: SPACING * 3,
                  overflow: "hidden",
                }}>
                <BlurView
                  intensity={80}
                  tint="dark"
                  style={{
                    padding: SPACING * 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: SPACING * 2,
                        color: colors.white,
                        fontWeight: "600",
                      }}>
                      {product.name}
                    </Text>
                    {product.shortDescription && (
                      <Text
                        style={{
                          fontSize: SPACING * 1.5,
                          color: colors["white-smoke"],
                          fontWeight: "500",
                          marginTop: SPACING,
                        }}>
                        {product.shortDescription}
                      </Text>
                    )}
                  </View>
                </BlurView>
              </View>
            </ImageBackground>
            <View
              style={{
                padding: SPACING,
                marginTop: SPACING,
              }}>
              <Text
                style={{
                  color: colors["white-smoke"],
                  fontSize: SPACING * 1.7,
                  marginBottom: SPACING,
                }}>
                Descripción
              </Text>
              <Text style={{ color: colors.white }}>{product.description}</Text>
              {product.size && (
                <View
                  style={{
                    marginVertical: SPACING * 2,
                  }}>
                  <Text
                    style={{
                      color: colors["white-smoke"],
                      fontSize: SPACING * 1.7,
                      marginBottom: SPACING,
                    }}>
                    Tamaño
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}>
                    {sizes.map((size, index) => (
                      <View
                        key={index}
                        style={[
                          {
                            borderWidth: 2,
                            paddingVertical: SPACING / 2,
                            borderRadius: SPACING,
                            backgroundColor: colors["dark-light"],
                            width: width / 3 - SPACING * 2,
                            alignItems: "center",
                          },
                          product.size == size && {
                            borderColor: colors.primary,
                            backgroundColor: colors.dark,
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              color: colors["white-smoke"],
                              fontSize: SPACING * 1.9,
                            },
                            product.size === size && {
                              color: colors.primary,
                            },
                          ]}>
                          {size}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </SafeAreaView>
        </ScrollView>
        <SafeAreaView 
          style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: colors.dark }}>
          <View
            style={{
              justifyContent: "center",
              marginLeft: SPACING,
            }}>
            <Text style={{ color: colors["dark-light"] }}>
              Las imágenes son a modo ilustrativo.
            </Text>
          </View>
          <View
            style={{
              padding: SPACING,
              alignItems: "center",
              justifyContent: "center",
              paddingRight: SPACING * 3,
            }}>
            <Text style={{ color: colors.white, fontSize: SPACING * 1.5 }}>
              Precio
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: colors.primary, fontSize: SPACING * 2 }}>
                $
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: SPACING * 2,
                  marginLeft: SPACING / 2,
                }}>
                {product.price}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </>
  );
};

export default CoffeeDetailsScreen;

const styles = StyleSheet.create({});
