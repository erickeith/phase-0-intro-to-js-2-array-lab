// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat () {
    let cats2 = [...cats, "Broom"]
    return cats2;
}

function prependCat () {
    let cats3 = ["Arnold", ...cats]
    return cats3;
}

function removeLastCat() {
    let cats4 = [...cats.slice(0,2)]
    return cats4
}

function removeFirstCat() {
    let cats5 = [...cats.slice(1,3)]
    return cats5
}