console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item){
    if (!isFull(basket)){
    basket.push(item);
    return true;
    } return false;
}

function listItems(list){
    for (let item of list)
    console.log (item);
}

function empty(list){
    //basket.length = 0;
    return basket;
}

function isFull(list){
    return (list.length < maxItems ? false : true ) ;
}
// testing addItem function
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Adding pears (expect true)', addItem('pears'));
console.log(`Basket is now ${basket}`);


// testing listItems function
console.log("Testing listing items", listItems(basket));

// testing empty function
//console.log('Testing empty - should be "[]"', empty(basket));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`);
console.log('Adding nuts (expect true)', addItem('nuts'));
console.log(`Basket is now ${basket}`);
console.log('Adding salmon (expect false)', addItem('salmon'));
console.log(`Basket is now ${basket}`);

