import { useNotes } from '../../hooks/use.notes';
import { Note } from '../../models/note';
import './card.scss';

type Props = {
  note: Note;
};

export function Card({ note }: Props) {
  const { updateNote, deleteNote } = useNotes();

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleCheck = () => {
    const updatedNote = { ...note };
    updatedNote.isImportant = !updatedNote.isImportant;
    updateNote(updatedNote.id, updatedNote);
  };

  return (
    <li className="note-card">
      <p>
        <span>ID:</span> {note.id}{' '}
      </p>
      <p>
        <span>Name:</span> {note.title}{' '}
      </p>
      <p>
        <span>Owner:</span> {note.author}{' '}
      </p>
      <p>
        <input
          id="completed"
          type="checkbox"
          checked={note.isImportant}
          onChange={handleCheck}
        />
        <label htmlFor="completed">Completada</label>
      </p>
      <p role="button" onClick={handleDelete}>
        🗑️
      </p>
    </li>
  );
}
