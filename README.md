# 🤖 ChatGPT Clone con React + Ollama

Un clon sencillo de ChatGPT desarrollado con **React**, **TailwindCSS**, **React Hook Form**, **Context API**, **useReducer** y **Ollama** para ejecutar un modelo de IA de manera local.

---

# 📚 Objetivo del proyecto

El propósito de este proyecto fue aprender a integrar una Inteligencia Artificial local utilizando Ollama y aplicar conceptos importantes de React como:

- Componentes
- Hooks personalizados
- Context API
- useReducer
- React Hook Form
- Variables de entorno
- Consumo de APIs
- Manejo de estado global

Todo el proyecto fue realizado con fines educativos.

---

# 🚀 Tecnologías utilizadas

- React
- Vite
- TailwindCSS
- React Hook Form
- Context API
- useReducer
- Fetch API
- Ollama
- JavaScript (ES6)

---

# 📁 Estructura del proyecto

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── History.jsx
│   ├── Message.jsx
│   └── PromptForm.jsx
│
├── context/
│   ├── ChatContext.jsx
│   └── ChatProvider.jsx
│
├── hooks/
│   └── useOllama.jsx
│
├── reducers/
│   └── ChatReducer.jsx
│
├── services/
│   └── ollama.js
│
├── App.jsx
└── main.jsx
```

---

# ⚙ Instalación

## 1. Clonar el proyecto

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar al proyecto

```bash
cd chatgpt-clone
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Instalar React Hook Form

```bash
npm install react-hook-form
```

---

## 4. Instalar TailwindCSS

Seguir la documentación oficial de Tailwind para proyectos con Vite.

---

## 5. Instalar Ollama

Descargar Ollama

https://ollama.com

---

## 6. Descargar un modelo

Por ejemplo:

```bash
ollama pull gemma3:1b
```

También puede utilizarse:

- llama3
- phi3
- mistral

---

## 7. Ejecutar Ollama

```bash
ollama serve
```

---

# 🔐 Variables de entorno

Crear un archivo llamado

```
.env
```

En la raíz del proyecto.

Agregar:

```env
VITE_MODEL=gemma3:1b
VITE_URL_API_OLLAMA=http://localhost:11434/api/generate
```

---

# ▶ Ejecutar el proyecto

```bash
npm run dev
```

---

# Arquitectura del proyecto

El proyecto fue desarrollado siguiendo una arquitectura basada en responsabilidades.

Cada archivo tiene una única función.

---

# 1. Servicio (services)

Archivo:

```
services/ollama.js
```

Responsabilidad:

Consumir la API de Ollama utilizando Fetch API.

Recibe:

- prompt

Envía:

```json
{
    "model":"gemma3:1b",
    "prompt":"Hola",
    "stream":false
}
```

Devuelve:

La respuesta de la IA.

---

# 2. Hook personalizado

Archivo:

```
hooks/useOllama.jsx
```

Responsabilidad:

Centralizar toda la comunicación con Ollama.

Estados utilizados:

- loading
- response
- error

Funciones:

```
sendPrompt()
```

Este hook evita repetir código dentro de los componentes.

---

# 3. Reducer

Archivo

```
reducers/ChatReducer.jsx
```

Responsabilidad:

Modificar el estado global del chat.

Estado inicial

```javascript
{
    messages:[]
}
```

Acciones

```
ADD_MESSAGE
```

Cada mensaje agregado posee la siguiente estructura

```javascript
{
    role:"user",
    msg:"Hola"
}
```

o

```javascript
{
    role:"ia",
    msg:"Hola, ¿cómo estás?"
}
```

---

# 4. Context API

Archivos

```
ChatContext.jsx
ChatProvider.jsx
```

Responsabilidad

Compartir el historial del chat con toda la aplicación sin necesidad de pasar props entre componentes.

Se utiliza:

```
useReducer()
```

para administrar el estado.

---

# 5. PromptForm

Responsabilidad

Capturar el mensaje del usuario.

Se utiliza:

React Hook Form

para simplificar el manejo del formulario.

Flujo:

Usuario escribe

↓

Submit

↓

dispatch()

↓

sendPrompt()

↓

Respuesta IA

↓

dispatch()

↓

Actualizar historial

---

# 6. History

Responsabilidad

Mostrar todos los mensajes almacenados en el estado global.

Utiliza

```javascript
state.messages.map(...)
```

para recorrer el historial.

---

# 7. Message

Responsabilidad

Mostrar un único mensaje.

Dependiendo del rol:

```
user
```

El mensaje aparece del lado derecho.

```
ia
```

El mensaje aparece del lado izquierdo.

---

# Flujo completo del proyecto

```
Usuario escribe

↓

React Hook Form

↓

handleSubmit()

↓

dispatch(ADD_MESSAGE)

↓

Reducer

↓

Context actualiza el historial

↓

sendPrompt()

↓

Fetch API

↓

Ollama

↓

Respuesta

↓

dispatch(ADD_MESSAGE)

↓

Reducer

↓

History vuelve a renderizar

↓

Se muestran ambos mensajes
```

---

# Diseño

La interfaz fue realizada utilizando TailwindCSS.

Se implementaron:

- Header
- Área de conversación
- Mensajes alineados por rol
- Footer
- Input de texto
- Botón de envío

---

# Conceptos aprendidos

Durante el desarrollo del proyecto se aplicaron los siguientes conceptos:

- Componentización
- Props
- Context API
- useReducer
- useContext
- Hooks personalizados
- React Hook Form
- Variables de entorno
- Fetch API
- Async / Await
- Manejo de errores
- Estado global
- Renderizado condicional
- map()
- TailwindCSS

---

# Posibles mejoras

- Historial persistente usando LocalStorage.
- Scroll automático.
- Streaming de respuestas.
- Markdown.
- Resaltado de código.
- Selector de modelos.
- Tema oscuro/claro.
- Sidebar con conversaciones.
- Generación de imágenes.
- Configuración del modelo.

---

# Resultado

El proyecto permite:

✅ Enviar mensajes.

✅ Consumir una IA local mediante Ollama.

✅ Mostrar las respuestas.

✅ Administrar el historial mediante Context API y useReducer.

✅ Separar correctamente la lógica en componentes reutilizables.

---

# Autor

Proyecto desarrollado por **Said Meza** con fines educativos para fortalecer conocimientos en React, consumo de APIs y manejo de estado global.