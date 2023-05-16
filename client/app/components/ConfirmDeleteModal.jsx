import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import exclamation from "../../assets/icons/exclamation.png";
import SPACING from "../config/SPACING";
import check from "../../assets/icons/check.png";
import close from "../../assets/icons/close.png";
import { usePathname } from "expo-router";
import { API_URL } from "@env";
import axios from "axios";

const ConfirmDeleteModal = ({ toggleModal, item, onDelete }) => {
  const pathname = usePathname();

  const handleDelete = async () => {
    if (pathname.includes("products")) {
      axios.delete(`${API_URL}/products/delete/${item.id}`, {
        withCredentials: true,
      });
      onDelete();
      toggleModal();
    } else if (pathname.includes("categories")) {
      axios.delete(`${API_URL}/categories/delete/${item.id}`, {
        withCredentials: true,
      });
      onDelete();
      toggleModal();
    }
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={exclamation} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Estás a punto de eliminar: <br />
            <Text style={styles.itemName}>"{item.name.toUpperCase()}"</Text>
          </Text>
          <Text style={styles.question}>¿Deseás confirmar la operación?</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Image source={close} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Image source={check} style={{ height: "85%", width: "85%" }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");

const isMediumScreen = width >= 768;
const isLargeScreen = width >= 992;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.dark,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING * 2,
    borderRadius: SPACING * 3,
    gap: SPACING * 1.8,
    ...(isMediumScreen && {
      width: "45%",
      gap: SPACING * 2.5,
    }),
    ...(isLargeScreen && {
      width: "25%",
    }),
  },
  iconContainer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    height: SPACING * 3.25,
    width: SPACING * 3.25,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    gap: SPACING * 0.7,
    alignItems: "center",
    justifyContent: "center",
    ...(isMediumScreen && {
      gap: SPACING * 1.5,
    }),
    ...(isLargeScreen && {
      gap: SPACING * 2,
    }),
  },
  text: {
    textAlign: "center",
    color: colors.white,
    fontSize: SPACING * 1.7,
  },
  itemName: {
    fontWeight: SPACING * 60,
  },
  question: {
    color: colors.light,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: colors.primary,
    padding: SPACING / 2,
    borderRadius: SPACING,
    width: SPACING * 3.25,
    height: SPACING * 3.25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConfirmDeleteModal;
