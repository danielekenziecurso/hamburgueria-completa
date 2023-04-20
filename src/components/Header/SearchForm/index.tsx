import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContex/CartContext";

const SearchForm = () => {
  const {showProducts, setFormValue} = useContext(CartContext)
return (
  <StyledSearchForm>
    <input type="text" placeholder="Digitar pesquisa" onChange={(event) => setFormValue(event.target.value)} />
    <StyledButton type="button" $buttonSize="medium" $buttonStyle="green" onClick={() => showProducts()}>
      <MdSearch />
    </StyledButton>
  </StyledSearchForm>
);
};

export default SearchForm;
