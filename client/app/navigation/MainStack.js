import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
import CoffeeDetailsScreen from "../screens/CoffeeDetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: colors.dark },
};

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Coffee Details"
          component={CoffeeDetailsScreen}
          options
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
