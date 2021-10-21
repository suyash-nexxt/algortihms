// Given a list of integers prices in chronological order, return the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

const calcProfit = () => {
  let profit = 0;
  let buy = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[buy]) {
      profit = Math.max(profit, prices[i] - prices[buy]);
    } else {
      buy = i;
    }
  }
  return profit;
};
