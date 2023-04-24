import { createContext, useEffect, useState } from "react";
import {
  IDefaultProviderPropsChildren,
  IcartContext,
  IproductValue,
} from "./@typesCartContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { MdToken } from "react-icons/md";

export const CartContext = createContext({} as IcartContext);

export const CartProviders = ({ children }: IDefaultProviderPropsChildren) => {
  const [modalCart, setModalCart] = useState(false);
  const [products, setProducts] = useState<IproductValue[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IproductValue[]>([]);
  const [currentSale, setCurrentSale] = useState<IproductValue[]>([]);
  const [formValue, setFormValue] = useState("");
  const [loading, setLoading] = useState(false);

  const showProducts = () => {
    const formtext = formValue.toLocaleLowerCase();
    const formItem = products.filter(
      (product: { name: string; category: string }) =>
        product.name.toLocaleLowerCase().includes(formtext) ||
        product.category.toLocaleLowerCase().includes(formtext)
    );
    console.log(formItem);
    if (!formValue.length) {
      setFilteredProducts([]);
    }
    setFilteredProducts(formItem);
  };

  const handleClick = (idProduct: number) => {
    const productHadleClick = products.find(
      (product: { id: number }) => product.id === idProduct
    );
    const productVerification = currentSale.find(
      (product: { id: number }) => product.id === idProduct
    );
    if (!productVerification) {
      setCurrentSale([...currentSale, productHadleClick as IproductValue]);
      toast.success("Produto adicionado com sucesso!", {
        autoClose: 2000,
      });
    } else {
      toast.error("Item já está no carrinho!", {
        autoClose: 2000,
      });
    }
  };

  const removeItemCarrinho = (productId: number) => {
    const newProductsRemove = currentSale.filter(
      (product: { id: number }) => product.id !== productId
    );
    setCurrentSale(newProductsRemove);
  };

  const removetoListTodos = () => {
    setCurrentSale([]);
  };

  const totalReduce = currentSale.reduce((acumulador, currentSaleAtual) => {
    return acumulador + currentSaleAtual.price * 1;
  }, 0);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    async function renderProducts() {
      try {
        setLoading(true);
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        toast.error("Ops! Algo deu errado.");
      } finally {
        setLoading(false);
      }
    }
    renderProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        modalCart,
        setModalCart,
        loading,
        products,
        filteredProducts,
        handleClick,
        currentSale,
        removeItemCarrinho,
        removetoListTodos,
        totalReduce,
        showProducts,
        setFormValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
