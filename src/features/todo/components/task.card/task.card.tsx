import './task.card.scss';
import { Task } from '../../models/task';
import { Link } from 'react-router-dom';
import { useTasks } from '../../hooks/use.tasks';

type Props = {
  task: Task;
};

export function TaskCard({ task }: Props) {
  const { updateTask, deleteTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCheck = () => {
    const updatedTask = { ...task };
    updatedTask.isCompleted = !updatedTask.isCompleted;
    updateTask(updatedTask.id, updatedTask);
  };

  return (
    <li className="task-card">
      <p>
        <span>ID:</span> {task.id}{' '}
      </p>
      <p>
        <span>Name:</span> {task.name}{' '}
      </p>
      <p>
        <span>Owner:</span> {task.owner}{' '}
      </p>
      <p>
        <input
          id="completed"
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleCheck}
        />
        <label htmlFor="completed">Completada</label>
      </p>
      <p role="button" onClick={handleDelete}>
        🗑️
      </p>
      <p>{/* <Link to={'/details/' + task.id}>Detalles</Link> */}</p>
    </li>
  );
}
