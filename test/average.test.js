import calculerMoyenne from '../src/average.js';

describe('calculerMoyenne', () => {
   test('should check if the input is an array', () => {
       const array = [1, 2, 3, 4, 5];
       expect(Array.isArray(array)).toBe(true);
   });

   test('should calculate the average of an array of numbers', () => {
       const array = [1, 2, 3, 4, 5];
       const result = calculerMoyenne(array);
       expect(result).toBe(3);
   });

   test('should return a number as the average', () => {
       const array = [1, 2, 3, 4, 5];
       const result = calculerMoyenne(array);
       expect(typeof result).toBe('number');
   });
});