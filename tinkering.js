/*function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}*/
/*
const { arrayBuffer } = require("stream/consumers");
*/
/*let price = 15;
let money = 10;
if (price <= money) {
  console.log("buy the stuff");
} else {
  console.log("don't buy the stuff");
}*/



//Loopy assignment
/*
for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}
*/


//for...of practice
/*
const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
*/

/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

*/

/*
let favoriteMovie = function(movieName) {
  console.log("My favorite movie is " + movieName);
}

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(favoriteMovie, "finding nimo");
*/

// function expressions that pass a function into another function inline

/*
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nimo");
*/


// emotions() function definition
/*
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound += "ha" ;  
  }
  sound += "!"; 
  return sound; 
});
*/

/*
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
*/

/*
const finalPosition = function (moves) {
  const array = [];
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === "north") {
      y += 1;
    } else if (move === "south") {
      y -= 1
    } else if (move === "west") {
      x -= 1
    } else if (move === "east") {
      x += 1
    }
  }
  array.push(x, y)
  return array;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

*/

/*
function ageCalculator (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/

/*
function howManyHundreds (bottles) {
  return Math.floor(bottles / 100)
}

console.log(howManyHundreds(894))


function howManyHundreds (bottles) {
  const remainder = bottles % 100;
  return (bottles - remainder) / 100
}

console.log(howManyHundreds(1000))



function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {
    return length * width
  } 
}

function calculateTriangleArea(base, height) {
  if (base >= 0 && height >= 0) {
    return base * height / 2
  } 
}

function calculateCircleArea(radius) {
  if (radius >= 0) {
    return Math.PI * (radius*radius)
  } 
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined



let donuts = ['mochi', 'chocolate', 'glazed']

donuts.forEach(function(donut) {
  donut += " donut hole";
  donut = donut.toUpperCase();
  console.log(donut);
});



words = ['cat', 'in', 'hat'];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
})



let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);



function range(start, end, step) {
  let someArray = [];
  if (start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      someArray.push(i)
    }
    return someArray
  } else {
    return someArray
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 20, 0));
*

const lastIndexOf = function(array, value) {
  for (let i = array.length-1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


let concat = function(array1, array2) {
  let result = [];
  for (let i = 0; i <= array1.length - 1; i++) {
    result.push(array1[i])
  }
  for (let j = 0; j <= array2.length - 1; j++) {
    result.push(array2[j])
  }
  return result;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins.recycling = bins.recycling + 1;
  } else if (trash === "waste") {
    bins.waste = bins.waste + 1;
  } else if (trash === "compost") {
    bins.compost = bins.compost + 1
  }
  return bins
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });




const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

const carPassing = function (cars, speed) {
  cars.push({time: Date.now(), speed: speed})
  return cars;
}

carPassing(cars, speed)


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 15
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 15,
    plumpness: 3
  }
]

const metric = 'plumpness'



const judgeVegetable = function (vegetables, metric) {
  if (metric === "plumpness") {
    vegetables.sort(function(a, b) {
    return a.plumpness < b.plumpness;
  })} else if (metric === "redness") {
    vegetables.sort(function(a, b) {
    return a.redness < b.redness;
  })}
  return vegetables[0].submitter;
}

console.log(judgeVegetable(vegetables, metric))


const sumLargestNumbers = function (data) {
  data.sort(function (a, b) {
    return a < b;
  })
  return data[0] + data[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));



const conditionalSum = function (values, condition) {
  let arr = [];
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        arr.push(values[i]);
      }
    }
  } else if (condition === "odd") {

    for (let j = 0; j < values.length; j++) {
      if (values[j] % 2 !== 0) {
        arr.push(values[j]);
      }
    }
  }
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0);
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


const conditionalSum = function (values, condition) {
  let arr = [];
  if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        arr.push(values[i]);
      }
    }
  } return arr;
}

console.log(conditionalSum([13, 88, 12, 44, 99, 0, 3], "odd"));


const numberOfVowels = function (data) {
  let vowels = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      vowels.push(data[i])
    }
  }
  return vowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


const instructorWithLongestName = function(instructors) {
  return (instructors.reduce((longestName, other) => other.name.length > longestName.name.length ? other : longestName))
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

const judgeVegetable = function (vegetables, metric) {
  return (vegetables.reduce((bestVeggie, other) => other[metric] > bestVeggie[metric] ? other : bestVeggie).submitter)
}



const urlEncode = function (text) {
  let newUrl = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      if (i === 0 || i === text.length-1) {
        newUrl += '';
      } else {
        newUrl += "%20";
      }
    } else {
      newUrl += text[i];
    } 
  }
  return newUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));



const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      const spot = spots[y][x]
      if (vehicle === "regular") {
        if (spot === "R") {
          return [x, y];
        }
      } else if (vehicle === "small") {
        if (spot === "R" || spot === "S") {
          return [x, y];
        }
      } else if (vehicle === "motorcycle") {
        if (spot === "R" || spot === "S" || spot === "M") {
          return [x, y];
        }
      }
    }
  }
  return false;

};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))


const checkAir = function (samples, threshold) {
  let dirty = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirty++;
    }
  }
  let dirtLev = dirty / samples.length;
  if (dirtLev >= threshold) {
    return "Polluted";
  }
  return "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1]) {
      console.log(words[0] + words[1])
    } else if (i % multiples[0] === 0) {
      console.log(words[0])
    } else if (i % multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(i)
    }
  }
}



loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


const merge = function (arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr.push(arr2[j]);
  }
  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}


console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);


const repeatNumbers = function (data) {
  let Str = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      Str += data[i][0]
      if (j === data[i][1] - 1 && i !== data.length - 1) {
        Str += ', '
      }
    }
  }
  return Str
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));



const camelCase = function (input) {
  let camel = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === ' ') {
      camel += input[i].toUpperCase()
    } else if (input[i] === ' ') {
      camel += ''
    } else {
      camel += input[i]
    }
  }
  return camel
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


const multiplicationTable = function (maxValue) {
  let result = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      result += (i * j) + ' ';
    }
    result += '\n'
  }
  return result;
};


var result = '\n';
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
    
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * radius * radius * radius
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * radius * radius * (height / 3)
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth
}

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function (solids) {
  let total = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i].type === "sphere") {
      total += sphereVolume(solids[i].radius)
    } else if (solids[i].type === "cone") {
      total += coneVolume(solids[i].radius, solids[i].height)
    } else if (solids[i].type === "prism") {
      total += prismVolume(solids[i].height, solids[i].width, solids[i].depth)
    }
  }
  return total;
}


const totalVolume = function (solids) {
  let total = 0;
  for (const solid of solids) {
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius)
    } else if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height)
    } else if (solid.type === "prism") {
      total += prismVolume(solid.height, solid.width, solid.depth)
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(totalVolume(duck))




const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  const ingredientCheck = function (bakery, ingredients) {
    for (let ingredient of ingredients) {
      if (bakery.includes(ingredient)) {
        return true;
      }
    }
    return false;
  }
  for (let recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients) && ingredientCheck(bakeryB, recipe.ingredients)) {
      return recipe.name;
    }
  }
  return false;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


const talkingCalendar = function (date) {
  let result = '';
  if (date[5] === '0' && date[6] === '1') {
    result += 'January ';
  } else if (date[5] === '0' && date[6] === '2') {
    result += 'February ';
  } else if (date[5] === '0' && date[6] === '3') {
    result += 'March ';
  } else if (date[5] === '0' && date[6] === '4') {
    result += 'April ';
  } else if (date[5] === '0' && date[6] === '5') {
    result += 'May ';
  } else if (date[5] === '0' && date[6] === '6') {
    result += 'June ';
  } else if (date[5] === '0' && date[6] === '7') {
    result += 'July ';
  } else if (date[5] === '0' && date[6] === '8') {
    result += 'August ';
  } else if (date[5] === '0' && date[6] === '9') {
    result += 'September ';
  } else if (date[5] === '1' && date[6] === '0') {
    result += 'October ';
  } else if (date[5] === '1' && date[6] === '1') {
    result += 'November ';
  } else if (date[5] === '1' && date[6] === '2') {
    result += 'December ';
  } else {
    console.log("Invalid Month")
  }

  if (date[8] === '0' && date[9] === '1') {
    result += '1st, ';
  } else if (date[8] === '0' && date[9] === '2') {
    result += '2nd, ';
  } else if (date[8] !== '1' && date[9] === '1') {
    result += date[8] + date[9] + 'st, '
  } else if (date[8] !== '1' && date[9] === '2') {
    result += date[8] + date[9] + 'nd, '
  } else {
    result += date[8] + date[9] + 'th, '
  }

  result += date[0] + date[1] + date[2] + date[3];

  return result;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/01"));
console.log(talkingCalendar("1987/08/22"));



const calculateChange = function (total, cash) {
  let changeArr = {};
  let change = cash - total;
  while (change > 0) {
    if (change >= 2000) {
      changeArr.twentyDollars = changeArr.twentyDollars + 1 || 1;
      change -= 2000;
    } else if (change >= 1000) {
      changeArr.tenDollars = changeArr.tenDollars + 1 || 1;
      change -= 1000;
    } else if (change >= 500) {
      changeArr.fiveDollars = changeArr.fiveDollars + 1 || 1;
      change -= 500;
    } else if (change >= 200) {
      changeArr.twoDollars = changeArr.twoDollars + 1 || 1;
      change -= 200;
    } else if (change >= 100) {
      changeArr.OneDollar = changeArr.OneDollar + 1 || 1;
      change -= 100;
    } else if (change >= 25) {
      changeArr.quarter = changeArr.quarter + 1 || 1;
      change -= 25;
    } else if (change >= 10) {
      changeArr.dime = changeArr.dime + 1 || 1;
      change -= 10;
    } else if (change >= 5) {
      changeArr.nickel = changeArr.nickel + 1 || 1;
      change -= 5;
    } else if (change >= 1) {
      changeArr.penny = changeArr.penny + 1 || 1;
      change -= 1;
    }
  }
  return changeArr;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));



const organizeInstructors = function (instructors) {
  let sortedArr = {};
  for (let i = 0; i < instructors.length; i++) {
    if (!sortedArr[instructors[i].course]) {
      sortedArr[instructors[i].course] = [];
    }
    sortedArr[instructors[i].course].push(instructors[i].name)
  }
  return sortedArr;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

expected output
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}



const camelCase = input => {
  let output = '';
  for (let j = 0; j < input.length; j++) {
    if (input[j - 1] === ' ') {
      output += input[j].toUpperCase()
    } else if (input[j] === ' ') {
      output += ''
    } else {
      output += input[j]
    }
  }
  return output;
}

const pascalCase = input => {
  let output = ''
  for (let j = 0; j < input.length; j++) {
    if (input[j - 1] === ' ' || j === 0) {
      output += input[j].toUpperCase()
    } else if (input[j] === ' ') {
      output += ''
    } else {
      output += input[j]
    }
  }
  return output;
}

const snakeCase = input => {
  let output = ''
  for (let j = 0; j < input.length; j++) {
    if (input[j] === ' ') {
      output += '_'
    } else {
      output += input[j];
    }
  }
  return output;
}

const kebabCase = input => {
  let output = ''
  for (let j = 0; j < input.length; j++) {
    if (input[j] === ' ') {
      output += '-'
    } else {
      output += input[j];
    }
  }
  return output;
}

const titleCase = input => {
  let output = ''
  for (let j = 0; j < input.length; j++) {
    if (input[j - 1] === ' ' || j === 0) {
      output += input[j].toUpperCase()
    } else {
      output += input[j];
    }
  }
  return output;
}

const vowelCase = input => {
  let output = ''
  for (let j = 0; j < input.length; j++) {
    if (input[j] === 'a' || input[j] === 'e' || input[j] === 'i' || input[j] === 'o' || input[j] === 'u') {
      output += input[j].toUpperCase()
    } else {
      output += input[j];
    }
  }
  return output;
}

const consonantCase = input => {
  let output = ''
  for (let j = 0; j < input.length; j++) {
    if (input[j] !== 'a' && input[j] !== 'e' && input[j] !== 'i' && input[j] !== 'o' && input[j] !== 'u') {
      output += input[j].toUpperCase()
    } else {
      output += input[j];
    }
  }
  return output;
}

const upperCase = input => input.toUpperCase();

const lowerCase = input => input.toLowerCase();

const caseTypes = {
  camel: {
    priority: 1,
    process: camelCase
  },
  pascal: {
    priority: 1,
    process: pascalCase
  },
  snake: {
    priority: 1,
    process: snakeCase
  },
  kebab: {
    priority: 1,
    process: kebabCase
  },
  title: {
    priority: 1,
    process: titleCase
  },
  vowel: {
    priority: 2,
    process: vowelCase
  },
  consonant: {
    priority: 2,
    process: consonantCase
  },
  upper: {
    priority: 3,
    process: upperCase
  },
  lower: {
    priority: 3,
    process: lowerCase
  }
};


const makeCase = function (input, caseType) {
  let output = ''
  if (typeof caseType === "string") {
    output += caseTypes[caseType].process(input)
  } else if (typeof caseType === "object") {
    caseType.sort((a, b) => caseTypes[a].priority - caseTypes[b].priority);
    output = input
    for (let i = 0; i < caseType.length; i++) {
      output = caseTypes[caseType[i]].process(output)
    }
  }
  return output;
}


const makeCase = function (input, caseType) {
  let output = input;
  if (typeof caseType === "string") {
    output = caseTypes[caseType].process(input)
  } else if (typeof caseType === "object") {
    caseType.sort((a, b) => caseTypes[a].priority - caseTypes[b].priority);
    for (let i = 0; i < caseType.length; i++) {
      output = caseTypes[caseType[i]].process(output)
    }
  }
  return output;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


const urlDecode = function (text) {
  let decodedUrl = {};
  let newText = text.split("&")
  for (let i = 0; i < newText.length; i++) {
    newText[i] = newText[i].split("=")
    for (let j = 0; j < newText[i].length; j++) {
      newText[i][j] = newText[i][j].replace(/%20/g, ' ')
    }
    if (!(newText[i][0] in decodedUrl)) {
      decodedUrl[newText[i][0]] = newText[i][1];
    }
  }
  return decodedUrl
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

const squareCode = function(message) {
  let finSquCode = ''
  let square = [];
  let newMessage = ''
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      newMessage += ''
    } else {
      newMessage += message[i]
    }
  }
  let column = Math.ceil(Math.sqrt(newMessage.length))
  while (newMessage) {
    if (newMessage.length < column) {
      square.push(newMessage);
      break;
    } else {
      square.push(newMessage.substring(0, column));
      newMessage = newMessage.substring(column)
    }
  }
  for (let j = 0; j < column; j++) {
    for (let k = 0; k < square.length; k++) {
      if (square[k][j]) {
        finSquCode += square[k][j]
      }
    }
    finSquCode += ' '
  }
  return finSquCode
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0])
  }
  const changeNum = function (location) {
    for (let i = 0; i < board.length; i++) {
      if (i === location[0]) {
        for (let j = 0; j < board[i].length; j++) {
          if (j === location[1]) {
            board[i][j] = 1;
          }
        }
      }
    }
    return board;
  }
  changeNum(whiteQueen)
  changeNum(blackQueen)
  return board;
}

const queenThreat = function(generatedBoard) {
  let canAttack = false;
  if (whiteQueen !== blackQueen) {
    if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
      canAttack = true;
    }
    let diag = (Math.abs(whiteQueen[0] - blackQueen[0]) / Math.abs(whiteQueen[1] - blackQueen[1])) === 1;
    if (diag) {
      canAttack = true;
    }
  }
  return canAttack;
}


let whiteQueen = [0, 5];
let blackQueen = [0, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));



let position = 0;

const checkInitialPosition = function (direction) {
  if (direction === "right") {
    position = 1
  } else if (direction === "left") {
    position = 0
  }
}

const checkPosition = function (direction) {
  if (direction === "right") {
    if (position === 3) {
      position = 0
    } else {
      position += 1
    }
  } else if (direction === "left") {
    if (position === 0) {
      position = 3
    } else {
      position -= 1
    }
  }
}

const blocksAway = function (directions) {
  let output = {
    east: 0,
    north: 0
  }

  for (let i = 0; i < directions.length; i++) {
    if (i % 2 === 0) {
      if (i === 0) {
        checkInitialPosition(directions[i])
      } else {
        checkPosition(directions[i])
      }
    } else {
      switch (position) {
        case 0:
          output.north += directions[i]
          break;
        case 1:
          output.east += directions[i]
          break;
        case 2:
          output.north -= directions[i]
          break;
        case 3:
          output.east -= directions[i]
          break;
      }
    }
  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
*/

let prompt = require("prompt-sync")();
let secretNum = Math.floor(Math.random() * 100);
let guessCount = 0;
let prevGuesses = [];

while (true) {
  let answer = prompt("Guess a number: ");
  answer = Number(answer)
  if (isNaN(answer)) {
    console.log("Please enter numbers only.")
    continue;
  }
  if (prevGuesses.includes(answer)) {
    console.log("You guessed it already!")
    continue;
  }
  if (!prevGuesses.includes(answer)) {
    guessCount++
    prevGuesses.push(answer)
    if (answer > secretNum) {
      console.log("Too high!")
    } else if (answer < secretNum) {
      console.log("Too low!")
    }
  }
  if (answer === secretNum) {
    if (guessCount === 1) {
      console.log("Yay! You got it! You took " + guessCount + " attempt!")
    } else {
      console.log("Yay! You got it! You took " + guessCount + " attempts!")
    }
    break;
  }
}







