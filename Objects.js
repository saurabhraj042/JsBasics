let user = {
    name: "John",
    age: 30,
    "likes birds": true // multiword property name must be quoted
};

const owner = {
    name: "Saurabh Raj",
    age: 22,
    email: "example@gmail.com"
}
console.log(owner)

owner.age = 23 // Even if we use the const type with objects we can basically change the key-values information inside it.

console.log(owner)

delete owner.email

console.log(owner)