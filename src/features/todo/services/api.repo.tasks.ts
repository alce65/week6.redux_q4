import { Task } from '../models/task';

export class ApiRepoTasks {
  apiUrl = 'http://localhost:3000/tasks';

  async getTasks(): Promise<Task[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createTask(newTask: Partial<Task>): Promise<Task> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateTask(id: Task['id'], updatedTask: Partial<Task>): Promise<Task> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedTask),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteTask(id: Task['id']): Promise<Task[]> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
