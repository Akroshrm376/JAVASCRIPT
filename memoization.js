// // Memoization function
// function memoize(func) {
//     const cache = {}; // Cache to store previously computed results
//     return function(...args) {
//         const key = JSON.stringify(args); // Create a unique key based on arguments
//         if (cache[key] === undefined) {
//             // If the result is not in the cache, compute it and store it
//             cache[key] = func(...args);
//         }
//         return cache[key]; // Return the cached result
//     };
// }
// // Function to memoize
// function sum(a, b) {
//     console.log("Calculating sum...");
//     return a + b;
// }
// // Memoized sum function
// const memoizedSum = memoize(sum);
// // Test the memoized sum function
// console.log(memoizedSum(3, 4)); // Output: Calculating sum... 7
// console.log(memoizedSum(3, 4)); // Output: 7 (No "Calculating sum..." message, result is retrieved from cache)
const memo = (rec_function) => {
  console.log("first step in memo");
  let memory = {};
  return function (...args) {
    console.log("2nd step in returning function");
    let key = JSON.stringify(args);
    console.log("memory object before: ", memory);
    if (memory[key] === undefined) {
      console.log("3rd step if its not in memory");
      memory[key] = rec_function(...args);
    }
    console.log("memory object after : ", memory);
    console.log("4th step  in memory");
    return memory[key];
  };
};
const sum = (a, b) => {
  return a + b;
};
let memoization = memo(sum);
console.log("first", memoization(3, 6));
console.log("second", memoization(3, 6));
