/* eslint-disable no-unused-vars */

function indexAndValue(arr) {
    return arr.map((value, index) => {
        return { value, index }
    })
}







function capitalize(str) {
    return str.toUpperCase();
}

function swapCase(str) { //how to solve in a more understandable manner
    return str.split(' ').map((word, i) => {
        if (i % 2 === 0) return capitalize(word);
        else return word;
    }).join(' ');
};








function extensionSearch(ext, arr) {
    return arr.filter((file) => {
        if (file.includes(ext)) return file
    })
}






function getPopulation(arrOfCountries, arr) {
    function reducer(accum, obj) {
        if (arr.includes(obj.name) || arr.length === 0) {
            return accum + obj.population
        }
        return accum
    }
    return arrOfCountries.reduce(reducer, 0)
}







function keyifyArrayOfObjects(key, arr) {
    return arr.reduce((accum, obj) => {
        accum[obj[key]] = obj
        return accum
    }, {})
}








function powerLevelAverage(arr) {
    return Math.round(arr.reduce((accum, obj) => {
        return accum + obj.powerLevel
    }, 0) / arr.length)
}







function mapReduce(arr, func) {
    return arr.reduce((accum, arrIdx) => {
        accum.push(func(arrIdx))
        return accum
    }, [])
}







function filterReduce(arr, func) {
    return arr.reduce((accum, valIdx) => {
        if (func(valIdx))
            accum.push(valIdx)
        return accum
    }, [])
}





function inYourBudget(num, arr) {
    return arr.filter(obj => obj.price <= num).map(obj => obj.item)
}






function separateAndReturnNames(arr, key, lengthN) {
    return arr.map(obj => {
            let [firstName, lastName] = obj.name.split(" ")
            obj.firstName = firstName
            obj.lastName = lastName
            return obj
        })
        .filter(obj => obj[key].length <= lengthN) // Why[key] is not filtered (ex: returns only last or firstName within length limits) )
        .map(obj => obj[key])
}








function priorityTodoDuration(arr) {
    return arr
        .filter(obj => obj.priority === "high")
        .reduce((accum, obj) => {
            return accum + obj.duration
        }, 0)
}
