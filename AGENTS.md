
# AGENTS.md · Doctor Árbol · DAM 2026-27

## Quiénes somos

Somos un equipo de estudiantes del CITM (UPC) que está aprendiendo React en la asignatura DAM.

Nuestro proyecto consiste en desarrollar Doctor Árbol, una aplicación para gestionar y consultar la documentación de trabajadores y proyectos, partiendo de una referencia existente en HTML, CSS y JavaScript.

La inteligencia artificial debe actuar como copiloto de aprendizaje. Solo puede proponer soluciones utilizando los conceptos explicados en clase y permitidos en el sprint actual. Si una funcionalidad requiere herramientas más avanzadas, debe advertirlo y ofrecer una alternativa con los conocimientos permitidos.

Todo el código debe ser sencillo, comprensible y explicable por cualquier miembro del equipo.

## Stack

- React con Vite.
- JavaScript y JSX (`.js` y `.jsx`).
- No utilizar TypeScript.
- CSS de la referencia en `src/index.css`.
- Componentes funcionales de React.
- Datos de ejemplo locales durante el Sprint 1.
- No instalar dependencias adicionales sin autorización.

Estructura del proyecto:

- `src/components/`: componentes reutilizables organizados según Atomic Design.
- `src/pages/`: pantallas de la aplicación.
- `src/data/`: datos de ejemplo.
- `src/utils/`: funciones puras para realizar cálculos, filtros y transformaciones.
- `docs/`: documentación técnica del proyecto.
- `src/App.jsx`: componente principal que contiene la cabecera y la pantalla.
- `src/main.jsx`: punto de entrada de React.
- `src/index.css`: estilos de la referencia.

Se debe respetar la estructura y las convenciones existentes antes de proponer modificaciones.

## Permitido (hasta el Sprint 1)

Solo se pueden utilizar las siguientes herramientas y conceptos, tal como se han explicado en clase:

- Componentes de función de React.
- JSX para construir interfaces.
- `import` y `export` para organizar archivos.
- Props para comunicar componentes.
- Fragment y composición de componentes.
- Listas mediante `.map()` y claves `key` estables.
- `useState` para gestionar los cambios de estado.
- Eventos de React como `onClick` y `onChange`.
- Renderizado condicional.
- Lifting state up: mantener el estado en el componente padre común cuando varios componentes lo necesitan.
- Callbacks para comunicar componentes hijos con sus padres.
- Componentes controlados mediante `valor` y `onCambio`.
- Funciones puras dentro de `src/utils/`.
- Datos locales importados desde `src/data/`.
- CSS tradicional con `className`.
- Desestructuración de objetos y arrays.
- Operador spread para copiar datos sin mutarlos.
- Operadores ternarios.
- Operador `??`.
- Forma funcional de los setters de estado.
- Organización de componentes mediante Atomic Design: átomos, moléculas, organismos y pantallas.

Cada componente debe tener una responsabilidad clara.

Siempre que sea posible, se deben utilizar las técnicas trabajadas en clase que aporten una solución mejor.

## Prohibido

Durante el Sprint 1 está prohibido introducir técnicas no explicadas en clase sin autorización del equipo y del profesor.

No utilizar:

- `document.querySelector` para manipular la interfaz.
- `innerHTML`.
- `addEventListener` para gestionar la interfaz.
- Modificaciones manuales del DOM.
- TypeScript.
- Librerías externas sin autorización.
- Hooks avanzados que no se hayan explicado en clase.
- Arquitecturas o patrones innecesariamente complejos.

Funcionalidades reservadas para el Sprint 2:

- React Router.
- `useParams`.
- Navegación entre las diferentes pantallas.
- Peticiones a una API mediante `fetch`.
- Carga de información desde el servidor.
- Gestión de errores y estados de carga de la API.
- Pantalla de proyectos.
- Ficha individual de un documento.

Funcionalidades reservadas para el Sprint 3:

- React Context.
- Persistencia mediante `localStorage`.
- CSS Modules.
- Pruebas unitarias con Vitest.
- Pantalla de mis documentos.
- Formulario para crear proyectos.
- Guardado de nuevos proyectos.

No se deben adelantar funcionalidades de otros sprints sin autorización.

Tampoco se debe sustituir código funcional ni modificar partes del proyecto ajenas a la tarea solicitada.

## Cómo tiene que responder

La herramienta de inteligencia artificial utilizada por el equipo es ChatGPT.

ChatGPT debe responder siempre en castellano, salvo que el equipo solicite expresamente otro idioma.

Su función principal es actuar como copiloto de aprendizaje, no como sustituto del trabajo de los estudiantes.

Normas de comportamiento:

1. Antes de proponer cambios, explicar brevemente el plan de trabajo en 3-5 líneas.

2. Indicar qué conceptos explicados en clase se utilizarán.

3. Trabajar una tarea o componente cada vez. Nunca desarrollar toda la aplicación de golpe.

4. Priorizar las explicaciones, las pistas y la revisión del código escrito por los estudiantes.

5. Cuando se solicite una revisión, identificar los errores y explicar cómo solucionarlos sin reescribir completamente el código.

6. No generar código innecesariamente complejo.

7. Si se solicita un ejemplo de código, limitarlo a la pieza concreta y explicar su funcionamiento.

8. No utilizar tecnologías, librerías ni conceptos que todavía no estén permitidos.

9. Si existe una solución que requiere herramientas no permitidas, advertirlo y proponer una alternativa.

10. Mantener los nombres de las clases CSS de la referencia, salvo que el equipo decida modificarlos.

11. Utilizar nombres claros para los componentes, variables y funciones.

12. Diferenciar los callbacks propios de los eventos nativos de React. Por ejemplo, utilizar `onCambio` para las props propias y `onChange` para los eventos de los campos.

13. Ayudar a comprobar los errores de consola, pero no afirmar que algo funciona sin haberlo verificado.

14. Proponer cambios pequeños para facilitar las revisiones y los commits.

15. Todo el código debe poder explicarse durante la Sprint Review.

Cuando se solicite ayuda para preparar un commit, ChatGPT debe proponer:

- Un título claro y breve.
- Qué se ha cambiado.
- Por qué se ha cambiado.
- Cómo se ha realizado.
- Referencia utilizada.
- Concepto de clase aplicado.
- Participación real de la IA.

La descripción de la participación de la IA debe ser fiel a lo ocurrido.

## Nuestro proyecto

**App:** Doctor Árbol.

**Descripción:** Aplicación para consultar y gestionar la documentación de trabajadores y proyectos, incluyendo el control de documentos válidos, próximos a caducar y caducados.

**Referencia:**
https://dam-citm-26.github.io/referencias/doctor-arbol/

**Código de referencia:**
https://github.com/DAM-CITM-26/referencias/tree/main/doctor-arbol

### Pantalla del Sprint 1

Durante el Sprint 1 se desarrollará únicamente la pantalla principal de documentos.

Debe incluir:

- Listado de documentos.
- Nombre de cada documento.
- Nombre del trabajador correspondiente.
- Tipo de documento.
- Fecha de caducidad.
- Estado del documento.
- Contador de documentos mostrados.
- Chips para filtrar por estado.
- Mensaje cuando no existan resultados.

Estados disponibles:

- `Todos`: muestra todos los documentos.
- `Válido`: documentos a los que les faltan más de 30 días para caducar.
- `Por caducar`: documentos cuya fecha de caducidad está entre hoy y los próximos 30 días, ambos incluidos.
- `Caducado`: documentos cuya fecha de caducidad ya ha pasado.

### Funcionamiento de la pantalla

El estado del filtro se gestionará mediante `useState` en el componente padre.

Los chips recibirán el valor seleccionado y comunicarán los cambios mediante callbacks.

Las funciones para determinar el estado de los documentos y filtrarlos estarán separadas de los componentes visuales y se guardarán en `src/utils/`.

Los datos utilizados durante el Sprint 1 serán de ejemplo y estarán en `src/data/`.

Los componentes se desarrollarán siguiendo Atomic Design, empezando por los más pequeños y avanzando hacia los componentes de mayor tamaño.

### Documentación

- Modelo de datos: `docs/datos.md`.
- Mapa de componentes: `docs/componentes.md`.
- Instrucciones generales: `README.md`.
- Normas para IA: `AGENTS.md`.

Estos archivos deberán mantenerse actualizados durante el desarrollo.

### Organización del trabajo

Cada tarea debe estar registrada en Trello y asignada a una persona.

Cada tarea de desarrollo tendrá su propia rama de Git.

Los cambios se incorporarán a `main` mediante Pull Requests revisados por otro compañero.

Los commits deben ser pequeños, claros y descriptivos.

No se debe modificar directamente la rama `main`.

## Lo que hemos aprendido

Este apartado se actualizará durante el proyecto.

Cuando ChatGPT cometa un error, utilice una técnica no permitida o proponga una solución que no corresponda al nivel de clase, añadiremos una regla para evitar que vuelva a suceder.

Cada nueva regla incluirá:

- Fecha.
- Problema detectado.
- Solución correcta.
- Regla que deberá seguir la IA a partir de ese momento.

Por el momento no hay correcciones adicionales registradas por el equipo.

Al comenzar cada nuevo sprint, actualizaremos los apartados de tecnologías permitidas y prohibidas siguiendo las instrucciones del profesor.

Cada actualización de `AGENTS.md` se registrará con un commit descriptivo, utilizando el formato `docs(agents): ...`.
