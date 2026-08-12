# 🎮 Formulario de Inscripción a Torneo – React Native

Aplicación móvil desarrollada en **React Native** para inscribir equipos a un torneo de **Valorant**.

El proyecto fue realizado como un checkpoint para practicar **formularios controlados, manejo de estados, validaciones manuales y manejo del teclado en dispositivos móviles**.

## 📱 Descripción

La aplicación permite ingresar los datos de un equipo para participar de un torneo de Valorant.

El formulario solicita:

* Nombre del equipo
* Nombre del capitán
* Email
* Teléfono
* Categoría: Sub-16 o Libre

Antes de confirmar la inscripción, la aplicación verifica que todos los datos sean correctos.

## ⚙️ Funcionalidades

* Formulario controlado utilizando un único `useState`.
* Componente `CampoFormulario` reutilizable.
* Validación de campos obligatorios.
* Validación del nombre del equipo entre 3 y 20 caracteres.
* Validación del formato del email.
* Validación del teléfono para permitir solamente números.
* Selección de categoría mediante botones.
* Mensajes de error debajo de los campos correspondientes.
* Botón de confirmación deshabilitado cuando existen errores.
* `KeyboardAvoidingView` adaptado para iOS y Android.
* `keyboardType` específico para cada tipo de campo.

## 📂 Estructura del proyecto

```text
mi-torneo/
│
├── App.tsx
│
├── components/
│   └── CampoFormulario.tsx
│
├── package.json
└── ...
```

### `App.tsx`

Contiene la pantalla principal del formulario, el estado único con los cinco campos, las validaciones, los botones de categoría y el botón de confirmación.

### `CampoFormulario.tsx`

Es un componente reutilizable utilizado para los cuatro campos de texto del formulario.

## 🧠 Tecnologías utilizadas

* React Native
* TypeScript
* JavaScript
* React Hooks (`useState`)
* `KeyboardAvoidingView`
* `Platform`
* `ScrollView`
* `TextInput`
* `TouchableOpacity`

## ⌨️ Teclado

Cada campo utiliza el tipo de teclado correspondiente:

| Campo              | `keyboardType`  |
| ------------------ | --------------- |
| Nombre del equipo  | `default`       |
| Nombre del capitán | `default`       |
| Email              | `email-address` |
| Teléfono           | `phone-pad`     |

Además, se utiliza `KeyboardAvoidingView` para evitar que el teclado cubra los elementos del formulario.

## ✅ Validaciones

El formulario valida:

1. Que el nombre del equipo no esté vacío y tenga entre 3 y 20 caracteres.
2. Que el nombre del capitán no esté vacío.
3. Que el email no esté vacío y tenga un formato válido.
4. Que el teléfono no esté vacío y contenga solamente números.
5. Que se haya seleccionado una categoría.

Si existe algún error, el botón **“Confirmar inscripción”** permanece deshabilitado.

## 🚀 Cómo ejecutar el proyecto

Primero instalar las dependencias:

```bash
npm install
```

Después iniciar el proyecto:

```bash
npx expo start
```

Desde ahí se puede ejecutar la aplicación en un emulador o dispositivo compatible.

## 🧪 Pruebas

Para comprobar el funcionamiento se deben probar tanto casos correctos como incorrectos.

Por ejemplo:

```text
Nombre del equipo: Alan Team
Nombre del capitán: Alan
Email: alan@gmail.com
Teléfono: 1123456789
Categoría: Libre
```

También se puede probar dejando campos vacíos o ingresando datos incorrectos para comprobar que aparezcan los mensajes de error y que el botón quede deshabilitado.

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo utilizamos **ChatGPT** como herramienta de apoyo para organizar el proyecto, comprender conceptos de React Native, implementar validaciones y resolver dudas relacionadas con `useState`, componentes reutilizables y `KeyboardAvoidingView`.

Las respuestas de la IA fueron adaptadas y revisadas para cumplir con los requisitos específicos de la consigna.

## 👥 Proyecto

**TP – Formulario de Inscripción a Torneo**

**Tecnología:** React Native + TypeScript
**Juego:** Valorant
