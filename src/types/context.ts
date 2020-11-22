import { Category, Customer, OrderProduct, Product, ProductSearch, StoreInfo } from '.';

export type ParamList = {
  List: {
    _id: string;
    name: string;
    filter?: string;
  };
  View: {
    _id: string;
    image: string;
    name: string;
    price: number;
    onSale: string;
    onSaleValue: number;
    description: string;
  };
  Location: {
    name: string;
    CPF: string;
    whatsapp: string;
  };
  ThirdStep: {
    name: string;
    CPF: string;
    whatsapp: string;
    latitude: string;
    longitude: string;
  };
};

export type TAuthContext = {
  signed: boolean;
  customer?: Customer | null;
  signIn: () => Promise<void> | void;
  signUp: (customer: Customer) => Promise<any> | void;
  signOut: () => Promise<void> | void;
};

export type TShopContext = {
  products: Product[];
  categories: Category[];
  onSale: Product[];
  bestSellers: Product[];
  loadProducts: ({ category, page, filter }: ProductSearch | any) => Promise<void> | any;
  storeInfo: StoreInfo | null;
  resetProductList: () => void;
};

export type TOrderContext = {
  products: OrderProduct[];
  totalProducts: number;
  addProduct: (product: OrderProduct) => void;
  editProduct: (product: OrderProduct) => void;
  removeProduct: (product: OrderProduct) => void;
  resetOrder: () => void;
};
