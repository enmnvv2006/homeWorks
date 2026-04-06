import React from 'react';
import { Layout, Menu } from 'antd';
import useStore from '../store/useStore';
import styles from './HeaderMenu.module.css';

const { Header } = Layout;

const HeaderMenu = () => {
  const { categories, selectedCategory, setCategory } = useStore();

  const menuItems = [
    { key: 'all', label: 'Все категории' },
    ...categories.map(c => ({ key: String(c.id), label: c.title }))
  ];

  return (
    <Header className={styles.header}>
      <Menu
        mode="horizontal"
        selectedKeys={[String(selectedCategory)]}
        onSelect={({ key }) => setCategory(key === 'all' ? 'all' : Number(key))}
        items={menuItems}
        className={styles.menu}
      />
    </Header>
  );
};

export default HeaderMenu;
