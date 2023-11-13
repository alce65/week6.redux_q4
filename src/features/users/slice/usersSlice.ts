import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
  name: string;
  passwd: string;
};

const initialState: UserState = {
  name: '',
  passwd: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    remove: (state) => {
      return initialState;
    },
  },
});

export default usersSlice.reducer;
export const { create, remove } = usersSlice.actions;

// Resultado del slice
// const usersSlice.reducer = (state, action) => {
//   switch (action.type) {
//     case 'users@create':
//       return {...state, ...action.payload};
//     case 'users@delete':
//       return {...state, ...initialState}
//     default:
//       return {...state};
//   }
// }
