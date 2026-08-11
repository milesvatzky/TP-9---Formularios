import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import Cabecera from "../components/Cabecera";
import FormularioInscripcion from "../components/FormularioInscripcion";
import { validarFormulario } from "../utils/validaciones";

export default function InscripcionScreen() {
  const [formulario, setFormulario] = useState({
    nombreEquipo: "",
    nombreCapitan: "",
    email: "",
    telefono: "",
    categoria: "",
  });
  const [camposTocados, setCamposTocados] = useState({});

  const errores = validarFormulario(formulario);
  const hayErrores = Object.values(errores).some((error) => !!error);

  const actualizarCampo = (campo, valor) => {
    setFormulario((prev) => ({ ...prev, [campo]: valor }));
  };

  const marcarTocado = (campo) => {
    setCamposTocados((prev) => ({ ...prev, [campo]: true }));
  };

  const confirmarInscripcion = () => {
    if (hayErrores) {
      return;
    }
    Alert.alert(
      "Inscripción confirmada",
      `¡${formulario.nombreEquipo.trim()} quedó inscripto en la categoría ${formulario.categoria}!`
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.pantalla}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled"
      >
        <Cabecera
          titulo="Inscripción a Torneo"
          subtitulo="Torneo de Valorant 5v5 - Temporada 2026"
        />

        <FormularioInscripcion
          formulario={formulario}
          errores={errores}
          tocados={camposTocados}
          onCambioCampo={actualizarCampo}
          onTocarCampo={marcarTocado}
          onConfirmar={confirmarInscripcion}
          deshabilitado={hayErrores}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#141824",
  },
  contenido: {
    paddingHorizontal: 20,
    paddingTop: 72,
    paddingBottom: 32,
  },
});
