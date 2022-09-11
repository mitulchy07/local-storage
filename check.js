// const true1 = (a, b) => {
//     a = true;
//     b = true;
//     const result = a + b;
//     return console.log(result);
// }
// const true2 = (a, b) => {
//     a = false;
//     b = false;
//     const result = a + b;
//     return console.log(result);
// }
// const true3 = (a, b) => {
//     a = true;
//     b = false;
//     const result = a + b;
//     return console.log(result);
// }


// console.log(true1(), true2(), true3());

// const marks = 60;
// const resubmit = -5;
// console.log(!(marks > 0 || resubmit > 0));

// const person = { name: "hero", id: 101, address: "BD", postalCode: 40321 };

// console.log(Object.keys(person).length);
// const colors = { mango: 'green', grapes: 'black', organe: 'yellow' };
// console.log(colors.grapes)


const products = [
    { name: "samsung", model: "u300", price: 1200 },
    { name: "apple", model: "iphone", price: 1600 },
    { name: "Oppo", model: "noIdea", price: 1800 },
    { name: "OnePlus", model: "OnePlus4", price: 4500 },
    { name: "Nothing", model: "UDontKon", price: 7500 },
    { name: "vivo", model: "OffJahh", price: 5600 },
]

const model = products.map(product => product.model);

console.log(model);