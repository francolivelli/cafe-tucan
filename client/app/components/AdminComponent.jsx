import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import logo from "../../assets/logo_small.png";
import { useRouter } from "expo-router";
import back from "../../assets/icons/back.png";
import exit from "../../assets/icons/exit.png";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../states/userSlice";

const AdminComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutAsync());

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlurView style={styles.container} tint="dark" intensity={95}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.push("/")}>
          <Image source={back} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Administrar</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleLogout}>
          <Image source={exit} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("admin/products")}>
          <Text style={styles.buttonText}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("admin/categories")}>
          <Text style={styles.buttonText}>Categorías</Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

const { width } = Dimensions.get("window");

const isMediumScreen = width >= 768;
const isLargeScreen = width >= 992;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    width: "85%",
    borderRadius: SPACING * 2,
    padding: SPACING * 2,
    ...(isMediumScreen && {
      width: "50%",
    }),
    ...(isLargeScreen && {
      width: "30%",
    }),
  },
  logoContainer: {
    height: SPACING * 6,
    width: SPACING * 6,
    borderRadius: "50%",
    zIndex: 1,
    position: "absolute",
    top: -SPACING * 3,
    backgroundColor: colors.dark,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButton: {
    padding: SPACING / 2,
    bottom: SPACING * 2,
    height: SPACING * 2.9,
    width: SPACING * 2.9,
    borderRadius: SPACING,
    backgroundColor: colors.primary,
    marginHorizontal: SPACING,
  },
  title: {
    fontSize: SPACING * 2,
    fontWeight: "600",
    marginTop: SPACING * 2.75,
    marginBottom: SPACING * 2.5,
    color: colors.white,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    gap: SPACING * 1.75,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: SPACING,
    padding: SPACING,
    marginHorizontal: SPACING,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: SPACING * 1.5,
    color: colors.white,
  },
});

export default AdminComponent;
