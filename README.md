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
