import { useState } from "react";
import "./style.css";

const products = [
  { id: 1, name: "Ноутбук", price: 75000, category: "Электроника" },
  { id: 2, name: "Смартфон", price: 45000, category: "Электроника" },
  { id: 3, name: "Наушники", price: 5000, category: "Аксессуары" },
  { id: 4, name: "Клавиатура", price: 3500, category: "Аксессуары" },
  { id: 5, name: "Мышь", price: 2000, category: "Аксессуары" },
  { id: 6, name: "Монитор", price: 22000, category: "Электроника" },
  { id: 7, name: "Планшет", price: 30000, category: "Электроника" },
  { id: 8, name: "Часы", price: 12000, category: "Гаджеты" },
  { id: 9, name: "Рюкзак", price: 4000, category: "Одежда" },
  { id: 10, name: "Кроссовки", price: 8500, category: "Обувь" },
  { id: 11, name: "Футболка", price: 1500, category: "Одежда" },
  { id: 12, name: "Куртка", price: 10000, category: "Одежда" },
  { id: 13, name: "Книга", price: 900, category: "Книги" },
  { id: 14, name: "Настольная лампа", price: 2500, category: "Дом" },
  { id: 15, name: "Кружка", price: 600, category: "Дом" },
  { id: 16, name: "Стул", price: 7000, category: "Мебель" },
  { id: 17, name: "Стол", price: 15000, category: "Мебель" },
  { id: 18, name: "Велосипед", price: 28000, category: "Спорт" },
  { id: 19, name: "Мяч", price: 1200, category: "Спорт" },
  { id: 20, name: "Гитара", price: 18000, category: "Музыка" },
];

const ProductList = () => {
  const [cartProduct, setCartProduct] = useState([]);

  const createProduct = (prod) => {
    setCartProduct([...cartProduct, prod]);
  };

  return (
    <div>
      <div className="productList">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <span className="productCategory">{product.category}</span>
            <h2 className="productName">{product.name}</h2>
            <p className="productPrice">{product.price} сом</p>
            <button
              onClick={() =>
                createProduct({
                  name: product.name,
                  price: product.price,
                  category: product.category,
                })
              }
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
      <hr />
      {cartProduct.length > 0 && (
        <div className="cart">
          <h1>Корзина</h1>
          <div className="cartList">
            {cartProduct.map((cart_product, index) => (
              <div className="product" key={index}>
                <span className="productCategory">{cart_product.category}</span>
                <h2 className="productName">{cart_product.name}</h2>
                <p className="productPrice">{cart_product.price} сом</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
