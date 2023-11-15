import { useEffect } from 'react';
import { TaskCard } from '../task.card/task.card';
import { Add } from '../add/add';
import './list.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../core/store/store';
import { useTasks } from '../../hooks/use.tasks';

export function List() {
  const { tasks, tasksState } = useSelector(
    (state: RootState) => state.tasksState
  );
  const { loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  if (tasksState === 'loading') {
    return <p>Loading</p>;
  }

  if (tasksState === 'error') {
    return <p>Error lading tasks</p>;
  }

  return (
    <div>
      <details>
        <summary>Añadir</summary>
        <Add></Add>
      </details>
      <ul className="todo-list">
        {tasks.map((item) => (
          <TaskCard key={item.id} task={item}></TaskCard>
        ))}
      </ul>
    </div>
  );
}
