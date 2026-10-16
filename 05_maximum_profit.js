/*
05  Maximum Profit
Concept: Greedy
Problem Statement
Given daily stock prices, determine the maximum profit obtainable from one buy and one sell.

Input
[7, 1, 5, 3, 6, 4]

Expected Output
5
*/

// const prices = [7, 1, 5, 3, 6, 4];

// function maxProfit(prices){
//     let minPrice = prices[0];
//     let maxProfit = 0;

//     for (const price of prices){
//         if (price < minPrice) {
//             minPrice = price;
//         }
//         else {
//             let currentProfit = price - minPrice;

//             if (currentProfit > maxProfit) {
//                 maxProfit = currentProfit;
//             }
//         }
//     }

//     return maxProfit;
// }

// console.log(`Maxium Profit is: ${maxProfit(prices)}`);


function updateMinPrice(currentPrice, currentMin) {
    return Math.min(currentPrice, currentMin);
}
function calculateProfit(currentPrice, minPrice) {
    return currentPrice - minPrice;
}

function updateMaxProfit(currentProfit, currentMax) {
    return Math.max(currentProfit, currentMax);
}

function maxProfit(prices) {
    if (!prices || prices.length === 0) return 0;

    let minPrice = prices[0];
    let maxProfitValue = 0;

    for (const price of prices) {
        minPrice = updateMinPrice(price, minPrice);
        let currentProfit = calculateProfit(price, minPrice);
        maxProfitValue = updateMaxProfit(currentProfit, maxProfitValue);
    }

    return maxProfitValue;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(`Maximum Profit is: ${maxProfit(prices)}`);