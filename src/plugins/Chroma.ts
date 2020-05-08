import chroma from "chroma-js";

const color1 = chroma.random();
const color2 = chroma.random();

/**
 * A color scale, created with chroma.scale,
 * is a function that maps numeric values to a color palette
 * The default scale has the domain 0..1 and goes from white to black.
 */
export const gradientColor = chroma.scale([color1, color2]);

/**tt
 * Computes the WCAG contrast ratio between two colors. A minimum contrast of 4.5:1
 * is recommended to ensure that text is still readable against a background color.
 */
export const textColor = chroma.contrast(color1, "white");
