import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContex/CartContext';

const CartProductList = () => {
  const {currentSale, totalReduce, removetoListTodos} = useContext(CartContext)
return (
  <>
  {currentSale.length > 0 && (
  <StyledCartProductList>
    <ul>
      {currentSale.map((product) =>
      <CartProductCard  key={product.id} product={product}/>
      )}
    </ul>

    <div className='totalBox'>
      <StyledParagraph>
        <strong>Total</strong>
      </StyledParagraph>
      <StyledParagraph className='total'>R${totalReduce.toFixed(2)}</StyledParagraph>
    </div>
    <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={() => removetoListTodos()}>
      Remover todos
    </StyledButton>
  </StyledCartProductList>
)}
</>
);
};

export default CartProductList;
