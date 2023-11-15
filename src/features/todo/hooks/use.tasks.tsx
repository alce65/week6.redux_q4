import { useCallback, useMemo } from 'react';
import { ApiRepoTasks } from '../services/api.repo.tasks';
import { Task } from '../models/task';
import { useDispatch } from 'react-redux';
import {
  createTaskThunk,
  deleteTaskThunk,
  loadTasksThunk,
  updateTaskThunk,
} from '../slices/tasks.thunks';
import { AppDispatch } from '../../../core/store/store';

export function useTasks() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new ApiRepoTasks(), []);

  const loadTasks = useCallback(async () => {
    try {
      dispatch(loadTasksThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addTask = async (task: Partial<Task>) => {
    try {
      dispatch(
        createTaskThunk({
          repo,
          newTask: task,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateTask = async (id: Task['id'], task: Partial<Task>) => {
    try {
      dispatch(
        updateTaskThunk({
          id,
          repo,
          updatedTask: task,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteTask = async (id: Task['id']) => {
    try {
      dispatch(
        deleteTaskThunk({
          id,
          repo,
        })
      );
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    loadTasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
