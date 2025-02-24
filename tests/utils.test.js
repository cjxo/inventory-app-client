import {
  hexDigitToDecimalMap,
  hexToUInt,
  uintToHex,
  hexRGBToHSV,
  HSVToHexRGB,
} from "../src/lib/utils";

describe("hex functions test", () => {
  test("hexDigitToDecimalMap", () => {
    const str = "0123456789ABCDEFabcdef";
    const vals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,10,11,12,13,14,15];
    
    vals.forEach((value, idx) => {
      expect(hexDigitToDecimalMap(str[idx])).toBe(value);
    });
    
    expect(hexDigitToDecimalMap("K")).toBe(null);
    expect(hexDigitToDecimalMap(")")).toBe(null);
  });
  
  test("hexToUInt", () => {
    expect(hexToUInt("#FFFFFF")).toBe(0xFFFFFF);
    expect(hexToUInt("#894F99")).toBe(0x894F99);
    expect(hexToUInt("#894L99")).toBe(null);
  });
  
  test("uintToHex", () => {
    expect(uintToHex(0xFFFFFF)).toBe("#FFFFFF");
    expect(uintToHex(0x894F99)).toBe("#894F99");
  });
});