/*Recursive count only
function coinCombo(total, coins, currentCoin = 0) {
    if (total === 0) return 1;

    if (total < 0) return 0;

    let nCombos = 0;
    for (let coinIndex = currentCoin; coinIndex < coins.length; coinIndex++) {
        nCombos += coinCombo(total - coins[coinIndex].value, coins, coinIndex)
    };

    return nCombos
}
*/



function coinCombo(coinValues, total, index, combinations = {}, extraCombination = null) {
    //console.log(index, combinations, extraCombination)

    //1. Add combination to list
    if (extraCombination !== null) {
        combinations = { ...combinations, ...extraCombination }
    }

    //2. If total is missing
    if (total === 0 || (index + 1) === coinValues.length) {
        if ((index + 1) === coinValues.length && total > 0) {
            let key = coinValues[index], newCombo = {}
            newCombo[key] = total
            combinations = { ...combinations, ...newCombo }
            index += 1
        }
        while (index < coinValues.length) {
            let key = coinValues[index], newCombo = {}
            newCombo[key] = 0
            combinations = { ...combinations, ...newCombo }

            index += 1
        }
        console.log(coinValues.map(coinValue => combinations[coinValue]).join(" | "))
        return 1
    }

    let current = coinValues[index];
    let comboCount = 0;
    for (let i = 0; i < (Math.floor(total / current) + 1); i++) {
        let key = coinValues[index], extra = {}
        extra[key] = i
        comboCount += coinCombo(coinValues ,total - (i * current), index + 1, combinations, extra)
    }
    return comboCount
}

function countCombo(total, index) {
    let coinNames = { 25: "Quarter", 10: "Dime", 5: "Nickel", 1: "Penny" }
    let coinValues = [25, 10, 5, 1]

    console.log(coinValues.map(value => coinNames[value]).join(` | `))

    return coinCombo(coinValues, total, index)
}

function parseStr(str) {

}

console.log(`Total Count: ${countCombo(100, 0)}`)