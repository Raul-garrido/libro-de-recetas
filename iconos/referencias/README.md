# Referencias de estilo para los iconos del modo cocina

Esta carpeta guarda hojas de referencia que el usuario va encontrando con
el estilo visual que quiere para los iconos de técnica del modo cocina
(cortes, cocción, etc.). No son iconos listos para usar en la página —
son material de origen para recortar más adelante, cuando haya
suficientes para unificar un set completo.

## Estilo actual elegido (activo)

`guia-visual-tecnicas-culinarias-01.jpg` — "Guía visual de técnicas
culinarias esenciales": fotos reales de mano + cuchillo sobre tabla de
madera, una técnica de corte por celda, con nombre en español e inglés.
Este es el estilo que se quiere seguir: consistente, mismo fondo, misma
iluminación, fácil de recortar en piezas cuadradas/rectangulares (no
hace falta quitar fondo, ya que el fondo de tabla de madera forma parte
de la imagen).

Cubre (de momento, en esta hoja): juliana fina, brunoise, macedoine,
zanahoria en ciseler, cebolla en plumas, apio en tourné, patatas en
bastones/pont-neuf, puerro en chiffonade, ajo en láminas/en pasta,
jengibre rallado, patatas chips, calabacín en espiral, tomate en cascos,
pepino en rodajas onduladas, zanahoria en flores, rábano en abanico,
hierbas picadas (perejil, albahaca en chiffonade, cebollino, romero,
menta), zumo de limón, pechuga en escalope, salmón en cubos, parmesano
en lascas, huevo poché, pan para croutons, almendras laminadas.

## Estilo descartado (no eliminado, por si hace falta)

`../juliana.png` y `../laminas.png` — recortes de una hoja ilustrada de
colores (verduras pintadas sobre fondo blanco: zanahoria, cebolla...).
Se dejaron de usar en la página porque no encaja con el estilo elegido
arriba, pero los archivos siguen aquí por si en algún momento hacen
falta. La app ya no los referencia (`STEP_ICON_PHOTOS` en `index.html`
está vacío).

## Siguiente paso

Cuando el usuario reúna más hojas de este mismo estilo (u otras hojas
que cubran las técnicas que falten: llama alta/baja, tapar/destapar,
amasar, etc.), recortar cada celda como una foto suelta en
`iconos/<técnica>.jpg` y añadirla a `STEP_ICON_PHOTOS` en `index.html`
para que sustituya al dibujo SVG genérico de esa técnica.
