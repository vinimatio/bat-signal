import { Image, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import logo from "../../assets/images/bat-signal.png";
import { AppButton } from "@/components/ui/Button";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <AppButton
        title="ENVIAR BAT SINAL"
        onPress={() => router.push("/form")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  logo: {
    height: 200,
    width: "70%",
    resizeMode: "contain",
  },
});
