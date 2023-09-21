"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import FormBuilder from "../form/FormBuilder";
import { registerDTOs } from "@/utils/dtos/registerDTOs";

export type Inputs = {
  cpf: string;
  nome: string;
  matricula: string;
  data: string;
  telefone: string;
  email: string;
  funcao: string;
  cargo: string;
  curso_gestor: string;
  data_entrada: string;
  data_inicio_docencia: string;
  obs_curso_gestor: string;
};

export default function Register() {
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return <FormBuilder onSubmit={onSubmit} formDTOs={registerDTOs} />;
}
