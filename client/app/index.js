import { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import SPACING from "./config/SPACING";
import SearchField from "./components/SearchField";
import Categories from "./components/Categories";
import colors from "./config/colors";
import Grid from "./components/Grid";
import CoffeeDetails from "./details/[id]";
import allProducts from "./config/coffees";
import * as Animatable from "react-native-animatable";

const logo = require("../assets/logo.png");

const HomeScreen = () => {
  const [products, setProducts] = useState(allProducts);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [input, setInput] = useState("");
  const [headerVisible, setHeaderVisible] = useState(true);
  const [previousOffset, setPreviousOffset] = useState(0);
  const [showCoffeDetails, setShowCoffeeDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleLogoPress = () => {
    setActiveCategoryId(null);
    setInput("");
  };

  const handleShowCoffeDetails = (productId) => {
    setShowCoffeeDetails((prevState) => !prevState);
    setSelectedProduct(productId);
  };

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

  return (
    <>
      <View style={styles.layout}>
        <Animatable.View
          style={[styles.header]}
          animation={headerVisible ? "fadeInDown" : "fadeOutUp"}
          duration={500}
          useNativeDriver>
          <TouchableOpacity onPress={handleLogoPress}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>
          </TouchableOpacity>
          <SearchField
            onChange={(text) => setInput(text)}
            activeCategoryId={activeCategoryId}
            setActiveCategoryId={setActiveCategoryId}
            input={input}
          />
          <Categories
            activeCategoryId={activeCategoryId}
            onChange={(id) => {
              setActiveCategoryId(id);
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
              Math.abs(currentOffset - previousOffset) > 250;
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
          <Grid
            products={products}
            activeCategoryId={activeCategoryId}
            onCoffeDetails={handleShowCoffeDetails}
          />
        </ScrollView>

        <SafeAreaView style={styles.disclaimerContainer}>
          <View style={styles.disclaimerTextContainer}>
            <Text style={styles.disclaimerText}>
              Las imágenes son a modo ilustrativo.
            </Text>
          </View>
        </SafeAreaView>
      </View>
      {isLargeScreen && showCoffeDetails && (
        <CoffeeDetails
          productId={selectedProduct}
          onShowDetails={handleShowCoffeDetails}
        />
      )}
    </>
  );
};

const { width } = Dimensions.get("window");
const isLargeScreen = width >= 768;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.dark,
    ...(isLargeScreen && {
      width: "100%",
    }),
  },
  header: {
    paddingTop: SPACING * 1.5,
    paddingHorizontal: SPACING,
    position: "absolute",
    backgroundColor: colors.dark,
    zIndex: 10,
    alignSelf: "center",
    width: "100%",
    ...(isLargeScreen && {
      top: 0,
      left: 0,
      height: "100vh",
      width: 250,
      display: "flex",
      position: "fixed",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }),
  },
  logoContainer: {
    width: "100%",
    marginTop: SPACING * 3,
    marginVertical: SPACING,
    paddingBottom: SPACING,
    height: SPACING * 14,
    alignItems: "center",
    justifyContent: "center",
    ...(isLargeScreen && {
      marginVertical: 0,
      width: 270,
      marginTop: 0,
    }),
  },
  logo: {
    width: "70%",
    height: "80%",
    ...(isLargeScreen && { height: "70%", width: 220 }),
  },
  gridContainer: {
    paddingHorizontal: SPACING,
    ...(isLargeScreen && {
      marginLeft: 250,
    }),
  },
  disclaimerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.dark,
    paddingBottom: SPACING / 2,
    ...(isLargeScreen && { paddingBottom: SPACING * 2}),
  },
  disclaimerTextContainer: {
    justifyContent: "center",
    marginTop: SPACING,
    ...(isLargeScreen && { marginTop: 0 }),
  },
  disclaimerText: {
    color: colors["dark-light"],
  },
});

export default HomeScreen;
