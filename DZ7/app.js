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

// 1. Рассчитать сумму каждого заказа
console.log("=== Сумма каждого заказа ===");
orders.forEach(order => {
  const orderSum = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  console.log(`Заказ #${order.id} (${order.customer}): ${orderSum} руб.`);
});

// 2. Найти общий доход магазина
console.log("\n=== Общий доход магазина ===");
const totalIncome = orders.reduce((sum, order) => {
  const orderSum = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return sum + orderSum;
}, 0);
console.log(`Общий доход: ${totalIncome} руб.`);

// 3. Определить клиента с самым дорогим заказом
console.log("\n=== Самый дорогой заказ ===");
let maxOrder = orders[0];
let maxSum = maxOrder.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

orders.forEach(order => {
  const orderSum = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (orderSum > maxSum) {
    maxSum = orderSum;
    maxOrder = order;
  }
});

console.log(`Клиент: ${maxOrder.customer}, Сумма заказа: ${maxSum} руб.`);