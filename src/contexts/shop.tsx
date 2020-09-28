import React, { createContext, useEffect, useState } from 'react';
import RequestBase from '../services/api';
import { Shop, Product, Category } from '../types';

export const ShopContext = createContext<Shop>({
  products: [],
  categories: [],
});

export const ShopProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const loadCategories = async () => {
    const data = await RequestBase('categories');
    setCategories(data.body);
  };

  useEffect(() => {
    void loadCategories();
  }, []);

  return <ShopContext.Provider value={{ products, categories }}>{children}</ShopContext.Provider>;
};

export default ShopContext;
