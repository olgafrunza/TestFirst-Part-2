/* eslint-disable no-unused-vars */

function forEach(arr, funcInd) {
    for (let i = 0; i < arr.length; i++) {
        funcInd(arr[i]) //why don't use .forEach()? why whithout return? 
    }
}




let doubler = n => n * 2

function map(arr, funcMap) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(funcMap(arr[i]))
    }
    return newArr
}





function filter(arr, funkFilt) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (funkFilt(arr[i]))
            newArr.push(arr[i])
    }
    return newArr
}





function includes(collection, val) {
    for (let key in collection) {
        if (collection.hasOwnProperty(key)) { //why we use hasOwnProperty?
            if (val === collection[key]) {
                return true
            }
        }
    }
    return false
}





function countWords(num, str) {
    return num + str.split(" ").length

}







function reduce(arr, startVal, func) {
    let val = startVal
    for (let i = 0; i < arr.length; i++) {
        val = func(val, arr[i])
    }
    return val
}


function sum(arr) {                    // uses function reduce from above problem
    return reduce(arr, 0, (a, b) => a + b)
}






function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === false) {
            return false
        }
    }
    return true
}





function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return true
        }
    }
    return false
}
