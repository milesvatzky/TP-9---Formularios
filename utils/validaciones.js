const VALIDACION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOLO_NUMEROS = /^\d+$/;

export function validarFormulario(formulario) {
  const errores = {};

  if (formulario.nombreEquipo.trim() === "") {
    errores.nombreEquipo = "El nombre del equipo es obligatorio.";
  } else if (
    formulario.nombreEquipo.trim().length < 3 ||
    formulario.nombreEquipo.trim().length > 20
  ) {
    errores.nombreEquipo = "El nombre del equipo debe tener entre 3 y 20 caracteres.";
  }

  if (formulario.nombreCapitan.trim() === "") {
    errores.nombreCapitan = "El nombre del capitán es obligatorio.";
  }

  if (formulario.email.trim() === "") {
    errores.email = "El email es obligatorio.";
  } else if (!VALIDACION_EMAIL.test(formulario.email.trim())) {
    errores.email = "Ingresá un email válido (con @ y dominio).";
  }

  if (formulario.telefono.trim() === "") {
    errores.telefono = "El teléfono es obligatorio.";
  } else if (!SOLO_NUMEROS.test(formulario.telefono.trim())) {
    errores.telefono = "El teléfono solo puede contener números.";
  }

  if (formulario.categoria === "") {
    errores.categoria = "Elegí una categoría.";
  }

  return errores;
}
