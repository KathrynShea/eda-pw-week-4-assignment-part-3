console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item){
    if (!isFull(basket)){
        basket.push(item);
        return true;
    }return false;
}

function listItems(list){
    for (let item of list)
        console.log (item);
}

function empty(list){
    basket.length = 0;
    return basket;
}

function isFull(list){
    return (list.length < maxItems ? false : true ) ;
}

function removeItem (item){
    for (const thing of basket){
        if(thing === item){
            basket.splice(basket.indexOf(item), 1);
            return item;
        }
    }return null 
}

// testing addItem function
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Adding pears (expect true)', addItem('pears'));
console.log(`Basket is now ${basket}`);

// testing listItems function
console.log("Testing listItems - should have listed apples and pears on different lines", listItems(basket));

// testing empty function
console.log('Testing empty - should be "[]"', empty(basket));
console.log('Basket length should be 0', basket.length);

//testing isFull function
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`);
console.log('Adding nuts (expect true)', addItem('nuts'));
console.log(`Basket is now ${basket}`);
console.log('Adding salmon (expect true)', addItem('salmon'));
console.log(`Basket is now ${basket}`);
console.log('Adding chocoloate (expect true)', addItem('chocolate'));
console.log(`Basket is now ${basket}`);
console.log('Adding peas (expect false)', addItem('peas'));
console.log(`Basket is now ${basket}`);

//testing removeItem
console.log('Test remove cheese - expecting "null"', removeItem("cheese"));
console.log(basket);
console.log('Test remove nuts - expecting "nuts"', removeItem("nuts"));
console.log(basket);

