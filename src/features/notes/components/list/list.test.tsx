import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './list';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../../slices/notes.slice';
import { Note } from '../../models/note';
import { useNotes } from '../../hooks/use.notes';

jest.mock('../../hooks/use.notes');

describe('Given List component ', () => {
  describe('When we render it', () => {
    const store = configureStore({
      reducer: {
        notesState: notesReducer,
      },
      preloadedState: {
        notesState: {
          notes: [{ id: 1 } as Note],
          page: 1,
        },
      },
    });

    const loadNotes = jest.fn();
    (useNotes as jest.Mock).mockReturnValue({
      loadNotes,
    });

    render(
      <Provider store={store}>
        <List></List>
      </Provider>
    );
    test('Then it should be in the document', () => {
      const listElement = screen.getByRole('list');
      expect(listElement).toBeInTheDocument();
      expect(loadNotes).toHaveBeenCalled();
    });
  });
});
