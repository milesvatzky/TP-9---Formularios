import { StyleSheet, Text, TextInput, View } from "react-native";
import MensajeError from "./MensajeError";

export default function CampoFormulario({
  label,
  value,
  onChangeText,
  onBlur,
  onFocus,
  keyboardType = "default",
  placeholder,
  error,
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, !!error && styles.inputConError]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#8b8b8b"
      />
      <MensajeError mensaje={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e8e8e8",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#1e2432",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3a4152",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#ffffff",
  },
  inputConError: {
    borderColor: "#ff5c5c",
  },
});
