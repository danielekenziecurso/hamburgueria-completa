import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterValue } from "../../../providers/UserContext/@typesUserContext";

const RegisterForm = () => {
  const { registerOfUser } = useContext(UserContext);

  const formRegister = z.object({
    name: z.string().nonempty("Nome é obrigatório."),
    email: z
      .string()
      .nonempty("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
    confirmPassword: z
      .string()
      .nonempty("Confirmar a senha é obrigatório")
      .refine(
        ({ password, confirmPassword }: string | any) =>
          password === confirmPassword,
        {
          message: "As senhas não correspondem",
          path: ["confirmPassword"],
        }
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterValue>({
    resolver: zodResolver(formRegister),
  });
  const submit: SubmitHandler<IRegisterValue> = (data) => {
    registerOfUser(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        id="name"
        error={errors.name}
        type="text"
        register={register("name")}
      />
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
      <Input
        label="confirmação de senha"   
        id="confirmPassword"
        error={errors.confirmPassword}
        type="confirmPassword"
        register={register("confirmPassword")}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};
export default RegisterForm;
