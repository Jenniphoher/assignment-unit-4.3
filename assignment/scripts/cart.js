console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
let input = prompt('3 items needed in the bathroom with a comma and no space:');
let itemArray = input.split(','); // returns like this ==> 'mirror', 'brush', 'paste'

function addItem(array) {
    i = 0;
    word = array[0]; // automatically adds 'mirror' into array first because when using FOR, I was getting 'mirror' twice ==> 'mirrormirrorbrushpaste'
    while(i<array.length - 1) {
        i++;
        word += array[i]; // adds remaining 'brush' and 'paste' to word[0] which is 'mirror'
    } basket.push(word); // pushes 'mirrorbrushpaste'
    return true;
}; //takes all strings that was split, put them into one string and into an array
// 'mirror', 'brush', 'paste' no checkmark ===> 'mirrorbrushpaste' gets me green checkmark

console.log(`The items have been added: ${addItem(itemArray)}`);
console.log(`Basket is ${basket}`);



console.log('------ changing basket[] to itemArray ------');
function ItemArray(array) {
    array.shift();
    for(word of itemArray) {
        array.push(word);
    } return array;
}; //splitting the items as it was initially in itemArray

let ItemBasket = ItemArray(basket);
console.log(`The Item list is ${ItemBasket}`);
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
    while (basket.length > 0) {
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
    if(basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
};

isFull();

console.log('------ CHANGE ADDITEM FUNCTION ------');



let newItem = function addItem(item) {
    let answer = isFull();
    if(answer === false) {
        basket.push(item);
        console.log(basket);
        return true;
    } else {
        console.log(`Cannot add ${item}.`);
        return false;
    }
}; // I couldn't update addItem without it interfering with the old addItem. 

console.log(`Item was added: ${newItem('mirror')} inside: ${basket}`);
console.log(`Item was added: ${newItem('toilet')}`);
console.log(`Item was added: ${newItem('toothpaste')}`);
console.log(`Item was added: ${newItem('brush')} inside: ${basket}`);
console.log(`Item was added: ${newItem('towel')}`);
console.log(`Item was added: ${newItem('showerhead')}`);
console.log(`Item was added: ${newItem('shampoo')} inside: ${basket}`);
console.log(basket);

console.log('------ REMOVEITEM FUNCTION ------');


console.log(basket);
function removeItem(item) {
    let x = basket.indexOf(item);
    for(i=0; i<basket.length; i++) {
        if(x === i) {
            let word = basket.splice(i, 1);
            return word[word.indexOf(item)];
        } 
    } console.log(`${item} not found.`);
    return null;
}

console.log(removeItem('towel'));
console.log(removeItem('hairclip'));
console.log(basket);

console.log('------ END ------');

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
