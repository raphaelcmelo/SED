import { Button, Grid } from "@mui/material";
import React from "react";
import { RegisterDTO } from "@/utils/dtos/registerDTOs";
import TextInput from "../inputs/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailInput from "../inputs/EmailInput";
import CpfInput from "../inputs/CpfInput";
import DateInput from "../inputs/DateInput";
import FoneInput from "../inputs/FoneInput";
import SelectInput from "../inputs/SelectInput";
import { CandidatoInputs } from "../register/CandidatoRegister";

interface FormBuilderProps {
  onSubmit: SubmitHandler<any>;
  formDTOs: any;
}

export default function FormBuilder({ onSubmit, formDTOs }: FormBuilderProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidatoInputs>({ mode: "onBlur" });

  console.log(errors);

  const renderInput = (dto: RegisterDTO) => {
    switch (dto.input) {
      case "text":
        return <TextInput control={control} errors={errors} inputDTO={dto} />;
      case "email":
        return <EmailInput control={control} errors={errors} inputDTO={dto} />;
      case "cpf":
        return <CpfInput control={control} errors={errors} inputDTO={dto} />;
      case "date":
        return <DateInput control={control} errors={errors} inputDTO={dto} />;
      case "fone":
        return <FoneInput control={control} errors={errors} inputDTO={dto} />;
      case "select":
        return <SelectInput control={control} errors={errors} inputDTO={dto} />;
      default:
        return <p>Erro Gerando Input</p>;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid spacing={2} container>
        {formDTOs.map((dto, i) => (
          <Grid item xs={3} key={i}>
            {renderInput(dto)}
          </Grid>
        ))}
      </Grid>
      <Button type="submit">enviar</Button>
    </form>
  );
}
