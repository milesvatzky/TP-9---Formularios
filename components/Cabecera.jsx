import { StyleSheet, Text, View } from "react-native";

export default function Cabecera({ titulo, subtitulo }) {
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 14,
    color: "#9aa3b5",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 28,
  },
});
