import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { CandidatoInputs } from "../register/CandidatoRegister";

interface TextInputs {
  control: Control<CandidatoInputs, any>;
  errors: FieldErrors<CandidatoInputs>;
  inputDTO: {
    name: keyof CandidatoInputs;
    label: string;
  };
}

export default function EmailInput({ control, errors, inputDTO }: TextInputs) {
  return (
    <Controller
      name={inputDTO.name}
      defaultValue=""
      control={control}
      rules={{
        required: `${inputDTO.label} é obrigatório`,
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "E-mail invalido",
        },
      }}
      render={({ field }) => (
        <TextField
          fullWidth
          error={errors[inputDTO.name] ? true : false}
          label={inputDTO.label}
          helperText={errors[inputDTO.name]?.message}
          {...field}
        />
      )}
    />
  );
}
