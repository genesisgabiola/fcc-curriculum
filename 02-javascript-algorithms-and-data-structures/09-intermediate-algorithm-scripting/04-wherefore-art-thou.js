/**
 * Challenge: Wherefore art thou
 *
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
 * Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 *
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */

// Solution 1: Using for loop, filter() and hasOwnProperty() method
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);
  return collection.filter(obj => {
    for (let i = 0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// Solution 2: Using filter(), every() and hasOwnProperty() method
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);

  return collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// Solution 3: Using filter(), map(), hasOwnProperty() and reduce() method
function whatIsInAName(collection, source) {
  const srcKeys = Object.keys(source);

  return collection.filter(obj => {
    return srcKeys.map(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    }).reduce((a, b) => {
      return a && b;
    });
  });
}

whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }); // [{ first: 'Tybalt', last: 'Capulet' }]
