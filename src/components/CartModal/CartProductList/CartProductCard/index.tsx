import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IIProps } from '../../../ProductList';
import { useContext } from 'react';
import { CartContext } from '../../../../providers/CartContex/CartContext';

const CartProductCard = ({product}: IIProps) => {
  const {removeItemCarrinho} = useContext(CartContext)
return (
  <StyledCartProductCard>
    <div className='imageBox'>
      <img src={product.img} alt='Hamburguer' />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <button type='button' aria-label='Remover' onClick={() => removeItemCarrinho(product.id)}>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
);
}

export default CartProductCard;
