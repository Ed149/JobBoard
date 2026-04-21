# Job Board

**Mini tablero de empleos con Next.js App Router**
Job Board es un proyecto que muestra las vacantes disponibles en distintos lugares con un rango de salario y modalidad de trabajo (Presencial, remoto o híbrido). Permite la vista de detalle de la vacante con opción de postulación.

Se eligió la libreria de componentes HeroUI por su facilidad de uso e implementación.

Si hubiera tenido más tiempo, podría haber realizado la implementación de usuarios, la carga de CVs por usuario, guardar las postulaciones realizadas y el filtro por rango de salario. 



| Stack | |
|---|---|
| Next.js 16 | App Router |
| TypeScript | Tailwind CSS |
| ESLint | API Routes |
| HeroUI |

## Cómo empezar

```bash
#1. Clona el repositorio
git clone https://github.com/Ed149/JobBoard.git

# 2. Instala las dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Estructura del proyecto

```
test-01-job-board/
├── app/
│   ├── vacante/            # Pagina de detalle de vacante
│   │   ├── [id]
│   │   │   ├── page.tsx    
│   ├── layout.tsx          # Layout raíz
│   ├── page.tsx            # Página principal (empieza aquí)
│   └── globals.css         # Estilos globales con Tailwind
├── components/             # Tus componentes van aquí
│   ├── FavoriteBookmark.tsx 
│   ├── FormTextField.tsx 
│   ├── UserForm.tsx 
│   └── VacanteCard.tsx     
├── lib/
│   ├── jobs.json           # Dataset con 20 vacantes
│   ├── imports.ts          # Importacion de jobs con tipado
│   └── types.ts            # Tipos TypeScript (Job)
├── utils/                  # Funciones que se pueden reutilizar
│   ├── utils.ts            
└── public/                 # Assets estáticos
```

---

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
