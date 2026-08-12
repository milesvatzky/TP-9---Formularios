import CampoFormulario from "./CampoFormulario";
import SelectorCategoria from "./SelectorCategoria";
import BotonConfirmar from "./BotonConfirmar";

export default function FormularioInscripcion({
  formulario,
  errores,
  onCambioCampo,
  onConfirmar,
  deshabilitado,
}) {
  return (
    <>
      <CampoFormulario
        label="Nombre del equipo"
        value={formulario.nombreEquipo}
        onChangeText={(texto) => onCambioCampo("nombreEquipo", texto)}
        keyboardType="default"
        placeholder="Ej: Los Locos del Aim"
        error={errores.nombreEquipo}
      />

      <CampoFormulario
        label="Nombre del capitán"
        value={formulario.nombreCapitan}
        onChangeText={(texto) => onCambioCampo("nombreCapitan", texto)}
        keyboardType="default"
        placeholder="Ej: Juan Pérez"
        error={errores.nombreCapitan}
      />

      <CampoFormulario
        label="Email"
        value={formulario.email}
        onChangeText={(texto) => onCambioCampo("email", texto)}
        keyboardType="email-address"
        placeholder="capitan@equipo.com"
        error={errores.email}
      />

      <CampoFormulario
        label="Teléfono"
        value={formulario.telefono}
        onChangeText={(texto) => onCambioCampo("telefono", texto)}
        keyboardType="phone-pad"
        placeholder="Ej: 1161234567"
        error={errores.telefono}
      />

      <SelectorCategoria
        valor={formulario.categoria}
        onSeleccionar={(categoria) => onCambioCampo("categoria", categoria)}
      />

      <BotonConfirmar deshabilitado={deshabilitado} onPress={onConfirmar} />
    </>
  );
}
