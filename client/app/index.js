import { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
} from "react-native";
import SPACING from "./config/SPACING";
import SearchField from "./components/SearchField";
import Categories from "./components/Categories";
import colors from "./config/colors";
import Grid from "./components/Grid";
import CoffeeDetails from "./details/[id]";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategoryId } from "./states/categorySlice";
import axios from "axios";
import { API_URL } from "@env";
import logo from "../assets/logo.png";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [input, setInput] = useState("");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [previousOffset, setPreviousOffset] = useState(0);
  const [showCoffeDetails, setShowCoffeeDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [secret, setSecret] = useState(null);

  const dispatch = useDispatch();

  const activeCategoryId = useSelector(
    (state) => state.category.activeCategoryId
  );

  const user = useSelector((state) => state.user);

  const router = useRouter();

  const scrollViewRef = useRef(null);

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const getProducts = (t) => {
    const filteredProducts = allProducts.filter((product) =>
      removeAccents(product.name).toLowerCase().includes(t.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await axios.get(`${API_URL}/products`);

      setProducts(productsResponse.data);
      setAllProducts(productsResponse.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeCategoryId !== null) {
      const filteredProducts = allProducts.filter(
        (product) => product.categoryId === activeCategoryId
      );
      setProducts(filteredProducts);
    } else {
      input.length === 0 ? setProducts(allProducts) : getProducts(input);
    }
  }, [activeCategoryId, input]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [activeCategoryId]);

  useEffect(() => {
    user !== null ? setSecret("/admin") : setSecret("/login");
  }, [user]);

  const handleLogoPress = () => {
    handleCategoryChange(null);
    setInput("");
  };

  const handleCategoryChange = (categoryId) => {
    dispatch(setActiveCategoryId(categoryId));
  };

  const handleShowCoffeDetails = (productId) => {
    setShowCoffeeDetails((prevState) => !prevState);
    setSelectedProduct(productId);
  };

  return (
    <>
      <View style={styles.layout}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
              router.push(`/admin`);
            } else {
              router.push("/login");
            }
          }}
        />
        <Animatable.View
          style={[styles.header]}
          animation={
            !isMediumScreen
              ? headerVisible
                ? "fadeInDown"
                : "fadeOutUp"
              : null
          }
          duration={500}
          useNativeDriver>
          <TouchableOpacity onPress={handleLogoPress}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
          </TouchableOpacity>
          <SearchField onChange={(text) => setInput(text)} input={input} />
          <Categories
            activeCategoryId={activeCategoryId}
            onChange={(id) => {
              handleCategoryChange(id);
              setInput("");
            }}
          />
        </Animatable.View>
        <ScrollView
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={(event) => {
            const currentOffset = event.nativeEvent.contentOffset.y;
            const direction = currentOffset > previousOffset ? "down" : "up";
            const isOverDistanceDown =
              Math.abs(currentOffset - previousOffset) > 50;
            const isOverDistanceUp =
              Math.abs(currentOffset - previousOffset) > 200;
            const isGridTall = event.nativeEvent.contentSize.height > 1000;
            if (isOverDistanceDown && direction === "down" && isGridTall) {
              setHeaderVisible(false);
              setPreviousOffset(currentOffset);
            } else if (isOverDistanceUp && direction === "up") {
              setHeaderVisible(true);
              setPreviousOffset(currentOffset);
            }
          }}
          scrollEventThrottle={16}>
          <Grid products={products} onCoffeDetails={handleShowCoffeDetails} />
        </ScrollView>
      </View>
      {isMediumScreen && showCoffeDetails && (
        <CoffeeDetails
          productId={selectedProduct}
          onShowDetails={handleShowCoffeDetails}
        />
      )}
    </>
  );
};

const { width } = Dimensions.get("window");
const isMediumScreen = width >= 768;
const isWeb = Platform.OS === "web";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.dark,
    ...(isMediumScreen && {
      width: "100%",
    }),
  },
  header: {
    paddingHorizontal: SPACING,
    position: "absolute",
    backgroundColor: colors.dark,
    zIndex: 10,
    alignSelf: "center",
    width: "100%",
    ...(isMediumScreen && {
      top: 0,
      left: 0,
      height: "100vh",
      width: 300,
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    ...(!isWeb &&
      !isMediumScreen && {
        paddingTop: SPACING * 3,
      }),
  },
  logoContainer: {
    width: "100%",
    marginVertical: SPACING,
    paddingBottom: SPACING,
    height: SPACING * 14,
    alignItems: "center",
    justifyContent: "center",
    ...(isMediumScreen && {
      marginVertical: 0,
      width: 270,
      marginTop: 0,
    }),
  },
  logo: {
    width: "70%",
    height: "80%",
    ...(isMediumScreen && { height: "70%", width: 220 }),
  },
  gridContainer: {
    paddingHorizontal: SPACING,
    ...(isMediumScreen && {
      marginLeft: 250,
    }),
  },
  button: {
    height: SPACING * 3,
    width: SPACING * 3,
    backgroundColor: colors.dark,
    position: "absolute",
    zIndex: 11,
  },
});

export default HomeScreen;
