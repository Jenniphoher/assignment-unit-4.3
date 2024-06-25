console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
let input = prompt('3 items needed in the bathroom with a comma and no space:');
let itemArray = input.split(',');

function addItem(array) {
    i = 0;
    word = array[0];
    while(i<array.length - 1) {
        i++
        word += array[i];
    } basket.push(word);
    return true;
} //takes all strings that was split, put them into one string and into an array

let newWord = addItem(itemArray);
console.log(`Basket is ${basket}`);
console.log(`The items have been added: ${newWord}`);



console.log('------ changing basket[] to itemArray ------');
function newArray(array) {
    array.shift();
    for(word of itemArray) {
        array.push(word);
    } return array;
} //splitting the items as it was initially in itemArray

let newBasket = newArray(basket);
console.log(`The new list is ${newBasket}`);
console.log('------ basket[] is changed ------');



console.log(basket);
function listItems(array) {
    for(word of array) {
        console.log(`Item needed in bathroom: ${word}`);
    }
}

listItems(basket);
console.log('------ lists items separately ------');



console.log(`This is the current list: ${basket}`);

function empty() {
    i = basket.length;
    while (i > 0) {
        basket.pop();
        i--;
    } if(i === 0) {
        console.log(basket);
        return basket.length;
    } else {
        console.log(basket);
        return 'occupied.';
    } 
}

empty();
console.log(`The list is: ${basket}`);



console.log('------ STRETCH GOALS ------');



function addItem(item) {
    const maxItems = 5; //Q1: don't understand why it returns as undefined when called from outside function vs inside. Arrays can be called from outside, so why not variables?
    function isFull() {
        if(basket.length <= maxItems) {
            return false;
        } else {
            return true;
        }
    } if(isFull() === false) {
        basket.push(item);
        console.log(basket);
        return true;
    } else {
        console.log(`Cannot add ${item}. ${isFull()}`);
        return false;
    }
}

console.log(`Item was added: ${addItem('mirror')}`);
console.log(`Item was added: ${addItem('toilet')}`);
console.log(`Item was added: ${addItem('toothpaste')}`);
console.log(`Item was added: ${addItem('brush')}`);
console.log(`Item was added: ${addItem('towel')}`);
console.log(`Item was added: ${addItem('shower head')}`);



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
