import { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SPACING from "../config/SPACING";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const logo = require("../../assets/logo.png");

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <SafeAreaView style={{ marginHorizontal: SPACING }}>
      <ScrollView>
        <View
          style={{
            padding: SPACING,
          }}></View>
          <TouchableOpacity onPress={()=>setActiveCategoryId(null)}>
        <View
          style={{
            width: "100%",
            marginTop: SPACING,
            marginVertical: SPACING,
            height: SPACING * 14,
            alignItems: "center",
          }}>
          <Image source={logo} style={{ width: "75%", height: "80%" }} />
        </View>
        </TouchableOpacity>
        <SearchField />
        <Categories onChange={(id) => setActiveCategoryId(id)} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
          {coffees
            .filter((coffee) => {
              if (activeCategoryId === null) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map((coffee) => (
              <View
                key={coffee.id}
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
                    style={{
                      height: 150,
                      width: "100%",
                    }}>
                    <Image
                      source={coffee.image}
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
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.secondary,
                      fontSize: SPACING * 1.2,
                    }}>
                    {coffee.description}
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
                        {coffee.price}
                      </Text>
                    </View>
                    <TouchableOpacity
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
