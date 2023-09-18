import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Inputs } from "../register";

interface TextInputs {
  control: Control<Inputs, any>;
  name: keyof Inputs;
  errors: FieldErrors<Inputs>;
  label: string;
}

export default function TextInput({
  control,
  name,
  errors,
  label,
}: TextInputs) {
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      rules={{ required: `${label} é obrigatório` }}
      render={({ field }) => (
        <TextField
          error={errors[name] ? true : false}
          label={label}
          helperText={errors[name]?.message}
          {...field}
        />
      )}
    />
  );
}
