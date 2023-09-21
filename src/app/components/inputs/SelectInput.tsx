import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { CandidatoInputs } from "../register/CandidatoRegister";
import { RegisterDTO } from "@/utils/dtos/registerDTOs";

interface SelectInputProps {
  control: Control<CandidatoInputs, any>;
  errors: FieldErrors<CandidatoInputs>;
  inputDTO: RegisterDTO;
}

export default function SelectInput({
  control,
  errors,
  inputDTO,
}: SelectInputProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`label-${inputDTO.name}`}>{inputDTO.label}</InputLabel>
      <Controller
        name={inputDTO.name}
        defaultValue=""
        control={control}
        rules={{ required: `${inputDTO.label} é obrigatório` }}
        render={({ field }) => (
          <Select
            {...field}
            label={inputDTO.label}
            labelId={`label-${inputDTO.name}`}
          >
            {inputDTO.selectFields?.map((field, i) => (
              <MenuItem key={i} value={field.value}>
                {field.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
}
