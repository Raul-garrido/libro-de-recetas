# Fotos reales de las recetas

Esta carpeta guarda las fotos reales que se van haciendo al cocinar cada
receta, para sustituir poco a poco las fotos de stock (Wikimedia Commons)
o la ilustración por defecto.

## Cómo añadir una foto

1. Cocina la receta y haz una foto del resultado.
2. Pásasela a Claude en la conversación, indicando de qué receta es (por
   título o por su `id` en `recetas.json`).
3. Claude la guarda aquí como `fotos/<id-de-la-receta>.jpg` (por ejemplo
   `fotos/asado-02.jpg`) y actualiza el campo `"image"` de esa receta en
   `recetas.json` para que apunte a este archivo local.

Ventaja de este método frente a un enlace externo: la foto queda dentro
del propio proyecto, no depende de que una web externa la siga alojando,
y es una foto real de lo que realmente sale con este horno — no una foto
de stock que se le parece.
