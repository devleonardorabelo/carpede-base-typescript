import React, { createContext, useEffect, useState } from 'react';
import RequestBase from '../services/api';
import { TShopContext, Product, Category, ProductSearch, StoreInfo } from '../types';

const ShopContext = createContext<TShopContext>({
  products: [],
  categories: [],
  onSale: [],
  bestSellers: [],
  loadProducts: () => {},
  storeInfo: null,
});

export const ShopProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [onSale, setOnSale] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);

  const loadCategories = async () => {
    const data = await RequestBase({ route: 'categories' });
    setCategories(data.body);
  };

  const loadProducts = async ({ category, page, filter }: ProductSearch) => {
    const data = await RequestBase({
      route: 'products',
      params: {
        category: category._id,
        page,
        filter,
      },
    });
    if (data) setProducts(data.body);
  };

  const loadOnSale = async () => {
    const data = await RequestBase({ route: 'onsale' });
    if (data) setOnSale(data.body);
  };

  const loadBestSellers = async () => {
    const data = await RequestBase({ route: 'onsale' });
    if (data) setBestSellers(data.body);
  };

  const loadStoreInfo = async () => {
    const data = await RequestBase({ route: '' });
    if (data) setStoreInfo(data.body);
  };

  useEffect(() => {
    void loadCategories();
    void loadOnSale();
    void loadBestSellers();
    void loadStoreInfo();
  }, []);

  return (
    <ShopContext.Provider
      value={{ products, categories, onSale, bestSellers, loadProducts, storeInfo }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
