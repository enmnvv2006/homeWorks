import React from 'react';
import { Layout } from 'antd';
import HeaderMenu from './components/HeaderMenu';
import ProductList from './components/ProductList';
import styles from './App.module.css';

const App = () => {
  return (
    <Layout className={styles.layout}>
      <HeaderMenu />
      <ProductList />
    </Layout>
  );
};

export default App;
