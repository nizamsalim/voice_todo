import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaProvider
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Theme, ThemeProvider } from "@react-navigation/native";
import AppContextProvider from "@/components/AppContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <Stack initialRouteName="index" />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView takes up the full screen
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    // padding: 20,
    // backgroundColor: "#fff", // Optional background color for visibility
  },
});
