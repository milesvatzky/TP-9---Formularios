import { Pressable, StyleSheet, Text } from "react-native";

export default function BotonCategoria({ label, activo, onPress, onBlur }) {
  return (
    <Pressable
      style={[styles.boton, activo && styles.botonActivo]}
      onPress={onPress}
      onBlur={onBlur}
    >
      <Text style={[styles.texto, activo && styles.textoActivo]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    flex: 1,
    backgroundColor: "#1e2432",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3a4152",
    paddingVertical: 12,
    alignItems: "center",
  },
  botonActivo: {
    backgroundColor: "#7c3aed",
    borderColor: "#7c3aed",
  },
  texto: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9aa3b5",
  },
  textoActivo: {
    color: "#ffffff",
  },
});
