import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepoTasks } from '../services/api.repo.tasks';
import { Task } from '../models/task';

// Thunk -> función devuelve un actionCreator
// Parámetros
// - nombre acción
// - function action creator

// Tipado
// - retorno de la función -> payload de la acción síncrona
// - parámetros de la función

export const loadTasksThunk = createAsyncThunk<Task[], ApiRepoTasks>(
  'tasks/load',
  async (repo) => {
    const tasks = await repo.getTasks();
    return tasks;
  }
); // => {
// type:  'tasks/load'
// payload: tasks
// }

type Params = {
  repo: ApiRepoTasks;
  newTask: Partial<Task>;
};

export const createTaskThunk = createAsyncThunk<Task, Params>(
  'tasks/create',
  async ({ repo, newTask }) => {
    const finalTask = await repo.createTask(newTask);
    return finalTask;
  }
);

export const updateTaskThunk = createAsyncThunk<
  Task,
  {
    repo: ApiRepoTasks;
    id: Task['id'];
    updatedTask: Partial<Task>;
  }
>('tasks/update', async ({ repo, id, updatedTask }) => {
  const finalTask = await repo.updateTask(id, updatedTask);
  return finalTask;
});

export const deleteTaskThunk = createAsyncThunk<
  Task['id'],
  {
    repo: ApiRepoTasks;
    id: Task['id'];
  }
>('tasks/delete', async ({ repo, id }) => {
  await repo.deleteTask(id);
  return id;
});
