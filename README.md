# Test 01 — Job Board

**Mini tablero de empleos con Next.js App Router**

| Stack | |
|---|---|
| Next.js 16 | App Router |
| TypeScript | Tailwind CSS |
| ESLint | API Routes |

---

## Contexto del reto

Recibes un archivo `lib/jobs.json` con **20 vacantes** que incluyen: título, empresa, ubicación, modalidad (remoto/presencial/híbrido), salario, descripción y fecha de publicación. Tu trabajo es construir la interfaz sobre estos datos.

El JSON ya viene incluido en el repo. **No necesitas base de datos ni autenticación** para el baseline.

| Plazo | Trabajo estimado | Puntos totales |
|---|---|---|
| 3 días | 3–5 horas | 100 |

---

## Requerimientos base (obligatorios)

- [ ] **Página principal con listado de vacantes** — título, empresa, ubicación, modalidad y salario
- [ ] **Filtros funcionales** por modalidad (remoto / presencial / híbrido) y por ubicación
- [ ] **Buscador por texto** que filtre en tiempo real por título o empresa
- [ ] **Página de detalle de vacante** con ruta dinámica `/jobs/[id]`
- [ ] **Formulario de aplicación** en la página de detalle (nombre, email, mensaje) con validación básica
- [ ] **Loading y error states** visibles al usuario
- [ ] **README** con instrucciones para correr el proyecto y decisiones técnicas tomadas

---

## Extras para ir más allá (opcionales)

- [ ] Persistir los filtros activos en la URL (query params) para compartir una búsqueda
- [ ] Marcar vacantes como favoritas con persistencia en `localStorage`
- [ ] Endpoint `POST /api/apply` que reciba la aplicación y la guarde en archivo o base de datos
- [ ] Paginación o scroll infinito en el listado
- [ ] Ordenar vacantes por fecha, salario u otros criterios
- [ ] Deploy en Vercel con URL pública
- [ ] Unit tests para al menos 2 componentes o funciones

---

## Criterios de evaluación específicos

- Uso correcto de **Server vs Client Components**
- Routing con **App Router** (layouts, dynamic routes)
- Manejo de **estado del cliente** (filtros, búsqueda)
- Estructura de **componentes reutilizables**
- TypeScript tipado correcto (**sin `any` injustificados**)

---

## Rúbrica de evaluación — 100 puntos

### 1. Funcionalidad (30 pts)

| Criterio | Puntos |
|---|---|
| El proyecto corre sin errores desde el primer intento | 12 |
| Todos los requerimientos base implementados | 10 |
| Edge cases manejados (inputs vacíos, errores de red) | 8 |

### 2. Calidad de código (25 pts)

| Criterio | Puntos |
|---|---|
| Estructura de carpetas y archivos clara | 7 |
| Componentes reutilizables, sin duplicación innecesaria | 7 |
| TypeScript correctamente tipado (sin `any` sin justificar) | 6 |
| Nombres de variables, funciones y componentes descriptivos | 5 |

### 3. Decisiones técnicas y README (20 pts)

| Criterio | Puntos |
|---|---|
| README completo con instrucciones y `.env.example` | 7 |
| Trade-offs explicados con criterio | 7 |
| "Qué haría con más tiempo" — honesto y con visión | 6 |

### 4. UX y UI (15 pts)

| Criterio | Puntos |
|---|---|
| La app es usable sin instrucciones previas | 6 |
| Loading y error states visibles y útiles | 5 |
| Diseño visual coherente (no necesita ser elaborado) | 4 |

### 5. Extras (10 pts)

| Criterio | Puntos |
|---|---|
| Features opcionales implementados y funcionales | 5 |
| Tests (unit o integration) | 3 |
| Deploy público funcionando | 2 |

> **Rechazo inmediato:** el proyecto no corre, dependencias rotas, no hay README, o el candidato no puede explicar su propio código en la revisión técnica.

---

## Cómo empezar

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Estructura del proyecto

```
test-01-job-board/
├── app/
│   ├── layout.tsx          # Layout raíz
│   ├── page.tsx            # Página principal (empieza aquí)
│   └── globals.css         # Estilos globales con Tailwind
├── components/             # Tus componentes van aquí
├── lib/
│   ├── jobs.json           # Dataset con 20 vacantes
│   └── types.ts            # Tipos TypeScript (Job)
└── public/                 # Assets estáticos
```

El archivo `lib/types.ts` ya incluye la interfaz `Job` con el tipado completo del JSON.

---

## Reglas generales

### Lo que sí puedes usar

- Cualquier herramienta de IA: Cursor, Claude Code, GitHub Copilot, ChatGPT — sin restricciones
- Cualquier librería de npm que consideres apropiada
- Documentación oficial, Stack Overflow, blogs técnicos
- Tutoriales y referencias en línea

### Lo que no puedes hacer

- Entregar código de un tercero sin entenderlo — se evaluará en la revisión técnica
- Clonar un proyecto existente que resuelva exactamente el mismo problema
- No documentar nada — el README es obligatorio

> Usas IA, está bien. Lo que evaluamos es si entiendes lo que construiste, por qué tomaste cada decisión y cómo lo extenderías. La revisión técnica post-entrega es donde eso sale a la luz.

---

## Instrucciones de entrega

1. Crea un **repositorio público en GitHub** y envía el link antes de que venzan los 3 días
2. El proyecto debe correr con `npm install` y `npm run dev` sin pasos adicionales no documentados
3. Las variables de entorno deben estar documentadas en un archivo `.env.example` (si aplica)
4. El README debe incluir: qué construiste, cómo correrlo, decisiones técnicas tomadas, qué harías con más tiempo
5. Si hiciste deploy, incluye la URL en el README

---

## Estructura esperada de tu README

```markdown
## ¿Qué construí?
Descripción breve del proyecto y el test elegido.

## Cómo correrlo
Pasos concretos desde cero.

## Variables de entorno
Lista y descripción de cada variable en .env.example (si aplica).

## Decisiones técnicas
¿Por qué elegiste X librería sobre Y? ¿Qué trade-offs hiciste?

## Qué haría con más tiempo
Sé honesto. Esto nos importa tanto como lo que sí entregaste.
```

---

## La revisión técnica post-entrega

Una vez revisado el código, agendaremos una llamada de **30–45 minutos**. No es otro examen — es una conversación. Vamos a preguntarte cosas como:

- "Explícame cómo funciona esta parte de tu código"
- "¿Por qué usaste este approach y no este otro?"
- "Si tuvieras que agregar [feature X], ¿cómo lo harías?"
- "¿Qué parte te resultó más difícil y cómo la resolviste?"
- "¿Qué cambiarías del diseño si tuvieras que escalar esto?"

El objetivo es entender tu proceso de pensamiento, no hacerte tropezar. Si usaste IA para una parte, no hay problema — cuéntanos cómo la usaste y qué aprendiste del resultado.
