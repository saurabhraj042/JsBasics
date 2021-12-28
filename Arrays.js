/**
 *  Array manipulation in Js.
 */

let demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(demoArray)

// allows to run a function for every element of the array.
demoArray.forEach(element => {
    console.log(element)
})

// Method to map elements of one array into another.
let copyArray = demoArray.map(element => {
    return element * 2
})

console.log(copyArray)

// Method looks for elements that makes the function return true.
copyArray = demoArray.filter(element => {
    if (element > 5)
        return true
    else
        return false
})

console.log(copyArray)

const key = 10
let findKey = copyArray.find(element => {
    if (element == key)
        return true
})

console.log(findKey)

// Using reduce method to find sum of the array
let resOfReduce = copyArray.reduce((accumulator, currentVal) => {
    return accumulator + currentVal
}, 0)

console.log(resOfReduce)