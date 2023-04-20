export interface IDefaultProviderPropsChildren {
  children: React.ReactNode;
}
export interface IcartContext {
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  products: IproductValue[];
  filteredProducts: IproductValue[];
  handleClick: (idProduct: number) => void;
  currentSale: IproductValue[];
  removetoListTodos: () => void;
  removeItemCarrinho: (productId: number) => void;
  totalReduce: number;
}
export interface IproductValue {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
