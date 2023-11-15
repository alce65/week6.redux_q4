import { useEffect } from 'react';
import { Card } from '../card/card';
import { Add } from '../add/add';
import './list.scss';

import { useNotes } from '../../hooks/use.notes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../core/store/store';

export function List() {
  const { notes } = useSelector((state: RootState) => state.notesState);
  const { loadNotes } = useNotes();

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <div>
      <details>
        <summary>Añadir</summary>
        <Add></Add>
      </details>
      <ul className="todo-list">
        {notes.map((item) => (
          <Card key={item.id} note={item}></Card>
        ))}
      </ul>
    </div>
  );
}
