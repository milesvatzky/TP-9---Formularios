import CampoFormulario from "./CampoFormulario";
import SelectorCategoria from "./SelectorCategoria";
import BotonConfirmar from "./BotonConfirmar";

export default function FormularioInscripcion({
  formulario,
  errores,
  tocados,
  onCambioCampo,
  onTocarCampo,
  onConfirmar,
  deshabilitado,
}) {
  return (
    <>
      <CampoFormulario
        label="Nombre del equipo"
        value={formulario.nombreEquipo}
        onChangeText={(texto) => onCambioCampo("nombreEquipo", texto)}
        onBlur={() => onTocarCampo("nombreEquipo")}
        keyboardType="default"
        placeholder="Ej: Los Locos del Aim"
        error={tocados.nombreEquipo ? errores.nombreEquipo : undefined}
      />

      <CampoFormulario
        label="Nombre del capitán"
        value={formulario.nombreCapitan}
        onChangeText={(texto) => onCambioCampo("nombreCapitan", texto)}
        onBlur={() => onTocarCampo("nombreCapitan")}
        keyboardType="default"
        placeholder="Ej: Juan Pérez"
        error={tocados.nombreCapitan ? errores.nombreCapitan : undefined}
      />

      <CampoFormulario
        label="Email"
        value={formulario.email}
        onChangeText={(texto) => onCambioCampo("email", texto)}
        onBlur={() => onTocarCampo("email")}
        keyboardType="email-address"
        placeholder="capitan@equipo.com"
        error={tocados.email ? errores.email : undefined}
      />

      <CampoFormulario
        label="Teléfono"
        value={formulario.telefono}
        onChangeText={(texto) => onCambioCampo("telefono", texto)}
        onBlur={() => onTocarCampo("telefono")}
        keyboardType="phone-pad"
        placeholder="Ej: 1161234567"
        error={tocados.telefono ? errores.telefono : undefined}
      />

      <SelectorCategoria
        valor={formulario.categoria}
        onSeleccionar={(categoria) => onCambioCampo("categoria", categoria)}
        onTocar={() => onTocarCampo("categoria")}
        error={tocados.categoria ? errores.categoria : undefined}
      />

      <BotonConfirmar deshabilitado={deshabilitado} onPress={onConfirmar} />
    </>
  );
}
