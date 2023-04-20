import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginValue } from "../../../providers/UserContext/@typesUserContext";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

const LoginForm = () => {
  const { loginOfUser } = useContext(UserContext);
  const formLogin = z.object({
    email: z
      .string()
      .nonempty("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <ILoginValue>({
    resolver: zodResolver(formLogin),
  });
  const submit: SubmitHandler<ILoginValue> = (data) => {
    loginOfUser(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        id="email"
        error={errors.email}
        type="email"
        register={register("email")}
      />
      <Input
        label="Senha"
        id="password"
        error={errors.password}
        type="password"
        register={register("password")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
