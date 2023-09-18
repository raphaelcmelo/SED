"use client";
import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

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

  console.log("errors");
  console.log(errors);

  console.log(watch("cpf"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        defaultValue=""
        name="cpf"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            error
            id="outlined-error-helper-text"
            label="CPF"
            defaultValue="Hello World"
            helperText="CPF inválido."
            {...field}
          />
        )}
      />
    </form>
  );
}
