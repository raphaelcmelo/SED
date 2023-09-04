import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: AlunoSliceState = {
  usuario: "",
  senha: "",
  status: "idle",
};

export const alunoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export interface AlunoSliceState {
  usuario: string;
  senha: string;
  status: "idle" | "loading" | "failed";
}
