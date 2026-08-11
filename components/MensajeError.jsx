import { StyleSheet, Text } from "react-native";

export default function MensajeError({ mensaje }) {
  if (!mensaje) {
    return null;
  }
  return <Text style={styles.error}>{mensaje}</Text>;
}

const styles = StyleSheet.create({
  error: {
    marginTop: 6,
    fontSize: 13,
    color: "#ff5c5c",
  },
});
