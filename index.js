let cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let newCat =[...cats, name]
    return newCat
}
function prependCat(name){
    let oldCat =[name, ...cats]
    return oldCat
}
function removeLastCat(){
    let lastCat =[...cats]
    lastCat.pop()
    return lastCat
}
function removeFirstCat(){
let firstCat =[...cats]
firstCat.shift()
return firstCat}