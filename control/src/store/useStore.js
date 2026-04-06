import { create } from 'zustand';
import data from '../data/data.json';

const useStore = create((set) => ({
  products: data.products,
  categories: data.categories,
  selectedCategory: 'all',
  
  setCategory: (categoryId) => set({ selectedCategory: categoryId }),
}));

export default useStore;
