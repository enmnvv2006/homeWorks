const orders = [
  {
    id: 1,
    customer: "Jhon",
    items: [
      { name: "Ноутбук",  price: 50000, quantity: 1 },
      { name: "Мышь",     price: 1500,  quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Alan",
    items: [
      { name: "Телефон", price: 30000, quantity: 1 },
      { name: "Чехол",   price: 1000,  quantity: 3 }
    ]
  },
  {
    id: 3,
    customer: "Jane",
    items: [
      { name: "Клавиатура", price: 2500,  quantity: 1 },
      { name: "Монитор",    price: 12000, quantity: 1 }
    ]
  }
];

var maxOrderPrice = 0;
var customerWithMaxOrder = "";
var totalSum = 0;

for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    console.log(order.customer);
    
    var orderPrice = 0;
    
    for (var j = 0; j < order.items.length; j++) {
        var element = order.items[j];
        console.log(element.price * element.quantity);
        
        orderPrice += element.price * element.quantity;
        totalSum += element.price * element.quantity;
    }
    
    if (orderPrice > maxOrderPrice) {
        maxOrderPrice = orderPrice;
        customerWithMaxOrder = order.customer;
    }
}

console.log("Общий доход магазина:", totalSum);
console.log("Клиент с самым дорогим заказом:", customerWithMaxOrder,"Стоимость заказа:", maxOrderPrice);