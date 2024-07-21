// function Add(n1, n2) {
//   return n1 + n2;
// }

// console.log(Add(10, 20));
// console.log(typeof Add(10, 20));

// console.log(Add(20, "10"));

// **********************************************

const showDetails = (name, age, country = "Egypt") => {
  return `${name} - ${age} - ${country}`;
};

console.log(showDetails("ossama"));
