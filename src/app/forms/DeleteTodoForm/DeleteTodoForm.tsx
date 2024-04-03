'use client';

import styles from './DeleteTodoForm.module.css';
import { deleteTodoById } from '@/app/server-actions/todos';
import { CustomButton } from '@/app/_components/CustomButton/CustomButton';
import toast from 'react-hot-toast';

type DeleteTodoFormProps = {
  id: string;
};

export const DeleteTodoForm = (props: DeleteTodoFormProps) => {
  const { id } = props;

  // Showing toasts was not required,
  // but I think it will usefull to understand that user action finished successfully or not

  async function handleDeleteTodo(formData: FormData) {
    const response = await deleteTodoById(formData);
    if (response?.error) {
      toast.error(response?.error);
    } else {
      toast.success('Todo deleted successfully');
    }
  }

  // It's nice to have some confirmation popup for delete action

  return (
    <form action={handleDeleteTodo} className={styles.DeleteTodoForm}>
      <input type="hidden" name="id" value={id} />
      <CustomButton text="Delete" isTransparent type="submit" />
    </form>
  );
};
