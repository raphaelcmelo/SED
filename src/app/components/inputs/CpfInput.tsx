import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { cpf } from "cpf-cnpj-validator";
import { UserDTO } from "@/utils/dtos/userDTOs";
import { UserInputs } from "../register/UserRegister";

interface CpfInputs {
  control: Control<UserInputs, any>;
  errors: FieldErrors<UserInputs>;
  inputDTO: UserDTO;
}

export default function CpfInput({ control, errors, inputDTO }: CpfInputs) {
  return (
    <Controller
      name={inputDTO.name}
      defaultValue=""
      control={control}
      rules={{
        required: "Cpf é obrigatório",
        validate: (value) => cpf.isValid(value) || "CPF invalido",
      }}
      render={({ field }) => (
        <PatternFormat
          fullWidth
          error={errors[inputDTO.name] ? true : false}
          customInput={TextField}
          format={"###.###.###-##"}
          mask={"_"}
          label={inputDTO.label}
          helperText={errors[inputDTO.name]?.message}
          {...field}
        />
      )}
    />
  );
}
