console.log('app js loaded') // used to confirm app is loaded
// #region array method examples
let waterBottle = {
  height: 6,
  width: 2.5,
  totalCapacity: '16oz',
  currentCapacity: '8oz',
  brand: 'codeworks',
  waterTemp: 'room',
  insulated: false
}

let couch = {
  name: 'couch',
  seats: 7,
  color: 'black',
  seatsFree: 0,
  forSale: false,
  comfy: false,
  standing: null
}
let couch2 = {
  name: 'couch',
  seats: 7,
  color: 'black',
  seatsFree: 0,
  forSale: false,
  comfy: false
}



let catArr = [
  {
    name: 'Fido',
    age: 22,
    livesLeft: 0,
    color: 'calico tapioca',
    favoriteToys: ['mouse', 'hairball', waterBottle]
  }, {
    name: 'Yoshi',
    age: 3,
    livesLeft: 0,
    color: 'Grey'
  }, {
    name: 'Morpheus',
    age: 8,
    livesLeft: Infinity,
    color: 'Brown striped'
  }
]

// initializer,    comparison,   afterthought
// the start,      the end,     the 'speed' or incrementor
for (let index = 0; index < catArr.length; index++) {
  const banana = catArr[index] // an alias
  console.log('looped', index, banana.name)
}
// (cat)alias for element of array, (i)index of that element
catArr.forEach((cat, i) => console.log(cat, i, 'for eached'))

// find gets reference to a single element of the array to operate on.
let foundByName = catArr.find(cat => cat.name == 'Yoshi')
console.log('found: ', foundByName)

// find, finds the FIRST where this is true
let foundByAge = catArr.find(cat => cat.age > 5)
console.log('found:', foundByAge);

// filter, creates a new array where it keeps all the true items
let lastLives = catArr.filter(cat => cat.livesLeft == 0)
console.log('filtered:', lastLives);

let olderCats = catArr.filter(cat => cat.age > 7)
console.log('filtered older:', olderCats);

// sort, orders the array, based on positive or negative values being returned from the function.
let sortedCats = catArr.sort((cat1, cat2) => cat2.age - cat1.age)
console.log('sorted oldest to youngest', sortedCats)
console.log('oldest cat', sortedCats[0]);
// #endregion


let animals = [
  {
    name: 'Oslo',
    emoji: '🦧',
    mammal: true,
    age: 28,
    weapon: 'intellect',
    diet: ['vegetables', 'fruits', 'bugs'],
    guilty: false
  },
  {
    name: 'Roger',
    emoji: '🦏',
    mammal: true,
    age: 12,
    weapon: 'horns',
    diet: ['vegetables'],
    guilty: false
  },
  {
    name: 'Kenny',
    emoji: '🦘',
    mammal: true,
    age: 8,
    weapon: 'limbs',
    diet: ['vegetables', 'fruits'],
    guilty: false
  },
  {
    name: 'Tanya',
    emoji: '🐅',
    mammal: true,
    age: 77,
    weapon: 'claws',
    diet: ['meats'],
    guilty: false
  },
  {
    name: 'Sid',
    emoji: '🦅',
    mammal: false,
    age: 2,
    weapon: 'claws',
    diet: ['meats', 'fishes'],
    guilty: false
  },
  {
    name: 'Manny',
    emoji: '🐒',
    mammal: true,
    age: 16,
    diet: ['fruits', 'meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'George',
    emoji: '🦍',
    mammal: true,
    age: 12,
    diet: ['fruits', 'vegetables'],
    weapon: 'limbs',
    guilty: false
  },
  {
    name: 'Orsen',
    emoji: '🦧',
    mammal: true,
    age: 22,
    diet: ['fruits', 'vegetables', 'meats'],
    weapon: 'limbs',
    guilty: false
  },
  {
    name: 'Oslo',
    emoji: '🐃',
    mammal: true,
    age: 33,
    diet: ['vegetables'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Jeff jr.',
    emoji: '🐊',
    mammal: false,
    age: 8,
    diet: ['meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Jeff sr.',
    emoji: '🐊',
    mammal: false,
    age: 23,
    diet: ['meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Madam Blackwell',
    emoji: '🐈‍⬛',
    mammal: true,
    age: 10,
    diet: ['fishes', 'vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Tony',
    emoji: '🐄',
    mammal: true,
    age: 11,
    diet: ['fruits', 'vegetables'],
    weapon: 'Horns',
    guilty: false
  },
  {
    name: 'Chomps',
    emoji: '🦖',
    mammal: false,
    age: 100000000000,
    diet: ['meats'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Buster',
    emoji: '🦕',
    mammal: false,
    age: 10000320000,
    diet: ['fruits', 'vegetables'],
    weapon: 'limbs',
    guilty: false
  },
  {
    name: 'Chuck',
    emoji: '🐓',
    mammal: false,
    age: 10,
    diet: ['vegetables'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Sarah',
    emoji: '🦥',
    mammal: true,
    age: 24,
    diet: ['fruits'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Gloria',
    emoji: '🦛',
    mammal: true,
    age: 13,
    diet: ['meats', 'vegetables'],
    weapon: 'teeth',
    guilty: false
  },
  {
    name: 'Bob',
    emoji: '🐉',
    mammal: false,
    age: 3000,
    diet: ['meats', 'vegetables', 'fruits'],
    weapon: 'horns',
    guilty: false
  },
  {
    name: 'Malinda',
    emoji: '🦞',
    mammal: false,
    age: 400,
    diet: ['meats'],
    weapon: 'claws',
    guilty: false
  },
  {
    name: 'Reggie',
    emoji: '🐢',
    mammal: false,
    age: 99,
    diet: ['vegetables'],
    weapon: 'intellect',
    guilty: false
  },
  {
    name: 'Jane',
    emoji: '🦫',
    mammal: true,
    age: 32,
    diet: ['vegetables'],
    weapon: 'teeth',
    guilty: false
  },
]

// STUB drawing
function drawAnimals() {
  let lineUpElm = document.getElementById('animal-lineup')
  // using a template resets the code to nothing when it runs, so it can be built back up
  let template = ''
  animals.forEach(animal => template += animal.emoji)
  lineUpElm.innerText = template
}

function drawSuspects(suspects) {
  let lineUpElm = document.getElementById('animal-lineup')
  let template = ''
  suspects.forEach(sus => template += sus.emoji)
  lineUpElm.innerText = template
}

function drawEveryone() {
  drawSuspects(animals)
}


// STUB filter weapon
function filterClaws() {
  let weaponedAnimals = animals.filter(animal => animal.weapon == 'claws')
  console.log(weaponedAnimals);
  drawSuspects(weaponedAnimals)
}
function filterIntellect() {
  let weaponedAnimals = animals.filter(animal => animal.weapon == 'intellect')
  console.log(weaponedAnimals);
  drawSuspects(weaponedAnimals)
}

// functions can take in 'arguments/parameters'
function filterWeapon(weaponType) {
  console.log('weaponType is:', weaponType);
  let weaponedAnimals = animals.filter(animal => animal.weapon == weaponType)
  console.log(weaponedAnimals);
  drawSuspects(weaponedAnimals)
}

// STUB filter mammals
function filterIsMammal() {
  let mammals = animals.filter(animal => animal.mammal == true)
  console.log('mammals:', mammals);
  drawSuspects(mammals)
}
function filterIsNotMammal() {
  let notMammals = animals.filter(animal => animal.mammal == false)
  console.log('notMammals:', notMammals);
  drawSuspects(notMammals)
}

// STUB sort by age
function sortAgeOldToYoung() {
  let oldToYoung = animals.sort((animalA, animalB) => animalB.age - animalA.age)
  console.log('old to young', oldToYoung);
  drawSuspects(oldToYoung)
}
function sortAgeYoungToOld() {
  let youngToOld = animals.sort((animalA, animalB) => animalA.age - animalB.age)
  console.log('young to old', youngToOld);
  drawSuspects(youngToOld)
}
// STUB sort alphabetically
// Sorry forgot how tricking this can be sometimes

// STUB filter by diet
function filterHerbivores() {
  // filter with two possible conditions to keep
  // .includes is an array methods, that returns true or false, if that array 'includes' the thing
  // ...............................................if this is true           OR          if this is true
  let herbivores = animals.filter(animal => animal.diet.includes('vegetables') || animal.diet.includes('fruits'))
  console.log('herbivores', herbivores)
  drawSuspects(herbivores)
  // for strict herbivores it gets a little crazy
  //   let herbivores = animals.filter(animal => (animal.diet.includes('vegetables') || animal.diet.includes('fruits')) && !(animal.diet.includes('meats') || animal.diet.includes('fishes') || animal.diet.includes('bugs')))
  //   console.log('herbivores', herbivores)
}

function filterCarnivores() {
  let carnivores = animals.filter(animal => animal.diet.includes('meats') || animal.diet.includes('fishes') || animal.diet.includes('bugs'))
  console.log('carnivoes', carnivores)
  drawSuspects(carnivores)
}


// STUB game logic
function doCrime() {
  let randomAnimal = animals[Math.floor(Math.random() * animals.length)]
  randomAnimal.guilty = true
  console.log(randomAnimal);
}

function getClue() {
  let guiltyAnimal = animals.find(animal => animal.guilty == true)
  // console.log(guiltyAnimal);
  let clues = ['age', 'weapon', 'diet', 'mammal']
  let randomClue = clues[Math.floor(Math.random() * clues.length)]
  // console.log(randomClue);
  let clueElm = document.getElementById('clues')
  switch (randomClue) {
    case 'age':
      console.log('age was selected');
      clueElm.innerHTML += `<p>the murderer is ${guiltyAnimal.age} years old</p>`
      break
    case 'weapon':
      console.log('weapon was selected');
      clueElm.innerHTML += `<p>the murderer used their ${guiltyAnimal.weapon}</p>`
      break
    case 'diet':
      console.log('diet was selected');
      clueElm.innerHTML += `<p>the murder eats ${guiltyAnimal.diet.join(' and ')}</p>`
      break
    case 'mammal':
      console.log('mammal was selected');
      clueElm.innerHTML += `<p>the murderer is ${guiltyAnimal.mammal ? 'a mammal' : 'not a mammal'}</p>`
      break
  }
}

function accuse() {
  let accused = window.prompt('who done it?')
  console.log(accused);
  let guiltyAnimal = animals.find(animal => animal.guilty == true)
  if (accused == guiltyAnimal.name || accused == guiltyAnimal.emoji) {
    window.alert(' you got em, good job')
  } else {
    getClue()
  }
}

// Things I want to happen when pages loads, just invoke them!
// drawAnimals()
drawSuspects(animals)
doCrime()
getClue()
