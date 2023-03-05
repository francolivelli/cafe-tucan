import { StyleSheet, Text, View } from "react-native";
import MainStack from "./app/navigation/MainStack";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MainStack/>
    </View>
  );
}

const styles = StyleSheet.create({});
