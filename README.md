# 🤖 CloneChat

CloneChat es una aplicación Full Stack inspirada en ChatGPT. Permite enviar mensajes a un modelo de inteligencia artificial ejecutado localmente mediante **Ollama**, guardar toda la conversación en **PostgreSQL** y visualizar el historial desde una interfaz desarrollada en **React**.

El objetivo principal del proyecto fue aprender a integrar un frontend moderno con un backend en Node.js, una base de datos relacional y un modelo de inteligencia artificial, siguiendo una arquitectura cliente-servidor.

---

# 📚 Tecnologías utilizadas

## Frontend

- React
- Vite
- TailwindCSS
- React Hook Form
- Context API
- useReducer

## Backend

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- cors

## Inteligencia Artificial

- Ollama
- Modelos compatibles (Gemma, DeepSeek, Llama, etc.)

---

# 🏗 Arquitectura

```
                React
                  │
                  │ HTTP
                  ▼
             Express API
            /           \
           /             \
 PostgreSQL           Ollama
```

El frontend nunca se comunica directamente con Ollama.

Toda la comunicación pasa por el servidor Express.

---

# 🚀 Funcionamiento

El usuario escribe un mensaje desde React.

```
Usuario
   │
   ▼
Formulario
```

El formulario envía una petición HTTP POST al servidor.

```
POST /api/chat
```

El servidor realiza las siguientes acciones:

1. Guarda el mensaje del usuario.
2. Consulta el modelo de IA mediante Ollama.
3. Guarda la respuesta de la IA.
4. Devuelve la respuesta al frontend.

Después, el frontend solicita nuevamente el historial.

```
GET /history
```

Finalmente el historial completo se muestra en pantalla.

---

# 📂 Estructura del proyecto

```
clonechat/

│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── reducer/
│   ├── services/
│   ├── pages/
│   └── App.jsx
│
└── backend/
    │
    ├── database/
    ├── services/
    ├── .env
    └── server.js
```

---

# 🗄 Base de datos

La aplicación utiliza PostgreSQL.

Tabla principal:

```
messages
```

Campos

| Campo | Tipo |
|--------|------|
| id | SERIAL |
| role | VARCHAR |
| message | TEXT |
| created_at | TIMESTAMP |

---

# 📡 Endpoints

## Obtener historial

```
GET /history
```

Respuesta

```json
[
    {
        "id":1,
        "role":"user",
        "message":"Hola"
    }
]
```

---

## Enviar mensaje

```
POST /api/chat
```

Body

```json
{
    "msg":"Hola IA"
}
```

Respuesta

```json
{
    "response":"Hola ¿En qué puedo ayudarte?"
}
```

---

# 🧠 Flujo completo

```
Usuario

↓

React

↓

POST /api/chat

↓

Express

↓

Guardar mensaje

↓

Ollama

↓

Respuesta IA

↓

Guardar respuesta

↓

React

↓

GET /history

↓

Context API

↓

History

↓

Pantalla
```

---

# ⚙ Variables de entorno

## Frontend

```
VITE_API=http://localhost:3000
```

---

## Backend

```
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=*****
DB_DATABASE=msg

OLLAMA_URL=http://localhost:11434/api/generate
OLLAMA_MODEL=gemma3:1b
```

---

# ▶ Instalación

## Clonar repositorio

```bash
git clone <repositorio>
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Ejecutar Ollama

```bash
ollama serve
```

Posteriormente ejecutar el modelo.

Ejemplo

```bash
ollama run gemma3:1b
```

---

# Características implementadas

- Comunicación React → Express
- Comunicación Express → Ollama
- Persistencia con PostgreSQL
- Historial de conversaciones
- Componentes reutilizables
- Context API
- useReducer
- React Hook Form
- API REST
- Variables de entorno
- Arquitectura Cliente-Servidor

---

# Mejoras futuras

- Autenticación de usuarios
- Múltiples conversaciones
- Streaming de respuestas
- Renderizado Markdown
- Resaltado de código
- Copiar respuestas
- Tema oscuro/claro
- Eliminación de conversaciones
- Búsqueda dentro del historial

---

# Objetivo del proyecto

Este proyecto fue desarrollado con fines de aprendizaje para comprender el desarrollo de aplicaciones Full Stack que integran:

- React
- Node.js
- Express
- PostgreSQL
- APIs REST
- Ollama
- Inteligencia Artificial Local

Además, se aplicaron conceptos importantes como separación de responsabilidades, consumo de APIs, manejo de estado global y persistencia de información en base de datos.

---

# Autor

Desarrollado por **Said Meza** como proyecto de aprendizaje y práctica en desarrollo Full Stack con Inteligencia Artificial.