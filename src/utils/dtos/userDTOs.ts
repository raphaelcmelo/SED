import { UserInputs } from "@/app/components/register/UserRegister";

export interface UserDTO {
  name: keyof UserInputs;
  label: string;
  input: string;
  rules?: {
    required: string;
    minLength?: {
      value: number;
      message: string;
    };
  };
}

const nomeDTO: UserDTO = {
  name: "nome",
  label: "Nome",
  input: "text",
};

const usernameDTO: UserDTO = {
  name: "username",
  label: "Usuário",
  input: "cpf",
};

const passwordDTO: UserDTO = {
  name: "password",
  label: "Senha",
  input: "text",
  rules: {
    required: "Senha obrigatória",
    minLength: { value: 8, message: "A senha deve ter no mínimo 8 caracteres" },
  },
};

export const userDTOs = [nomeDTO, usernameDTO, passwordDTO];
