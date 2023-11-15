let heading = document.getElementById('heading')
let prgrph = document.querySelector('.paragraph')
let firstH3 = document.querySelector('h3')
let prgrph2 = document.querySelectorAll('p')
let input1 = document.querySelector('[data-firstmultiply]')
let input2 = document.querySelector('[data-secondmultiply]')
let btn1 = document.querySelector('[data-calculate1]')
let span = document.querySelector('[data-first]')
let mInput1 = document.querySelector('[data-firstmodulus]')
let mInput2 = document.querySelector('[data-secondmodulus]')
let span2 = document.querySelector('[data-second]')
let btn2 = document.querySelector('#calculate2')
let list = document.querySelectorAll('li')
let lastName = 'Mnqika'
let parentsAge = 20
let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

let carSection = document.querySelector('#cars')

coolCars[3] = 'Lamborghini'

list[0].textContent = 'White Tea'
list[1].textContent = 'Black Tea'
list[3].textContent = 'Herbal Tea'

for (let i = 0; i < coolCars.length; i++) {
   console.log(coolCars[i]);
}

console.log(coolCars.reverse());

let removedCar = coolCars.reverse().pop();
console.log(removedCar);

console.log(coolCars.unshift(removedCar))
console.log(coolCars);

let age = 18;
let a = 17;
if (age > a) {
    console.log('You are 18 years and older');
} else{
    console.log('You are younger than 18');
}



let maths = 77;
let physics = 70;
let english = 50;

let averageMark = maths + physics + english;

parentsAge = 0;
while (parentsAge <= 20) {
    console.log(parentsAge);
    parentsAge++;
}

let x = 0

do {
    console.log(coolCars[x]);
    x++
} while (x <= coolCars.length);


let chair = {
    legs: 4,
    material: 'plastic'
}
console.log(chair);

chair['armRestBar'] = 'none'
console.log(chair);

console.log(chair.armRestBar);

delete chair.legs

console.log(chair)

function electricalDevices(name, type, year, description) {
    return {
        name: name,
        type: type,
        year: year,
        description: description
    }
}

let device1 = electricalDevices('Samsung Galaxy', 'A51', 2023, 'Smartphone with 5G  network and a 36 hour battery-span')
let device2 = electricalDevices('iPhone', '13 Pro', 2022, 'Smartphone with 36 hour battery-span and HD quality camera')
let device3 = electricalDevices('MacBook', 'Air', 2023, 'Smartphone notebook laptop with high speed CPU and soft keyboard')
let device4 = electricalDevices('Lenovo', 'IdeaPad', 2023, 'Smartphone notebook laptop with high speed CPU and built-in SSD with and 8GB RAM')

console.log(device1);
console.log(device2);
console.log(device3);
console.log(device4);

function Cars(brand, model, year, transmission, drivetrains) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.drivetrains = drivetrains;
}

let car1 = new Cars('Mazda', '323', 2009, 'Automatic', 'Rear Wheel Drive(RWD)')
let car2 = new Cars('BMW', '320i', 2009, 'Automatic', 'Front Wheel Drive(FWD)')
let car3 = new Cars('Mercedes Benz', 'C-Class', 2019, 'Automatic', 'Rear Wheel Drive(RWD)')
let car4 = new Cars('Porsche', '911', 2009, 'Automatic', 'All Wheel Drive(AWD)')

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

let numbers = [5, 18, 14, 16, 2, 1]

if (numbers.length % 2 === 0) {
    console.log(numbers[1], numbers[2]);
} else {
    console.log(numbers[2]);
}


function multiply() {chair
    let result = input1.value * input2.value
    return span.innerText = eval(result)
}
function remainder() {
    let output = mInput1.value%mInput2.value;
    return span2.innerText = eval(output)
}

btn1.addEventListener('click',() => {multiply()
})

btn2.addEventListener('click', () => {
    remainder()
})

heading.innerText = 'Javascript';
prgrph.textContent = 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself';
firstH3.innerText = "Things I've accomplished so far"
prgrph2.forEach(function() {
    prgrph2[1].innerText = 'I have discovered that I can accomplish anything I put my mind to'
})

// age = +prompt('Enter Age');
// a = 17;
// if (age > a) {
//     carSection.textContent = 'You are 18 years and older';
// } else{
//     carSection.textContent = 'You are younger than 18'
// }

switch (true) {
    case age > a:
        console.log('You are 18 years and older');
        break;

    default:
        console.log('You are younger than 18');
}

