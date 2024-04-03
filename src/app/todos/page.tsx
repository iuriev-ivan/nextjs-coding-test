import { getAllTodos } from '@/app/server-actions/todos';
import { newTodoPath } from '@/app/config/path.config';
import { Todo } from '@/app/types/todo.type';
import { TodoList } from '@/app/_components/TodoList/TodoList';
import { CustomLink } from '@/app/_components/CustomLink/CustomLink';

export default async function Todos() {
  const todos: Todo[] = await getAllTodos();

  return (
    <div>
      <h1>Todos</h1>
      <CustomLink href={newTodoPath} text="Add new todo" />
      <TodoList todos={todos} />
    </div>
  );
}
