// ************** type annotion of variables **********************

// let theName: string = "elzero";
// let thAge: number = 20;
// let hire: boolean = true;

// let all: any = "elzero web school";

// all = 40;

// function Add(n1: number, n2: number) {
//   return n1 + n2;
// }

// console.log(Add(10, 20));

// console.log(Add(20, 10));
// console.log(typeof Add(10, 20));

// ************** type annotion with arrays **********************

// let all: string | number | boolean = "elzero";
// all = "elzero";
// all = 30;
// all = true;

// let allFriends: string[] = ["ahmad", "ali", "lyes"];

// for (let i = 0; i < allFriends.length; i++) {
//   console.log(allFriends[i]);
// }

// let arrayOne: number[] = [1, 2, 3];
// let arrayTwo: string[] = ["A", "B", "C"];

// let arrayThree: (string | number | string[] | boolean[])[] = [

// let arrayThree: (string | number | boolean[] | (string | number[])[])[] = [
//   "A",
//   "B",
//   "C",
//   1,
//   2,
//   3,
//   ["D", "E", [1, 2]],
//   [false, true],
//

// ************************* optional and default parameters ****************************

// const showDetails = (name?: string, age?: number, country?: string) => {
//   return `${name} - ${age} - ${country}`;
// };

// console.log(showDetails());

// ****************** Function rest parameter *********************

// function AddAll(...nums: number[]) {
//   let result = 0;

//   nums.forEach((num) => (result += num));

//   return result;
// }

// console.log(AddAll(20, 30, 10, 100, 10.4));

// ************************** data type ************************

type Button = {
  up: string;
  down: string;
  left: string;
  right: string;
};

type last = Button & {
  x: number;
};

function getActions(btns: last) {
  console.log(`${btns.up}`);
  console.log(`${btns.down}`);
  console.log(`${btns.right}`);
  console.log(`${btns.left}`);
}

console.log(
  getActions({
    up: "go up",
    down: "go down",
    left: "NNNN",
    right: "nn;;",
    x: 20,
  })
);
