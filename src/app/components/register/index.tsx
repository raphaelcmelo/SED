"use client";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import TextInput from "../inputs/TextInput";
import CpfInput from "../inputs/CpfInput";
import DateInput from "../inputs/DateInput";
import PhoneInput from "../inputs/PhoneInput";

export type Inputs = {
  cpf: string;
  nome: string;
  matricula: string;
  data: string;
  phone: string;
  email: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(errors);

  console.log(watch("cpf"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CpfInput control={control} label="CPF" name="cpf" errors={errors} />
      <DateInput
        control={control}
        label="Data de nascimento"
        name="data"
        errors={errors}
      />
      <TextInput
        control={control}
        name="matricula"
        label="Matrícula"
        errors={errors}
      />
      <PhoneInput
        control={control}
        name="phone"
        label="Telefone"
        errors={errors}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
