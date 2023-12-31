import logo from './logo.svg';

import './App.css';
import { Counter } from '../../../features/counter/components/counter/Counter';
import { Login } from '../../../features/users/components/login/login';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { List as NotesList } from '../../../features/notes/components/list/list';
import { List as TodoList } from '../../../features/todo/components/list/list';

function App() {
  const userState = useSelector((state: RootState) => state.user);

  return (
    <div className="App">
      {userState.name && `Hola ${userState.name}`}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <Login></Login>
      <NotesList></NotesList>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
