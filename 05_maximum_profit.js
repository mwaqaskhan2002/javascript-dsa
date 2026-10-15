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

const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices){
    let minPrice = prices[0];
    let maxProfit = 0;

    for (const price of prices){
        if (price < minPrice) {
            minPrice = price;
        }
        else {
            let currentProfit = price - minPrice;

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
    }

    return maxProfit;
}

console.log(`Maxium Profit is: ${maxProfit(prices)}`);