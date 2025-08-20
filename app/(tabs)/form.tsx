import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { AppButton } from "@/components/ui/Button";
import { router } from "expo-router";
import logo from "../../assets/images/bat-signal.png";
import { ThemedTextInput } from "@/components/ThemedTextInput";

export default function TabTwoScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <ThemedView style={{ gap: 10 }}>
          <ThemedTextInput
            keyboardType="default"
            autoCapitalize="words"
            style={styles.inputText}
            label="Nome"
          />
          <ThemedTextInput
            keyboardType="phone-pad"
            style={styles.inputText}
            label="Telefone"
          />
          <ThemedTextInput
            multiline
            keyboardType="default"
            style={[styles.inputText, { minHeight: 70 }]}
            label="Localização"
          />
          <ThemedTextInput
            multiline
            keyboardType="default"
            style={[styles.inputText, { minHeight: 120 }]}
            label="Observações"
          />
        </ThemedView>

        <ThemedView style={styles.buttonsContainer}>
          <AppButton title="CONFIRMAR" />
          <AppButton title="VOLTAR" onPress={() => router.push("/")} />
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingTop: 100,
    paddingHorizontal: 40,
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
    width: 60,
    resizeMode: "contain",
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    includeFontPadding: false,
    paddingVertical: 8,
  },
  buttonsContainer: {
    gap: 5,
  },
});
