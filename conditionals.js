const raining = true;
const cold = false;

/*
if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

const temp = 16;

if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");