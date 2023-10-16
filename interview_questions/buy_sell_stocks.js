// JS program to find the best time to buy and sell stocks
function buySellStocks(arr) {
    let min = arr[0];
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else {
            maxProfit = Math.max(maxProfit, arr[i] - min)
        }
    }

    return maxProfit;
}

console.log(buySellStocks([7, 1, 5, 3, 6, 4])) 