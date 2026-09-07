# Referencias de estilo para los iconos del modo cocina

Esta carpeta guarda hojas de referencia que el usuario va encontrando con
el estilo visual que quiere para los iconos de técnica del modo cocina
(cortes, cocción, etc.). No son iconos listos para usar en la página —
son material de origen para recortar más adelante, cuando haya
suficientes para unificar un set completo.

## Estilo "tabla de madera" (cortes finos)

`guia-visual-tecnicas-culinarias-01.jpg` — "Guía visual de técnicas
culinarias esenciales": fotos reales de mano + cuchillo sobre tabla de
madera, una técnica de corte por celda, con nombre en español e inglés.

En uso actualmente para: `dados` (`../dados.jpg`) y `laminas`
(`../laminas.jpg`). `juliana` usaba este estilo antes, pero se sustituyó
(ver más abajo) por el recorte del estilo "cocina blanca" para
unificarla con el resto de técnicas de esa hoja.

Cubre (en esta hoja, sin recortar aún salvo dados/láminas): juliana fina,
brunoise, macedoine, zanahoria en ciseler, cebolla en plumas, apio en
tourné, patatas en bastones/pont-neuf, puerro en chiffonade, ajo en
láminas/en pasta, jengibre rallado, patatas chips, calabacín en espiral,
tomate en cascos, pepino en rodajas onduladas, zanahoria en flores,
rábano en abanico, hierbas picadas (perejil, albahaca en chiffonade,
cebollino, romero, menta), zumo de limón, pechuga en escalope, salmón en
cubos, parmesano en lascas, huevo poché, pan para croutons, almendras
laminadas.

## Estilo "cocina blanca" (chef con chaqueta blanca, encimera clara) — activo para la mayoría

`guia-visual-tecnicas-numeradas-01.jpg` a `-05.jpg` — hoja numerada del 1
al 30 con técnicas generales de cocina (no solo cortes): manos de un
chef con chaqueta blanca trabajando sobre encimera de mármol clara,
sartenes de acero, horno, bol de cristal. Fondo e iluminación
consistentes entre las 30 celdas (rejilla de 3 columnas x 2 filas por
imagen, 1024x559 px cada hoja).

En uso actualmente para: `amasar`, `estirar`, `sellar`, `hornear`,
`mezclar`, `servir`, `fermentar`, `marinar`, `rellenar`, `juliana`
(los 10 recortados de esta hoja en la ronda del 2026-09-07).

Técnicas de esta misma hoja que **no tienen categoría equivalente
todavía** en `STEP_ICON_RULES` (no se han recortado ni cableado): 10.
Salsear, 11. Saltear, 14. Desglasar, 19. Pochar (en aceite — esta sí
coincide por regex con la categoría `sellar`, pero no se usó porque
`sellar` ya tenía una foto mejor/más representativa), 20. Flambear, 21.
Reducir (vino), 22. Tamizar (harina), 23. Asar (pollo), 24. Picar
(cebolla), 25. Glasear (verduras), 26. Deshuesar (pollo), 27. Estofar
(ternera), 28. Enharinar (pescado), 29. Asar (a la parrilla), 30.
Emulsionar (vinagreta). Si se quiere que alguna de estas tenga icono
propio, primero hay que decidir si crear una categoría nueva en
`STEP_ICON_RULES` (con su propia regex) o si encaja en una existente.

Caso dudoso sin resolver: 15. "Montar una salsa" (añadir mantequilla
fría a una salsa reduciéndola) usa la palabra "montar", pero la
categoría `montar` del código en realidad se dispara con
`colocar|cubrir el fondo|disponer|repartir` (o sea, "montar el plato" /
disponer ingredientes, no "montar una salsa"). Son dos técnicas
distintas que comparten nombre coloquial — no se ha recortado ni
asignado esta celda a ninguna categoría para no mezclar ambos sentidos.

## Estilo descartado (no eliminado, por si hace falta)

`../juliana.png` y `../laminas.png` — recortes de una hoja ilustrada de
colores (verduras pintadas sobre fondo blanco: zanahoria, cebolla...).
Se dejaron de usar en la página porque no encaja con ninguno de los dos
estilos activos de arriba, pero los archivos siguen aquí por si en algún
momento hacen falta.

## Inconsistencia pendiente

Ahora mismo conviven dos estilos fotográficos activos en `STEP_ICON_PHOTOS`:
"tabla de madera" (`dados`, `laminas`) y "cocina blanca" (el resto). No
hay ninguna hoja del estilo "cocina blanca" que cubra los cortes en
dados o en láminas, así que de momento se quedan con su foto anterior.
Si aparece una hoja de "cocina blanca" con esos cortes, recortarlos y
sustituir `../dados.jpg` / `../laminas.jpg` para unificar del todo.

## Siguiente paso

Categorías de `STEP_ICON_RULES` que siguen sin foto real (dibujo SVG
genérico): `remojo`, `precalentar`, `salpimentar`, `untar`, `tapar`,
`destapar`, `llama-baja`, `llama-alta`, `regar`, `anadir`, `montar`,
`comprobar`, `reposar`. Cuando el usuario reúna una hoja (de cualquiera
de los dos estilos) que las cubra, recortar cada celda como una foto
suelta en `iconos/<técnica>.jpg` y añadirla a `STEP_ICON_PHOTOS` en
`index.html` para que sustituya al dibujo SVG genérico de esa técnica.
