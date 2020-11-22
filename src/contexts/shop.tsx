/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
  resetProductList: () => {},
});

export const ShopProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [onSale, setOnSale] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);

  const loadCategories = async () => {
    const { body } = await RequestBase({ route: 'categories' });
    if (body) setCategories([...categories, ...body]);
  };

  const loadProducts = async ({ category, filter }: ProductSearch) => {
    const { body } = await RequestBase({
      route: 'products',
      params: {
        category,
        filter,
      },
    });
    if (body) setProducts(body);
  };

  const loadOnSale = async () => {
    const { body } = await RequestBase({ route: 'onsale' });
    if (body) setOnSale([...body]);
  };

  const loadBestSellers = async () => {
    const { body } = await RequestBase({ route: 'onsale' });
    if (body) setBestSellers(body);
  };

  const loadStoreInfo = async () => {
    const { body } = await RequestBase({ route: '' });
    if (body) setStoreInfo(body);
  };

  const resetProductList = () => {
    setProducts([]);
  };

  useEffect(() => {
    void loadCategories();
    void loadOnSale();
    void loadBestSellers();
    void loadStoreInfo();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        categories,
        onSale,
        bestSellers,
        loadProducts,
        storeInfo,
        resetProductList,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
