import { StyleSheet, Text, View } from "react-native";
import BotonCategoria from "./BotonCategoria";
import MensajeError from "./MensajeError";

const CATEGORIAS = ["Sub-16", "Libre"];

export default function SelectorCategoria({
  valor,
  onSeleccionar,
  onTocar,
  error,
}) {
  return (
    <View style={styles.seccion}>
      <Text style={styles.label}>Categoría</Text>
      <View style={styles.fila}>
        {CATEGORIAS.map((categoria) => (
          <BotonCategoria
            key={categoria}
            label={categoria}
            activo={valor === categoria}
            onPress={() => onSeleccionar(categoria)}
            onBlur={onTocar}
          />
        ))}
      </View>
      <MensajeError mensaje={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  seccion: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e8e8e8",
    marginBottom: 6,
  },
  fila: {
    flexDirection: "row",
    gap: 12,
  },
});
