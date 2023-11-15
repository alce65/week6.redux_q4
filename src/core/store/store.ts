import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/slices/counterSlice';
import usersReducer from '../../features/users/slice/usersSlice';
import notesReducer from '../../features/notes/slices/notes.slice';
import tasksReducer from '../../features/todo/slices/tasks.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: usersReducer,
    notesState: notesReducer,
    tasksState: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
