import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import logo from "../../assets/logo_small.png";
import SPACING from "../config/SPACING";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { loginAsync } from "../states/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(loginAsync({ email, password }));

      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.layout}>
      <BlurView style={styles.container} tint="dark" intensity={95}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formOption}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.formOption}>
              <Text style={styles.label}>Contraseña</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit}>
              <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BlurView>
    </View>
  );
};

const { width } = Dimensions.get("window");

const isMediumScreen = width >= 768;
const isLargeScreen = width >= 992;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.dark,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    maxHeight: "85%",
    width: "85%",
    borderRadius: SPACING * 2,
    padding: SPACING * 2,
    marginTop: SPACING * 2.5,
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
    justifyContent: "center",
  },
  scrollContainer: {
    width: "100%",
    padding: SPACING/2
  },
  formContainer: {
    width: "100%",
    gap: SPACING * 1.25,
    marginTop: SPACING * 3,
    marginBottom: SPACING,
  },
  formOption: {
    width: "100%",
    height: "fit-content",
    gap: SPACING / 5,
  },
  label: {
    color: colors.light,
    zIndex: 1,
  },
  input: {
    width: "100%",
    height: SPACING * 3.5,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: SPACING,
    padding: SPACING,
    color: colors.white,
    fontSize: SPACING * 1.6,
    backgroundColor: "transparent",
  },
  btnPrimary: {
    marginTop: SPACING,
    backgroundColor: colors.primary,
    borderRadius: SPACING,
    padding: SPACING,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    fontSize: SPACING * 1.5,
    color: colors.white,
  },
});

export default Login;
