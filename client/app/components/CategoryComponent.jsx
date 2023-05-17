import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import logo from "../../assets/logo_small.png";
import back from "../../assets/icons/back.png";
import save from "../../assets/icons/save.png";
import SPACING from "../config/SPACING";
import { usePathname, useRouter } from "expo-router";
import axios from "axios";
import ConfirmSavingModal from "./ConfirmSavingModal";

const CategoryComponent = ({ id }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryResponse = await axios.get(`https://cafe-tucan-server.vercel.app/api/categories/${id}`);
      setName(categoryResponse.data.name);
    };

    if (id) fetchCategory(id);
  }, []);

  const handleSubmit = async () => {
    try {
      if (pathname.includes("create")) {
        const response = await axios.post(
          `https://cafe-tucan-server.vercel.app/api/categories/create`,
          { name },
          { withCredentials: true }
        );
        if (response) {
          setName("")
          setModalVisible(true);
        }
      } else {
        const response = await axios.put(
          `https://cafe-tucan-server.vercel.app/api/categories/edit/${id}`,
          {
            name,
          },
          { withCredentials: true }
        );
        if (response) {
          setModalVisible(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.layout}>
        <BlurView style={styles.container} tint="dark" intensity={95}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.header}>
            <TouchableOpacity
              style={[styles.button, styles.headerButton]}
              onPress={() => router.push("/admin/categories")}>
              <Image source={back} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{name || "Nueva categoría"}</Text>
            <TouchableOpacity
              style={[styles.button, styles.headerButton]}
              onPress={handleSubmit}>
              <Image source={save} style={styles.icon} />
            </TouchableOpacity>
          </View>
            <View style={styles.formContainer}>
              <View style={styles.formOption}>
                <Text style={styles.label}>Nombre (*)</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>
         
        </BlurView>
      </View>
      {modalVisible && <ConfirmSavingModal toggleModal={toggleModal} />}
    </>
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
      width: "27%",
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
    bottom: SPACING * 2,
    height: SPACING * 2.9,
    width: SPACING * 2.9,
  },
  title: {
    fontSize: SPACING * 2,
    fontWeight: "600",
    marginTop: SPACING * 2.75,
    marginBottom: SPACING * 2.5,
    color: colors.white,
  },
  button: {
    padding: SPACING / 2,
    height: SPACING * 2.7,
    width: SPACING * 2.7,
    borderRadius: SPACING,
    backgroundColor: colors.primary,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: "100%",
    gap: SPACING * 1.25,
    marginBottom: SPACING,
  },
  formOption: {
    width: "80%",
    height: "fit-content",
    gap: SPACING / 5,
    alignSelf: "center"
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
});

export default CategoryComponent;
