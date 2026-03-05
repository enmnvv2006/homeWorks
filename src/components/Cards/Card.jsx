import cls from "./Card.module.css";

export const Card = ({ id, image, name }) => {
  const onClickBtn = () => {
    console.log(id, name);
  };
  return (
    <article className={cls.card}>
      <img src={image} alt={name} className={cls.card__image} />
      <h3 className={cls.card__title}>{name}</h3>
      <button className={cls.card__button} onClick={onClickBtn}>
        Buy now
      </button>
    </article>
  );
};
