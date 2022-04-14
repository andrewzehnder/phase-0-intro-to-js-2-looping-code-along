// for (let age = 30; age <40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts; 
// }

// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]

const eventName = "surprise"

let newArray = []

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}