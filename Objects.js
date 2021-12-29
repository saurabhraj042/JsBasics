let user = {
    name: "John",
    age: 30,
    "likes birds": true // multiword property name must be quoted
};

const owner = {
    name: "Saurabh Raj",
    age: 22,
    email: "example@gmail.com",
    rentCollected: 0,
    tenantWithNoDue: []
}
console.log(owner)

owner.age = 23 // Even if we use the const type with objects we can basically change the key-values information inside it.

console.log(owner)

delete owner.email

console.log(owner)

let copyOwner = owner; // only reference to owner object is stored inside copyOwner

// Ways to copy the actual object
for (let key in owner) {
    copyOwner[key] = owner[key];
}

copyOwner.name = 'Copy Owner'

console.log(copyOwner)

Object.assign(copyOwner, owner)

copyOwner.name = 'Copy Owner by Assign'

console.log(copyOwner)

// Add few basic functionalities of the owner

function getRentFromTenant(nameOfTenant, rentAmount) {
    this.rentCollected += rentAmount
    this.tenantWithNoDue.push(nameOfTenant)
};

owner.getRentFromTenant = getRentFromTenant;

owner.getRentFromTenant('Raj', 1000)

console.log(owner)