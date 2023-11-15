import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Note } from '../models/note';

type NotesState = {
  notes: Note[];
  page: number;
};

const initialState: NotesState = {
  notes: [],
  page: 1,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    load: (state: NotesState, { payload }: PayloadAction<Note[]>) => {
      state.notes = payload;
      return state;
    },
    create: (state: NotesState, { payload }: PayloadAction<Note>) => {
      state.notes.push(payload);
      return state;
    },
    update: (state: NotesState, { payload }: PayloadAction<Note>) => {
      state.notes[state.notes.findIndex((item) => item.id === payload.id)] =
        payload;
      return state;
    },
    erase: (state: NotesState, { payload }: PayloadAction<Note['id']>) => {
      state.notes.splice(
        state.notes.findIndex((item) => item.id === payload),
        1
      );
      return state;
    },
  },
});

export default notesSlice.reducer;
export const { load, create, update, erase } = notesSlice.actions;
