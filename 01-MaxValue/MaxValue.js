function MaxValue(shares) {
  // Tu código aquí

  let maxProfit = -Infinity;
  let minValue = shares[0];

  for (let i = 1; i < shares.length; i++) {
    const sell = shares[i];
    const actualProfit = sell - minValue;
    if(actualProfit>maxProfit) maxProfit = actualProfit;
    if(sell<minValue) minValue = shares[i];
  }
  
  return maxProfit;
}

module.exports = MaxValue;
