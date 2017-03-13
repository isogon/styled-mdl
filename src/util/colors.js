function lum(baseHex, luminosity = 0) {
  const startHex = baseHex.replace('#', '');
  const hexArray = startHex.length < 6 ? startHex.split('') : startHex.match(/.{1,2}/g);

  return hexArray.reduce((hex, color) => {
    const int = parseInt(color.length === 1 ? (color + color) : color, 16);
    const modified = Math.round(Math.min(Math.max(0, int + (int * luminosity)), 255)).toString(16);
    return hex + (`00${modified}`).substr(modified.length);
  }, '#');
}

export const brighten = (color, luminosity) => lum(color, luminosity);
export const darken = (color, luminosity = 0) => lum(color, luminosity * -1);

export const rgb = (values) => `rgb(${values})`;
export const rgba = (values, alpha) => `rgba(${values},${alpha})`;
