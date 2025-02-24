// does JS have char datatype?
// a charset to decimal digit mapping.
const hexDigitToDecimalMap = (hexChar) => {
  const zero = "0".codePointAt(0);
  const nine = "9".codePointAt(0);
  const charVal = hexChar.codePointAt(0);
  
  if ((charVal >= zero) && (charVal <= nine)) {
    return charVal - zero;
  }
  
  switch (hexChar) {
    case "A": case "a": {
      return 10;
    } break;
    
    case "B": case "b": {
      return 11;
    } break;
    
    case "C": case "c": {
      return 12;
    } break;
    
    case "D": case "d": {
      return 13;
    } break;
    
    case "E": case "e": {
      return 14;
    } break;
    
    case "F": case "f": {
      return 15;
    } break;
    
    default: {
      return null;
    } break;
  }
};

const decimalToHexDigitMap = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "A", "B", "C", "D", "E", "F",
]

// hex of the form #xxxxxx
// we can technically generalize this... for all strlen > 0
const hexToUInt = (hexStr) => {
  const strlen = hexStr.length;
  
  if ((strlen === 7) && (hexStr[0] === "#")) {
    // #aa aa aa
    let sum = 0;
    for (let idx = 1; idx < strlen; ++idx) {
      const dec = hexDigitToDecimalMap(hexStr[idx]);
      if (dec === null) {
        return null;
      }
      
      sum += dec * (16 ** (6 - idx));
    }
    
    return sum;
  }
  
  return null;
};

const uintToHex = (uint) => {
  let value = uint;
  const arr = [];
  while (value !== 0) {
    const r = value % 16;
    const q = Math.floor(value / 16);
    
    arr.push(decimalToHexDigitMap[r]);
    value = q;
  }
  
  return "#" + arr.reverse().join("");
};

const closeEnoughEqual = (a, b) => {
  return Math.abs(a - b) < 0.0001;
};

const hexRGBToHSV = (hexStr) => {
  const intVal = hexToUInt(hexStr);
  const R = (intVal & 0xFF0000) >> 16;
  const G = (intVal & 0x00FF00) >> 8;
  const B = (intVal & 0x0000FF) >> 0;
  
  const NR = R / 255.0;
  const NG = G / 255.0;
  const NB = B / 255.0;
  
  const maxComp = Math.max(NR, NG, NB);
  const minComp = Math.min(NR, NG, NB);
  const delta = maxComp - minComp;
  
  let hue = 0.0;
  let saturation = 0.0;
  let value = 0.0;
  
  if (closeEnoughEqual(delta, 0.0)) {
    hue = 0.0;
  } else if (maxComp === NR) {
    hue = 60 * (((NG - NB) / delta) % 6);
  } else if (maxComp === NG) {
    hue = 60 * (((NB - NR) / delta) + 2);
  } else if (maxComp === NB) {
    hue = 60 * (((NR - NG) / delta) + 4);
  }
  
  if (!closeEnoughEqual(delta, 0.0)) {
    saturation = delta / maxComp;
  }
  
  value = maxComp;

  // hsv = { [0, 360], [0, 1], [0, 1] }  
  return { hue: Math.floor(hue + 0.5), saturation, value };
};

// hsv = { [0, 360], [0, 1], [0, 1] }
const HSVToHexRGB = (hsv) => {
  const xx = Math.abs((hsv.hue / 60.0) % 2 - 1.0);
  const C = hsv.value * hsv.saturation;
  const X = C * (1.0 - xx);
  const m = hsv.value - C;
  
  const hue = hsv.hue;
  
  let R, G, B;
  
  if (hue < 60.0) {
      R = C;
      G = X;
      B = 0.0;
  } else if (hue < 120.0) {
      R = X;
      G = C;
      B = 0.0;
  } else if (hue < 180.0) {
      R = 0.0;
      G = C;
      B = X;
  } else if (hue < 240.0) {
      R = 0.0;
      G = X;
      B = C;
  } else if (hue < 300.0) {
      R = X;
      G = 0.0;
      B = C;
  } else {
      R = C;
      G = 0.0;
      B = X;
  }
  
  
  R = Math.max(Math.floor((R + m) * 255 + 0.5), 0);
  G = Math.max(Math.floor((G + m) * 255 + 0.5), 0);
  B = Math.max(Math.floor((B + m) * 255 + 0.5), 0);
  
  const RGB = (R << 16) | (G << 8) | (B << 0);
  return uintToHex(RGB);
};

export {
  hexDigitToDecimalMap,
  hexToUInt,
  uintToHex,
  hexRGBToHSV,
  HSVToHexRGB,
};