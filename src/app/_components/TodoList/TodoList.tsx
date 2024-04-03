'use server';

import Link from 'next/link';
import styles from './TodoList.module.css';
import { Todo } from '@/app/types/todo.type';
import { todosPath } from '@/app/config/path.config';
import { DeleteTodoForm } from '@/app/forms/DeleteTodoForm/DeleteTodoForm';

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className={styles.TodoList}>
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id} className={styles.TodoListItem}>
            <Link href={`${todosPath}/${todo.id}`} className={styles.TodoTitle}>
              {todo.title}
            </Link>
            <DeleteTodoForm id={todo.id} />
          </div>
        ))
      ) : (
        <div className={styles.EmptyTodoList}>No todos</div>
      )}
    </div>
  );
};
