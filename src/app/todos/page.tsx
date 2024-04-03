import { getAllTodos } from '@/app/server-actions/todos';
import { newTodoPath } from '@/app/config/path.config';
import { Todo } from '@/app/types/todo.type';
import { TodoList } from '@/app/_components/TodoList/TodoList';
import { CustomLink } from '@/app/_components/CustomLink/CustomLink';
import styles from './Todos.module.css';

export default async function Todos() {
  const todos: Todo[] = await getAllTodos();

  return (
    <main>
      <h2 className={styles.Title}>Todos</h2>
      <CustomLink href={newTodoPath} text="Add new todo" />
      <TodoList todos={todos} />
    </main>
  );
}
