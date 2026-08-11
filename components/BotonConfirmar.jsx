import { Pressable, StyleSheet, Text } from "react-native";

export default function BotonConfirmar({ deshabilitado, onPress }) {
  return (
    <Pressable
      style={[styles.boton, deshabilitado && styles.botonDeshabilitado]}
      onPress={onPress}
      disabled={deshabilitado}
    >
      <Text style={styles.texto}>Confirmar inscripción</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#7c3aed",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  botonDeshabilitado: {
    backgroundColor: "#3d3a4a",
  },
  texto: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
});
