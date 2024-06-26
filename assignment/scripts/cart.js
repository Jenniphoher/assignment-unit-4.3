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
}; //takes all strings that was split, put them into one string and into an array

let newWord = addItem(itemArray);
console.log(`Basket is ${basket}`);
console.log(`The items have been added: ${newWord}`);



console.log('------ changing basket[] to itemArray ------');
function newArray(array) {
    array.shift();
    for(word of itemArray) {
        array.push(word);
    } return array;
}; //splitting the items as it was initially in itemArray

let newBasket = newArray(basket);
console.log(`The new list is ${newBasket}`);
console.log('------ basket[] is changed ------');



console.log(basket);
function listItems(array) {
    for(word of array) {
        console.log(`Item needed in bathroom: ${word}`);
    }
};

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
};

empty();
console.log(`The list is: ${empty()}`);



console.log('------ STRETCH GOALS ------');

const maxItems = 5; 
    
function isFull() {
    if(basket.length <= maxItems) {
        return answer = false;
    } else {
        return answer = true;
    }
};

isFull();
//console.log(alreadyFull, basket);

console.log('------ CHANGE ADDITEM FUNCTION ------');



function addItem(item) {
    isFull();
    if(answer === false) {
        basket.push(item);
        console.log(basket);
        return true;
    } else {
        console.log(`Cannot add ${item}.`);
        return false;
    }
};

console.log(`Item was added: ${addNew('mirror')} inside: ${basket}`);
console.log(`Item was added: ${addNew('toilet')}`);
console.log(`Item was added: ${addNew('toothpaste')}`);
console.log(`Item was added: ${addNew('brush')} inside: ${basket}`);
console.log(`Item was added: ${addNew('towel')}`);
console.log(`Item was added: ${addNew('showerhead')}`);
console.log(`Item was added: ${addNew('shampoo')} inside: ${basket}`);
console.log(basket);

/* function removeItem(item) {
    basket.indexOf(item);
    if() {

    } else {
        return null;
    }
} */

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
