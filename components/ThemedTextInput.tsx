import { StyleSheet, TextInput, type TextInputProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  label?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  label,
  ...rest
}: ThemedTextInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <ThemedView>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <TextInput
        style={[{ color }, { borderColor: color }, styles.input, style]}
        {...rest}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
  },
});
