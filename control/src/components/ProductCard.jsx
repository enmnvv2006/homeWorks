import React from 'react';
import { Card, Typography } from 'antd';
import styles from './ProductCard.module.css';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const ProductCard = ({ product, category }) => {
  return (
    <Card
      hoverable
      cover={<img alt={product.title} src={product.image} className={styles.image} />}
    >
      <Meta 
        title={<div className={styles.title}>{product.title}</div>} 
        description={
          <div className={styles.descriptionWrapper}>
            <Paragraph ellipsis={{ rows: 2 }} className={styles.paragraph}>{product.description}</Paragraph>
            
            <div className={styles.tags}>
              <span>{category?.title}</span>
              <span>{product.inStock ? "В наличии" : "Нет в наличии"}</span>
            </div>
            
            <Title level={3} className={styles.price}>${product.price}</Title>
          </div>
        } 
      />
    </Card>
  );
};

export default ProductCard;
