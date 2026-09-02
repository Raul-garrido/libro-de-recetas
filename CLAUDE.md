# Instrucciones para Claude Code en este repositorio

## Modo económico por defecto

Por defecto, trabaja de forma económica en tokens y llamadas a herramientas:

- Lee solo los archivos o fragmentos que realmente necesites para la tarea,
  no el repo entero "por si acaso".
- Agrupa verificaciones relacionadas en vez de comprobar de una en una.
- No lances subagentes (Agent/Task) para cosas que puedes resolver
  directamente con Read/Grep/Glob/Bash en pocos pasos.
- No repitas lecturas de un archivo que ya has leído en la misma sesión
  salvo que haya cambiado.
- Prioriza respuestas y cambios concisos frente a explicaciones largas o
  documentación no pedida.

## Excepción: profundidad cuando importa

Esta economía nunca debe sacrificar corrección. Si una tarea es compleja,
ambigua, afecta a varios archivos, toca seguridad/datos del usuario, o el
usuario indica que quiere una verificación exhaustiva, deja el modo
económico de lado para esa tarea: lee lo que haga falta, verifica a fondo,
usa subagentes si aporta valor real. Vuelve al modo económico en cuanto esa
tarea concreta esté resuelta.

El usuario puede pedir explícitamente "modo completo" o "sin restricciones"
para una tarea puntual; en ese caso, ignora la economía por defecto para esa
tarea.

## Sobre este repositorio

`index.html`: **Libro de recetas para horno de gas tipo Fontana Maestro**,
catálogo interactivo (HTML/CSS/JS sin dependencias) de recetas de asados,
guisos, panes y pizzas, con recálculo de cantidades por peso/personas y
recomendación de recipiente según las medidas reales del horno.

`recetas.json`: contenido de las recetas (fuente de datos que consume
`index.html`).

`manifest.json` y `sw.js`: hacen de esta página una PWA instalable.

Este repositorio contiene únicamente el proyecto de recetas. El Universal
Semantic Task Compiler es un proyecto aparte y vive en su propio
repositorio (`universal-task-compiler`); no mezclar su código aquí.
