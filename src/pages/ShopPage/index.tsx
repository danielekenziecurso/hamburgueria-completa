import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContex/CartContext";

const ShopPage = () => {
  const { modalCart } = useContext(CartContext);
  return (
    <StyledShopPage>
      <Header />
      <main>
        {modalCart ? <CartModal /> : null}
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
