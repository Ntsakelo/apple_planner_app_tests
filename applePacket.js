function ApplePacket() {
  //Input Variables
  let pricePerBox = 0;
  let quantityInBox = 0;
  let numberPerPacket = 0;
  let percentageProfit = 0;

  //Output variables
  let costPerApple = 0;
  let costPerPacket = 0;
  let numOfPackets = 0;
  let pricePerPacket = 0;

  //Function to set box price
  function setBoxPrice(price) {
    if (price !== Number(price)) {
      pricePerBox = 0;
    }
    if (price == Number(price)) {
      pricePerBox = Number(price);
    }
  }
  //function return box price
  function getBoxPrice() {
    return pricePerBox;
  }
  //Function to set quantity in box
  function setQuantityInBox(qty) {
    if (qty !== Number(qty)) {
      quantityInBox = 0;
    }
    if (qty == Number(qty)) {
      quantityInBox = Number(qty);
    }
  }
  //function to return quantity in box
  function getQuantityInBox() {
    return quantityInBox;
  }

  //Function to set the number of apples per packet
  function setNumberPerPacket(num) {
    if (num !== Number(num)) {
      numberPerPacket = 0;
    }
    if (num == Number(num)) {
      numberPerPacket = Number(num);
    }
  }
  //Function to return the number per packet
  function getNumberPerPacket() {
    return numberPerPacket;
  }
  //function to set percentage profit
  function setPercentProfit(percent) {
    if (percent !== Number(percent)) {
      percentageProfit = 0;
    }
    if (percent == Number(percent)) {
      percentageProfit = Number(percent);
    }
  }
  //function to return percentage profit
  function getPercentProfit() {
    return percentageProfit;
  }
  /////Functions to calculate

  //calculate cost per apple
  function calcCostPerApple() {
    if (pricePerBox && quantityInBox) {
      costPerApple = pricePerBox / quantityInBox;
    }
    if (costPerApple === undefined) {
      return "R" + 0;
    }
    return "R" + costPerApple.toFixed(2);
  }
  //calculate cost per packet
  function calcCostPerPacket() {
    if (costPerApple && numberPerPacket) {
      costPerPacket = costPerApple * numberPerPacket;
    }
    if (costPerPacket === undefined) {
      return "R" + 0;
    }
    return "R" + costPerPacket.toFixed(2);
  }
  //calculate number of packets
  function calcNumOfPackets() {
    if (quantityInBox && numberPerPacket) {
      numOfPackets = quantityInBox / numberPerPacket;
    }
    if (numOfPackets === undefined) {
      return 0;
    }
    return numOfPackets.toFixed(2);
  }
  //calculate price per packet to make profit
  function calcPricePerPacket() {
    if (pricePerBox && percentageProfit) {
      let profit = pricePerBox * (percentageProfit / 100);
      let total = profit + pricePerBox;
      pricePerPacket = total / numOfPackets;
    }
    if (pricePerPacket == undefined) {
      return "R" + 0;
    }
    return "R" + pricePerPacket.toFixed(2);
  }
  return {
    setBoxPrice,
    getBoxPrice,
    setQuantityInBox,
    getQuantityInBox,
    setNumberPerPacket,
    getNumberPerPacket,
    setPercentProfit,
    getPercentProfit,
    calcCostPerApple,
    calcCostPerPacket,
    calcNumOfPackets,
    calcPricePerPacket,
  };
}
