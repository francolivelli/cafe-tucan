import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import SPACING  from "../config/SPACING";
import colors from "../config/colors";
import close from "../../assets/icons/close.png";

const ImageModal = ({toggleModal, product}) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.modalImage} />
        <View style={styles.closeModalContainer}>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.closeModalTouchable}>
            <Image source={close} style={styles.closeModalImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderRadius: SPACING * 2,
  },
  closeModalContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    height: 28,
    width: 28,
    backgroundColor: colors.dark,
    justifyContent: "center",
    borderRadius: SPACING,
  },
  closeModalTouchable: {
    height: "80%",
    width: "80%",
    padding: 2,
    alignSelf: "center",
  },
  closeModalImage: {
    height: "100%",
    width: "100%",
  },
});

export default ImageModal;
