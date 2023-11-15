import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from '../models/task';
import {
  createTaskThunk,
  deleteTaskThunk,
  loadTasksThunk,
  updateTaskThunk,
} from './tasks.thunks';

type TasksState = {
  tasks: Task[];
  tasksState: 'idle' | 'loading' | 'error';
  page: number;
};

const initialState: TasksState = {
  tasks: [],
  tasksState: 'idle',
  page: 1,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadTasksThunk.pending, (state: TasksState) => {
      state.tasksState = 'loading';
      return state;
    }),
      builder.addCase(
        loadTasksThunk.fulfilled,
        (state: TasksState, { payload }: PayloadAction<Task[]>) => {
          state.tasks = payload;
          state.tasksState = 'idle';
          return state;
        }
      ),
      builder.addCase(loadTasksThunk.rejected, (state: TasksState) => {
        state.tasksState = 'error';
        return state;
      }),
      builder.addCase(
        createTaskThunk.fulfilled,
        (state: TasksState, { payload }: PayloadAction<Task>) => {
          state.tasks.push(payload);
          return state;
        }
      ),
      builder.addCase(
        updateTaskThunk.fulfilled,
        (state: TasksState, { payload }: PayloadAction<Task>) => {
          state.tasks[state.tasks.findIndex((item) => item.id === payload.id)] =
            payload;
          return state;
        }
      ),
      builder.addCase(
        deleteTaskThunk.fulfilled,
        (state: TasksState, { payload }: PayloadAction<Task['id']>) => {
          state.tasks.splice(
            state.tasks.findIndex((item) => item.id === payload),
            1
          );
          return state;
        }
      );
  },
});

export default tasksSlice.reducer;
