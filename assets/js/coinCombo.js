function coinCombo(coinValues, total, indexOfCoinValueForCombo = 0, combinationAddingUpToTotal = {}, coinPartOfTheCombo = null) {
    //2. Add extra coin count to combination hash
    if (coinPartOfTheCombo !== null) {
        combinationAddingUpToTotal = { ...combinationAddingUpToTotal, ...coinPartOfTheCombo }
    }

    //3. If on the last/lowest coin or coins add up to total
    if ((indexOfCoinValueForCombo + 1) === coinValues.length || total === 0) {
        if ((indexOfCoinValueForCombo + 1) === coinValues.length && total > 0) {
            //3a. Let the last coin finish off the rest of the total
            let key = coinValues[indexOfCoinValueForCombo], newCombo = {}
            newCombo[key] = total
            combinationAddingUpToTotal = { ...combinationAddingUpToTotal, ...newCombo }
            indexOfCoinValueForCombo += 1
        }
        //a OR b
        while (indexOfCoinValueForCombo < coinValues.length) {
            //3b. Finish off the remaining coins. The earlier coins added up to the total. The rest are zero.
            let key = coinValues[indexOfCoinValueForCombo], newCombo = {}
            newCombo[key] = 0
            combinationAddingUpToTotal = { ...combinationAddingUpToTotal, ...newCombo }

            indexOfCoinValueForCombo += 1
        }
        console.log(coinValues.map(coinValue => combinationAddingUpToTotal[coinValue]).join(" | "))
        return 1 //For keeping track of total count in section 1.
    }

    //1. Iterate through each coin. Each coin goes to its max value that does not exceed the total
    let currentCoinValue = coinValues[indexOfCoinValueForCombo];
    let comboCount = 0;
    for (let numOfCoins = 0; numOfCoins < (Math.floor(total / currentCoinValue) + 1); numOfCoins++) {
        //1a. Keep track of the coin on this iteration e.g. {value: how many}
        let coinPartOfTheCombo = {}
        coinPartOfTheCombo[currentCoinValue] = numOfCoins

        comboCount += coinCombo(coinValues, total - (numOfCoins * currentCoinValue), indexOfCoinValueForCombo + 1, combinationAddingUpToTotal, coinPartOfTheCombo)
    }
    return comboCount
}

function countCombo(str) {
    let total = parseStrForTotal(str)
    let coinValuesPlusNames = parseStrForCoinValuesPlusNames(str, total) //e.g. { 25: "Quarter", 10: "Dime", 5: "Nickel", 1: "Penny" }
    let coinValues = Object.keys(coinValuesPlusNames).sort((a,b) => b - a) // [25,10,5,1]

    console.log(coinValues.map(value => coinValuesPlusNames[value]).join(` | `))

    console.log(`Total Count: ${coinCombo(coinValues, total)}`)

    return
}

function parseStrForTotal(str) {
    let strArr = str.split(',')
    
    let numbersOfEachCoin = [];
    for (let i = 1; i < strArr.length; i += 2) {
        numbersOfEachCoin.push(Number(strArr[i]))
    }
    
    return Math.max(...numbersOfEachCoin)
}

function parseStrForCoinValuesPlusNames(str, total) {
    let strArr = str.split(',')
    
    let coinValues = [];
    for (let i = 1; i < strArr.length; i += 2) {
        coinValues.push((total / Number(strArr[i])))
    }
        
    let coinNames = [];
    for (let i = 0; i < strArr.length; i += 2) {
        coinNames.push(strArr[i])
    }
    
    let valueNames = {};
    for (let i = 0; i < coinNames.length; i++) {
        valueNames[coinValues[i]] = coinNames[i]
    }
    
    return valueNames //e.g. { 25: "Quarter", 10: "Dime", 5: "Nickel", 1: "Penny" }
}

let str1 = "Quarter,4,Dime,10,Nickel,20,Penny,100";
let str2 = "Coin,1.5,Arrowhead,3,Button,150";

countCombo(str1)
countCombo(str2)