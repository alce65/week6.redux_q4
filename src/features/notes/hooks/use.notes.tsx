import { useCallback, useMemo } from 'react';
import { ApiRepoNotes } from '../services/api.repo.notes';
import { Note } from '../models/note';
import { useDispatch } from 'react-redux';
import * as ac from '../slices/notes.slice';

export function useNotes() {
  const dispatch = useDispatch();

  const repo = useMemo(() => new ApiRepoNotes(), []);

  const loadNotes = useCallback(async () => {
    try {
      // Asíncrona
      const loadedNotes = await repo.getNotes();
      // Síncrono
      // setNotes(loadedNotes);
      dispatch(ac.load(loadedNotes));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const addNote = async (note: Partial<Note>) => {
    try {
      // Asíncrona -> API
      const newNote = await repo.createNote(note);
      // Síncrono -> Vista
      // setNotes([...notes, newNote]);
      dispatch(ac.create(newNote));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateNote = async (id: Note['id'], note: Partial<Note>) => {
    try {
      // Asíncrona -> API
      const updatedNote = await repo.updateNote(id, note);
      console.log(updatedNote);
      // Síncrono -> Vista

      // setNotes(
      //   notes.map((item) => (item.id === updatedNote.id ? updatedNote : item))
      // );
      dispatch(ac.update(updatedNote));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteNote = async (id: Note['id']) => {
    try {
      // Asíncrona -> API
      await repo.deleteNote(id);
      // Síncrono -> Vista
      // setNotes(notes.filter((item) => item.id !== id));
      dispatch(ac.erase(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    loadNotes,
    addNote,
    updateNote,
    deleteNote,
  };
}
