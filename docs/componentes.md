# Mapa de componentes — Doctor Árbol

## Sprint 1 — Pantalla Documentos

Componentes necesarios para desarrollar la pantalla principal de Doctor Árbol en React, tomando como referencia el archivo `js/componentes.js`.

## Componentes

| Función de la referencia                      | Archivo en React                        | Nivel Atomic Design |
|-----------------------------------------------|-------------------------------------------|------------|
| `EtiquetaEstado({ estado })`                  | `src/components/EtiquetaEstado.jsx`       | Átomo      |
| `Vacio({ icono, texto })`                     | `src/components/Vacio.jsx`                | Átomo      |
| `FilaDocumento({ documento, hoy })`           | `src/components/FilaDocumento.jsx`        | Molécula   |
| `Chips({ nombre, opciones, valor })`          | `src/components/Chips.jsx`                | Molécula   |
| `ListaDocumentos({ documentos, hoy, vacio })` | `src/components/ListaDocumentos.jsx`      | Organismo  |
| `PantallaDocumentos({ estado })`              | `src/pages/Inicio.jsx`                    | Pantalla   |


## Props de los componentes

| Componente        | Props en React                 | Función                                                  |
|-------------------|--------------------------------|----------------------------------------------------------|
| EtiquetaEstado    | `estado`                       | Muestra si un documento: válido, por caducar, ha caducado|
| Vacio             | `icono`, `texto`               | Muestra un mensaje cuando no hay resultados.             |
| FilaDocumento     | `documento`, `hoy`             | Muestra los datos de un documento y su estado.           |
| Chips             | `opciones`, `valor`, `onCambio`| Permite seleccionar el filtro de documentos.             |
| ListaDocumentos   | `documentos`, `hoy`, `vacio`   | Muestra las filas de documentos o el mensaje vacío.      |
| Inicio            | Sin props inicialmente         | Contiene la pantalla Documentos y gestiona el filtro.    |

## Estado de React

La pantalla Inicio gestionará el filtro seleccionado mediante `useState`.

- Estado: `filtro`
- Valor inicial: `"Todos"`
- Función para actualizarlo: `setFiltro`
- Componente propietario: `src/pages/Inicio.jsx`

El estado se pasará a Chips mediante props:
- `valor`: filtro seleccionado.
- `onCambio`: función que permite cambiar el filtro.

Cuando el usuario seleccione otro filtro, React actualizará la lista de documentos mostrados.

## Funciones de lógica

Las funciones de lógica se implementarán en `src/utils/`, separadas de los componentes visuales.

| Función original       | Responsabilidad                                          |
|------------------------|----------------------------------------------------------|
| `trabajadorPorId()`    | Buscar un trabajador a partir de su identificador.       |
| `dentroDeDias()`       | Obtener una fecha relativa a la fecha actual.            |
| `estadoDocumento()`    | Determinar el estado de un documento según su caducidad. |
| `filtrarPorEstado()`   | Filtrar los documentos por el estado seleccionado.       |
| `fechaCorta()`         | Formatear una fecha para mostrarla en la interfaz.       |

## Datos

Los datos de ejemplo se guardarán en `src/data/`.

Para la pantalla Documentos necesitamos:

- `DOCUMENTOS`: listado de documentos y sus propiedades.
- `TRABAJADORES`: información de los trabajadores asociados a cada documento.

Los datos procederán del archivo `js/datos.js` de la referencia oficial.

## Jerarquía de componentes

Inicio (Pantalla)
- Chips (Molécula)
- ListaDocumentos (Organismo)
  - FilaDocumento (Molécula)
    - EtiquetaEstado (Átomo)
  - Vacio (Átomo, cuando no hay resultados)

## Alcance del Sprint 1

La pantalla debe mostrar los documentos y permitir filtrarlos por:

- Todos
- Válido
- Por caducar
- Caducado



