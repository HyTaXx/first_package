/**
 * Calcule la moyenne des valeurs dans un tableau.
 * @param {number[]} array - Le tableau contenant les nombres.
 * @throws {Error} Lance une erreur si l'entrée n'est pas un tableau ou si le contenu n'est pas correct.
 * @return {number} La moyenne des nombres dans le tableau.
 */
function calculerMoyenne(array) {
  if (!Array.isArray(array) || array.some(val => typeof val !== 'number')) {
    throw new Error('Input must be an array of numbers');
  }

  var somme = array.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  return somme / array.length;
}

export default calculerMoyenne;