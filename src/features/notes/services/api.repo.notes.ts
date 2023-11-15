import { Note } from '../models/note';

export class ApiRepoNotes {
  apiUrl = 'http://localhost:3000/notes';

  async getNotes(): Promise<Note[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createNote(newNote: Partial<Note>): Promise<Note> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateNote(id: Note['id'], updatedNote: Partial<Note>): Promise<Note> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'PATCH',
      body: JSON.stringify(updatedNote),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async deleteNote(id: Note['id']): Promise<Note[]> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'DELETE',
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
