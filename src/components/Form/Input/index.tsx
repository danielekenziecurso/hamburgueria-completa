import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputprops {
  label: string;
  type: "text" | "email" | "password" | "confirmPassword" | string;
  id: string;
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
}

const Input = ({ label, type, id, error, register }: IInputprops) => (
  <div>
    <StyledInputContainer>
      <input type={type} id={id} {...register} />
      <label htmlFor={id}>{label}</label>
    </StyledInputContainer>
    {error ? (
      <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
    ) : null}
  </div>
);

export default Input;
