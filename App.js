import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeStack from "./src/navigations/home/HomeStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack />
        <StatusBar style="inverted" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
