import { Todo } from '@/app/types/todo.type';
import { UpdateTodoForm } from '@/app/forms/UpdateTodoForm/UpdateTodoForm';
import { getTodoById } from '@/app/server-actions/todos';

type UpdateTodoProps = {
  params: {
    id: string;
  };
};

export default async function UpdateTodo({ params: { id } }: UpdateTodoProps) {
  const { title }: Todo = await getTodoById(id);

  // TODO we can also add toasts for this page if required
  return (
    <main>
      <h1>Edit todo</h1>
      <UpdateTodoForm id={id} title={title} />
    </main>
  );
}
