import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { Inputs } from "../register";

interface TextInputs {
  control: Control<Inputs, any>;
  name: keyof Inputs;
  errors: FieldErrors<Inputs>;
  label: string;
}

export default function DateInput({
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
        <PatternFormat
          error={errors[name] ? true : false}
          helperText={errors[name]?.message}
          format="##/##/####"
          mask={"_"}
          label={label}
          customInput={TextField}
          {...field}
        />
      )}
    />
  );
}
