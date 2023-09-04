/* Instruments */
import { counterSlice, userSlice, alunoSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  aluno: alunoSlice.reducer,
};
