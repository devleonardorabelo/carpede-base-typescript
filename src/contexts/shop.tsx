import React, { createContext, useEffect, useState } from 'react';
import RequestBase from '../services/api';
import { Shop, Product, Category, ProductSearch } from '../types';

export const ShopContext = createContext<Shop>({
  products: [],
  categories: [],
  onSale: [],
  bestSellers: [],
});

export const ShopProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [onSale, setOnSale] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);

  const loadCategories = async () => {
    const data = await RequestBase({ route: 'categories' });
    setCategories(data.body);
  };

  const loadProducts = async ({ category, page }: ProductSearch) => {
    const data = await RequestBase({
      route: 'products',
      params: {
        category,
        page,
      },
    });
    setProducts(data.body);
  };

  const loadOnSale = async () => {
    const data = await RequestBase({ route: 'onsale' });
    setOnSale(data.body);
  };

  const loadBestSellers = async () => {
    const data = await RequestBase({ route: 'onsale' });
    if (data) setBestSellers(data.body);
  };

  useEffect(() => {
    void loadCategories();
    void loadOnSale();
    void loadBestSellers();
  }, []);

  return (
    <ShopContext.Provider value={{ products, categories, onSale, bestSellers, loadProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
