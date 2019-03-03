function coinCombo(coinValues, total, index = 0, combinations = {}, extraCombination = null) {
    //2. Add extra coin combination to list
    if (extraCombination !== null) {
        combinations = { ...combinations, ...extraCombination }
    }

    //3. If on the last/lowest coin or coins add up to total
    if ((index + 1) === coinValues.length || total === 0) {
        if ((index + 1) === coinValues.length && total > 0) {
            //3a. Let the last coin finish off the rest of the total
            let key = coinValues[index], newCombo = {}
            newCombo[key] = total
            combinations = { ...combinations, ...newCombo }
            index += 1
        }
        //a OR b
        while (index < coinValues.length) {
            //3b. Finish off the remaining coins. The earlier coins added up to the total. The rest are zero.
            let key = coinValues[index], newCombo = {}
            newCombo[key] = 0
            combinations = { ...combinations, ...newCombo }

            index += 1
        }
        console.log(coinValues.map(coinValue => combinations[coinValue]).join(" | "))
        return 1 //For keeping track of total count in section 1.
    }

    //1. Iterate through each coin. Each coin goes to its max value that does not exceed the total
    let current = coinValues[index];
    let comboCount = 0;
    for (let i = 0; i < (Math.floor(total / current) + 1); i++) {
        //1a. Keep track of the coin on this iteration e.g. {value: how many/index}
        let key = coinValues[index], extra = {}
        extra[key] = i
        comboCount += coinCombo(coinValues ,total - (i * current), index + 1, combinations, extra)
    }
    return comboCount
}

function countCombo(str) {
    let total = parseStrForTotal(str)
    let coinNames = parseStrForCoinNames(str, total) //e.g. { 25: "Quarter", 10: "Dime", 5: "Nickel", 1: "Penny" }
    let coinValues = Object.keys(coinNames).sort((a,b) => b - a) // [25,10,5,1]

    console.log(coinValues.map(value => coinNames[value]).join(` | `))

    console.log(`Total Count: ${coinCombo(coinValues, total)}`)

    return
}

function parseStrForTotal(str) {
    let strArr = str.split(',')
    
    let numbers = [];
    for (let i = 1; i < strArr.length; i += 2) {
        numbers.push(Number(strArr[i]))
    }
    
    return Math.max(...numbers)
}

function parseStrForCoinNames(str, total) {
    let strArr = str.split(',')
    
    let numbers = [];
    for (let i = 1; i < strArr.length; i += 2) {
        numbers.push(Number(strArr[i]))
    }
    
    let coinValues = numbers.map(e => total/e)
    
    let names = [];
    for (let i = 0; i < strArr.length; i += 2) {
        names.push(strArr[i])
    }
    
    let hash = {};
    for (let i = 0; i < names.length; i++) {
        hash[coinValues[i]] = names[i]
    }
    
    return hash //e.g. { 25: "Quarter", 10: "Dime", 5: "Nickel", 1: "Penny" }
}

let str1 = "Quarter,4,Dime,10,Nickel,20,Penny,100";
let str2 = "Coin,1.5,Arrowhead,3,Button,150";

countCombo(str1)
countCombo(str2)