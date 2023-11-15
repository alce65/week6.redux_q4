import { SyntheticEvent } from 'react';
import { useNotes } from '../../hooks/use.notes';
import { Note } from '../../models/note';

export function Add() {
  const { addNote } = useNotes();

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();

    const newNote: Partial<Note> = {
      isImportant: false,
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      author: (form.elements.namedItem('author') as HTMLInputElement).value,
    };
    addNote(newNote);
    form.reset();
  };

  return (
    <form aria-label="add-note" onSubmit={handleSubmit}>
      <legend>Añadir tarea</legend>
      <input
        type="text"
        name="title"
        placeholder="Describe la tarea"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Responsable de la tarea"
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
}
