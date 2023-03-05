import { useEffect, useState } from "react";
import {
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
import colors from "../config/colors";
import Grid from "../components/Grid";
import allProducts from "../config/coffees";

const logo = require("../../assets/logo.png");

const HomeScreen = () => {
  const [products, setProducts] = useState(allProducts);

  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [input, setInput] = useState("");

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const getProducts = (t) => {
    const filteredProducts = allProducts.filter((product) =>
      removeAccents(product.name).toLowerCase().includes(t.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
      console.log("LOS PRODUCTOS FILTRADOS SON", filteredProducts);
    }
  };

  useEffect(() => {
    setActiveCategoryId(null);
    input.length === 0 ? setProducts(allProducts) : getProducts(input);
  }, [input]);

  return (
    <SafeAreaView style={{ marginHorizontal: SPACING }}>
      <ScrollView>
        <View
          style={{
            padding: SPACING,
          }}></View>
        <TouchableOpacity onPress={() => setActiveCategoryId(null)}>
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
        <SearchField onChange={(text) => setInput(text)} />
        <Categories onChange={(id) => {setActiveCategoryId(id), setInput("")}} />
        <Grid products={products} activeCategoryId={activeCategoryId} />
        <View
          style={{
            alignItems: "center",
            marginTop: SPACING,
          }}>
          <Text style={{ color: colors["dark-light"] }}>
            Las imágenes son a modo ilustrativo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
