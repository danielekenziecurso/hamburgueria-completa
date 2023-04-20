import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { useContext } from 'react';
import { CartContext } from '../../../providers/CartContex/CartContext';
import { IIProps } from '..';

const ProductCard = ({product}: IIProps) => {
  const {handleClick} = useContext(CartContext)
return (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={product.img} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <StyledParagraph className='category'>{product.category}</StyledParagraph>
      <StyledParagraph className='price'>{product.price}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={() => handleClick(product.id)}>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);
};

export default ProductCard;
