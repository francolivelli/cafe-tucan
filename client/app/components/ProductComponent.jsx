import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import React, { useEffect, useRef, useState } from "react";
import colors from "../config/colors";
import { BlurView } from "expo-blur";
import logo from "../../assets/logo_small.png";
import back from "../../assets/icons/back.png";
import save from "../../assets/icons/save.png";
import coffee from "../../assets/icons/coffee.png";
import SPACING from "../config/SPACING";
import { usePathname, useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import ConfirmSavingModal from "./ConfirmSavingModal";

const ProductComponent = ({ id }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const dropdownRef = useRef({});
  const sizeDropdownRef = useRef({});

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesResponse = await axios.get(`https://cafe-tucan-server.vercel.app/api/categories`);
      setCategories(categoriesResponse.data);
    };

    const fetchProduct = async (id) => {
      const productResponse = await axios.get(`https://cafe-tucan-server.vercel.app/api/products/${id}`);

      const categoryResponse = await axios.get(
        `https://cafe-tucan-server.vercel.app/api/categories/${productResponse.data.categoryId}`
      );

      setName(productResponse.data.name);
      setImage(productResponse.data.image);
      setCategoryName(categoryResponse.data.name);
      setSize(productResponse.data.size);
      setPrice(productResponse.data.price);
      setShortDescription(productResponse.data.shortDescription);
      setDescription(productResponse.data.description);
    };

    fetchCategories();
    if (id) fetchProduct(id);
  }, []);

  const handleSubmit = async () => {
    try {
      const data = {
        name,
        image,
        categoryId: categories.find(
          (category) => category.name === categoryName
        )?.id,
        size,
        price,
        shortDescription,
        description,
      };
      if (pathname.includes("create")) {
        const response = await axios.post(`https://cafe-tucan-server.vercel.app/api/products/create`, data, {
          withCredentials: true,
        });
        if (response) {
          setName("");
          setImage("");
          setSize("");
          setPrice("");
          setCategoryName("");
          setShortDescription("");
          setDescription("");
          dropdownRef.current.reset();
          sizeDropdownRef.current.reset();
          setModalVisible(true);
        }
      } else {
        const response = await axios.put(
          `https://cafe-tucan-server.vercel.app/api/products/edit/${id}`,
          data,
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
              onPress={() => router.push("/admin/products")}>
              <Image source={back} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{name || "Nuevo producto"}</Text>
            <TouchableOpacity
              style={[styles.button, styles.headerButton]}
              onPress={handleSubmit}>
              <Image source={save} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollContainer}>
            <View style={styles.formContainer}>
              <View style={styles.shortOptions}>
                <View style={styles.shortInputsContainer}>
                  <View style={styles.formOption}>
                    <Text style={styles.label}>Nombre (*)</Text>
                    <TextInput
                      style={styles.input}
                      value={name}
                      onChangeText={setName}
                    />
                  </View>
                  <View style={styles.formOption}>
                    <Text style={styles.label}>Imagen (*)</Text>
                    <TextInput
                      style={styles.input}
                      value={image}
                      onChangeText={setImage}
                    />
                  </View>
                </View>
                <View style={styles.productImageContainer}>
                  <Image source={image || coffee} style={styles.productImage} />
                </View>
              </View>
              <View style={styles.shortOptions}>
                <View style={[styles.formOption, { width: "47.5%" }]}>
                  <Text style={styles.label}>Tamaño</Text>
                  <SelectDropdown
                    ref={sizeDropdownRef}
                    buttonStyle={[styles.input, { paddingLeft: SPACING / 4 }]}
                    buttonTextStyle={{
                      color: colors.white,
                      fontSize: SPACING * 1.6,
                      textAlign: "left",
                    }}
                    dropdownStyle={{ height: "fit-content" }}
                    data={[" ", "S", "M", "L"]}
                    defaultValue={size || ""}
                    defaultButtonText=" "
                    onSelect={(size) => setSize(size)}
                  />
                </View>
                <View style={[styles.formOption, { width: "47.5%" }]}>
                  <Text style={styles.label}>Precio (*)</Text>
                  <TextInput
                    style={styles.input}
                    value={`$ ${price || ""}`}
                    onChangeText={(value) => {
                      value = value.substring(2);
                      setPrice(value);
                    }}
                  />
                </View>
              </View>
              <View style={styles.formOption}>
                <Text style={styles.label}>Categoría (*)</Text>
                <SelectDropdown
                  ref={dropdownRef}
                  buttonStyle={[styles.input, { paddingLeft: SPACING / 4 }]}
                  buttonTextStyle={{
                    color: colors.white,
                    fontSize: SPACING * 1.6,
                    textAlign: "left",
                  }}
                  dropdownStyle={{ height: "fit-content" }}
                  data={categories.map((category) => category.name)}
                  defaultValue={categoryName || ""}
                  defaultButtonText=" "
                  onSelect={(category) => setCategoryName(category)}
                />
              </View>
              <View style={styles.formOption}>
                <Text style={styles.label}>Descripción corta</Text>
                <TextInput
                  style={styles.input}
                  value={shortDescription}
                  onChangeText={setShortDescription}
                />
              </View>
              <View style={styles.formOption}>
                <Text style={styles.label}>Descripción (*)</Text>
                <TextInput
                  multiline={true}
                  style={[styles.input, styles.descriptionInput]}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
            </View>
          </ScrollView>
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
  scrollContainer: {
    width: "100%",
    padding: SPACING / 2,
  },
  formContainer: {
    width: "100%",
    gap: SPACING * 1.25,
  },
  shortOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shortInputsContainer: {
    gap: SPACING * 1.25,
    width: "45%",
  },
  productImageContainer: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    height: SPACING * 12.5,
    width: SPACING * 12.5,
    borderRadius: SPACING,
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
  descriptionInput: {
    height: SPACING * 9,
  },
});

export default ProductComponent;
