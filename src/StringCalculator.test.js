import { StringClaculator } from "./StringClaculator";

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
      expect(StringClaculator("")).toBe(0);
    });
  
    test('should return the number itself when one number is provided', () => {
      expect(StringClaculator("1")).toBe(1);
    });
  
    test('should return the sum of two comma-separated numbers', () => {
      expect(StringClaculator("1,5")).toBe(6);
    });
  
    test('should handle an unknown amount of numbers', () => {
      expect(StringClaculator("1,2,3,4,5")).toBe(15);
    });
  
    test('should handle new lines between numbers', () => {
      expect(StringClaculator("1\n2,3")).toBe(6);
    });
  
    test('should support different delimiters', () => {
      expect(StringClaculator("//;\n1;2")).toBe(3);
    });
  
    test('should throw an exception for negative numbers', () => {
      expect(() => StringClaculator("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });
  });