/**
 * JavaScript supports all the primitive data types including some special ones.
 */

let userName = 'Raj' // String type
let userID = 123 // Integer
let userWeight = 85.6 // Float
let isUserMale = true // Boolean

const INFINITY = 1 / 0
let NAN = "String" / 2 //It represents a computational error

let NULL = null // Data type that represents "nothing", "empty" or "unknown value"
let UNDEFINED // If a variable is declared, but not assigned, then its value is undefined

let Object = {
        "key-name": "value1",
        keyname: "value2"
    } // Object is more like a user defined data type that stores key value pairs.

// Ways to access information inside Objects
console.log(Object.keyname)
console.log(Object['key-name'])