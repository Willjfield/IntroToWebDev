let selectedDiv = document.getElementById('select-me');
console.log(selectedDiv);



//console.log(x*y);

// let multiply = function(){
//     console.log(x*y);
// }
//let product;

function multiply(firstNumber, secondNumber) {

    let product = firstNumber * secondNumber;
    return product;
    //console.log(firstNumber*secondNumber);
}

// let multiply = ()=>{
//     console.log(x*y);
// }


let x = 2;
let y = 3;

function divide(numerator, denominator) {

    return numerator / denominator;
}

function logSomething(){
    console.log('something')
}

function logAnything(placeholder){
    console.log(placeholder)
}

function outputAnyNumberPlus1(placeholderNum){
    return placeholderNum +1;
}

let eightplusone = outputAnyNumberPlus1(8);

console.log(eightplusone);

function runThisFunction(functionPlaceholder){
    console.log('start');
    //do a bunch of things
    functionPlaceholder();
}

runThisFunction(function(){
    console.log(2+1)
})
//logAnything([12,41])

let result = divide(x, y);

console.log(result)

let newProduct = multiply(x, y);
console.log(newProduct);

let movieArray = ["Indiana Jones", "Ghostbusters", "Star Wars", "Inception"];
console.log(movieArray[0]);

movieArray.push("El Topo");

console.log(movieArray.length)

for (let movieIndex = 0; movieIndex < movieArray.length; movieIndex++) {
    console.log(movieArray[movieIndex])
}

//movieArray.forEach();

movieArray.forEach(
    function (item, index) {
        console.log(movieArray[0]);
        console.log(item[0]);
        // if (item[0] === 'I') {
        //     movieArray[index] = "I liked " + item;
        // } else {
        //     movieArray[index] = "I didn't like " + item;
        // }
    }
);

console.log(movieArray)
//let newArray = movieArray.slice(0,movieArray.indexOf("Star Wars")+1);

//console.log(newArray)

let myName = "Will Field";
console.log(myName[2]);

const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

let header = document.createElement('h1');
let title = document.createTextNode("Mountains");
header.appendChild(title);

let htmlContainer = document.getElementById("select-me");
htmlContainer.appendChild(header);


MOUNTAINS.forEach(function (item) {
    
    let mountainDiv = document.createElement('div');
    let mountainName = document.createTextNode(item.name);
    mountainDiv.appendChild(mountainName);

    htmlContainer.appendChild(mountainDiv);

    let heightBar = document.createElement('div');
    heightBar.className = "height-bar";

    const displayHeight = item.height/50;

    heightBar.style.width = displayHeight+"px";

    htmlContainer.appendChild(heightBar);


    //Create a new 'div' element and assign it to a variable
    //Create a new text node referencing the mountain name (hint: mountain.name) and assign it to a variable

    //use appendChild to append the new text node to the new div (which you can reference as the variable you assigned it to)
    //use appendChild to append the new div to htmlContainer (hint: already assigned as a variable above, outside the forEach loop)
});