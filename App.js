import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeStack from "./src/navigations/home/HomeStack";

export default function App() {
  useEffect(() => {
    checkFastFromStorage();
  }, []);

  const checkFastFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@is_fasting");
      if (value == null) {
        await AsyncStorage.setItem("@is_fasting", "false");
      }
    } catch (error) {}
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStack />
        <StatusBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
