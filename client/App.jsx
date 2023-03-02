import { StyleSheet, Text, View } from "react-native";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({});
