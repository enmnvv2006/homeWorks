import data from "../../db/cards.json";
import { Card } from "../Cards/Card";
import cls from "./List.module.css";

const { cards } = data;

const cardsWithRandomImage = cards.map((card) => ({
  ...card,
  randomImage: card.image[Math.floor(Math.random() * card.image.length)],
}));

export const List = () => {
  return (
    <section className={cls.shop}>
      <div className={cls.shop__grid}>
        {cardsWithRandomImage.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            image={card.randomImage}
            name={card.name}
          />
        ))}
      </div>
    </section>
  );
};
