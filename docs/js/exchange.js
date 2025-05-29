class P2PExchange {
  constructor() {
    this.orders = [];
    this.escrow = [];
  }

  createOrder(sellerId, amount, price, currency) {
    const order = {
      id: Date.now(),
      sellerId,
      amount,
      price,
      currency,
      status: 'open'
    };
    this.orders.push(order);
    return order;
  }

  initiateEscrow(orderId, buyerId) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      this.escrow.push({
        orderId,
        buyerId,
        status: 'pending',
        timestamp: new Date()
      });
      order.status = 'in-escrow';
    }
  }
}
