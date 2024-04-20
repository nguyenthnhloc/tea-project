export const convertHexToRGBA = (hex, alpha) => {
  // check if the hex value contains a hash symbol and remove it if so
  if (hex[0] === "#") hex = hex.slice(1);

  // parse the hex value to r, g, and b integer values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // validate the alpha value between 0 and 1 or assign default value of 1
  alpha = alpha !== undefined && alpha <= 1 && alpha >= 0 ? alpha : 1;

  // return rgba string in the format "rgba(r,g,b,a)"
  return `rgba(${r},${g},${b},${alpha})`;
};

export const convertRGBAToHex = (r, g, b, a) => {
  // Convert each RGB value to Hex and pad with zeros to ensure 2 digits
  let rHex = r.toString(16).padStart(2, "0");
  let gHex = g.toString(16).padStart(2, "0");
  let bHex = b.toString(16).padStart(2, "0");

  // Convert alpha value to Hex and pad with zeros to ensure 2 digits
  let aHex = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");

  // Combine Hex values with "#"
  let hexValue = `#${rHex}${gHex}${bHex}${aHex}`;

  // Convert to uppercase letters
  return hexValue.toUpperCase();
};
