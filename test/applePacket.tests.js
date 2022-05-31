describe("Test ApplePacket factory function", function () {
  it("should return 30 for the box price when input box price is 30", function () {
    let applePacket = ApplePacket();
    applePacket.setBoxPrice(30);
    assert.equal(30, applePacket.getBoxPrice());
  });
  it("should return 40 for the box price when input box price is 40", function () {
    let applePacket = ApplePacket();
    applePacket.setBoxPrice(40);
    assert.equal(40, applePacket.getBoxPrice());
  });
  it("should return 10 for the box price when input box price is 10", function () {
    let applePacket = ApplePacket();
    applePacket.setBoxPrice(10);
    assert.equal(10, applePacket.getBoxPrice());
  });
  it("should return 0 for the box price when input box price is a string", function () {
    let applePacket = ApplePacket();
    applePacket.setBoxPrice("what");
    assert.equal(0, applePacket.getBoxPrice());
  });
  describe("Set quantity in a box", function () {
    it("should set the quantity in box to 100", function () {
      let applePacket = ApplePacket();

      applePacket.setQuantityInBox(100);
      assert.equal(100, applePacket.getQuantityInBox());
    });
    it("should set the quantity in box to 40", function () {
      let applePacket = ApplePacket();

      applePacket.setQuantityInBox(40);
      assert.equal(40, applePacket.getQuantityInBox());
    });
    it("should set the quantity in box to 90", function () {
      let applePacket = ApplePacket();

      applePacket.setQuantityInBox(90);
      assert.equal(90, applePacket.getQuantityInBox());
    });
    it("should set the quantity in box to 0 when input is a string", function () {
      let applePacket = ApplePacket();

      applePacket.setQuantityInBox("string");
      assert.equal(0, applePacket.getQuantityInBox());
    });
  });
  describe("Set Quantity Per Packet", function () {
    it("should set the the quantity per packet to 10", function () {
      let applePacket = ApplePacket();

      applePacket.setNumberPerPacket(10);
      assert.equal(10, applePacket.getNumberPerPacket());
    });
    it("should set the the quantity per packet to 20", function () {
      let applePacket = ApplePacket();

      applePacket.setNumberPerPacket(20);
      assert.equal(20, applePacket.getNumberPerPacket());
    });
    it("should set the the quantity per packet to 31", function () {
      let applePacket = ApplePacket();

      applePacket.setNumberPerPacket(31);
      assert.equal(31, applePacket.getNumberPerPacket());
    });
    it("should set the the quantity per packet to 0 when input is a string", function () {
      let applePacket = ApplePacket();

      applePacket.setNumberPerPacket("This");
      assert.equal(0, applePacket.getNumberPerPacket());
    });
  });
  describe("Set Percentage Profit", function () {
    it("should set percentage profit to 50", function () {
      let applePacket = ApplePacket();

      applePacket.setPercentProfit(50);
      assert.equal(50, applePacket.getPercentProfit());
    });
    it("should set percentage profit to 20", function () {
      let applePacket = ApplePacket();

      applePacket.setPercentProfit(20);
      assert.equal(20, applePacket.getPercentProfit());
    });
    it("should set percentage profit to 10", function () {
      let applePacket = ApplePacket();

      applePacket.setPercentProfit(10);
      assert.equal(10, applePacket.getPercentProfit());
    });
    it("should set percentage profit to 0 when input is a string", function () {
      let applePacket = ApplePacket();

      applePacket.setPercentProfit("String");
      assert.equal(0, applePacket.getPercentProfit());
    });
  });
  describe("Calculate Costs and quantity", function () {
    it("should be able to calculate the number of packets to be made", function () {
      let applePacket = ApplePacket();

      applePacket.setQuantityInBox(120);
      applePacket.setNumberPerPacket(8);
      assert.equal(15, applePacket.calcNumOfPackets());
    });
    it("should be able to calculate the cost price for each apple", function () {
      let applePacket = ApplePacket();

      applePacket.setBoxPrice(200);
      applePacket.setQuantityInBox(80);
      assert.equal("R2.50", applePacket.calcCostPerApple());
    });
    it("should be able to calculate the cost of each packet", function () {
      let applePacket = ApplePacket();

      applePacket.setBoxPrice(200);
      applePacket.setQuantityInBox(80);
      applePacket.setNumberPerPacket(10);

      applePacket.calcCostPerApple();
      assert.equal("R25.00", applePacket.calcCostPerPacket());
    });
    it("should be able to calculate the recommended price for each packet", function () {
      let applePacket = ApplePacket();

      applePacket.setBoxPrice(200);
      applePacket.setQuantityInBox(80);
      applePacket.setNumberPerPacket(10);
      applePacket.setPercentProfit(12);

      applePacket.calcNumOfPackets();
      assert.equal("R28.00", applePacket.calcPricePerPacket());
    });
  });
});
