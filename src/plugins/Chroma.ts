import chroma from "chroma-js";

const color1 = chroma.random();
const color2 = chroma.random();

export const gradientColor = chroma.scale([color1, color2]);
export const textColor = chroma.contrast(color1, "white");
