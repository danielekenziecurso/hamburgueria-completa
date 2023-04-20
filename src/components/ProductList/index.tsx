import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../../providers/CartContex/CartContext";
import { v4 as uuidv4 } from "uuid";
import { IproductValue } from "../../providers/CartContex/@typesCartContext";

export interface IIProps {
  product?: IproductValue | any;
}

const ProductList = () => {
  const { loading, products, filteredProducts } = useContext(CartContext);
  return (
    <StyledProductList>
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <>
          {!filteredProducts.length
            ? products.map((product) => (
                <ProductCard key={uuidv4()} product={product} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard key={uuidv4()} product={product} />
              ))}
        </>
      )}
    </StyledProductList>
  );
};

export default ProductList;
