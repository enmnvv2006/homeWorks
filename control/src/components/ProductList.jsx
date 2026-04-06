import React from 'react';
import { Layout, Row, Col, Typography, Empty } from 'antd';
import ProductCard from './ProductCard';
import useStore from '../store/useStore';
import styles from './ProductList.module.css';

const { Content } = Layout;
const { Title } = Typography;

const ProductList = () => {
  const { products, categories, selectedCategory } = useStore();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.categoryId === selectedCategory);

  return (
    <Content className={styles.content}>
      <div className={styles.container}>
        <Title level={2} className={styles.title}>Список товаров</Title>
        
        {filteredProducts.length === 0 ? (
          <Empty description="Нет товаров в этой категории" className={styles.empty} />
        ) : (
          <Row gutter={[24, 24]}>
            {filteredProducts.map(product => {
              const category = categories.find(c => c.id === product.categoryId);
              return (
                <Col xs={24} sm={12} md={8} lg={8} xl={6} key={product.id}>
                  <ProductCard product={product} category={category} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </Content>
  );
};

export default ProductList;
