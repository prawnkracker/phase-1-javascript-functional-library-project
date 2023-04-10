function myEach(collection, callback){
    const values = Object.values(collection)
    values.forEach(item => callback(item))
    return collection
}

function myMap(collection,callback){
    const values = Object.values(collection)
    let newArray = values.map(item => callback(item))
    return newArray;
}

function myReduce(collection, callback, acc){
    const values = Object.values(collection)
    let startingValue = acc
    if (acc === undefined){
    return values.reduce(callback)
    } else {
        return values.reduce(callback, startingValue)
    }
}

function myFind(collection, predicate){
    const values = Object.values(collection)
    return values.find(predicate)
}

function myFilter(collection, predicate){
    const values = Object.values(collection)
    return values.filter(predicate)
}

function mySize(collection){
    const values = Object.values(collection)
    return values.length
}

function myFirst(array, n){
    if (n === undefined){
        return array[0]
    } else {
        return array.slice(0, n)
    }
}

function myLast (array, n){
    if (n === undefined){
        return parseInt(array.slice(-1))
    } else {
        return array.slice(-n)
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}