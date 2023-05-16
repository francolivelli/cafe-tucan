import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import logo from "../../assets/logo_small.png";
import { usePathname, useRouter } from "expo-router";
import pencil from "../../assets/icons/pencil.png";
import trash from "../../assets/icons/trash.png";
import add from "../../assets/icons/add.png";
import back from "../../assets/icons/back.png";
import { ScrollView } from "react-native-gesture-handler";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { API_URL } from "@env";
import axios from "axios";

const List = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [elements, setElements] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    if (pathname.includes("products")) {
      const fetchProducts = async () => {
        const productsResponse = await axios.get(`${API_URL}/products`);

        setTitle("Productos");
        setElements(productsResponse.data);
      };
      fetchProducts();
    } else if (pathname.includes("categories")) {
      const fetchProducts = async () => {
        const categoriesResponse = await axios.get(`${API_URL}/categories`);

        setTitle("Categorías");
        setElements(categoriesResponse.data);
      };
      fetchProducts();
    }
  }, [pathname]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <BlurView style={styles.container} tint="dark" intensity={95}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
          <TouchableOpacity
            style={[styles.button, styles.headerButton]}
            onPress={() => router.push("/admin")}>
            <Image source={back} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={[styles.button, styles.headerButton]}
            onPress={() => {
              if (pathname.includes("products")) {
                router.push("admin/products/create");
              } else if (pathname.includes("categories")) {
                router.push("admin/categories/create");
              }
            }}>
            <Image source={add} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}>
          {elements.map((item, index) => (
            <View key={index}>
              <View style={styles.itemOptions}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.bottonsContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      if (pathname.includes("products")) {
                        router.push(`admin/products/${item.id}`);
                      } else if (pathname.includes("categories")) {
                        router.push(`admin/categories/${item.id}`);
                      }
                    }}>
                    <Image source={pencil} style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      toggleModal();
                      setCurrentItem(item);
                    }}>
                    <Image source={trash} style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          ))}
        </ScrollView>
      </BlurView>
      {modalVisible && (
        <ConfirmDeleteModal
          toggleModal={toggleModal}
          item={currentItem}
          onDelete={() =>
            setElements(elements.filter((item) => item.id !== currentItem.id))
          }
          style={styles.deleteModal}
        />
      )}
    </>
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
    maxHeight: "75%",
    width: "85%",
    borderRadius: SPACING * 2,
    padding: SPACING * 2,
    marginTop: SPACING * 2.5,
    ...(isMediumScreen && {
      width: "70%",
    }),
    ...(isLargeScreen && {
      width: "40%",
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
  listContainer: {
    width: "100%",
  },
  itemOptions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    color: colors.white,
    fontSize: SPACING * 1.8,
  },
  bottonsContainer: {
    flexDirection: "row",
    gap: SPACING / 2,
    ...(isLargeScreen && {
      marginRight: SPACING,
    }),
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
  divider: {
    borderWidth: SPACING / 10,
    borderColor: colors["dark-light"],
    marginVertical: SPACING,
  },
});

export default List;
