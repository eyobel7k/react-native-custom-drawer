import "react-native-gesture-handler";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppStack />
        {/* <AuthStack /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});