import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
  <SafeAreaProvider>
    <Stack screenOptions={{
     headerLeft: () => <Ionicons name="arrow-back" size={24} color="black" />,
    }} >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      <Stack.Screen name="verify-email" options={{ headerShown: false }} />

    </Stack>
  </SafeAreaProvider>
  );
}
