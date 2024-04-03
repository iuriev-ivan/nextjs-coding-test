'use server';

import styles from './DeleteTodoForm.module.css';
import { deleteTodo } from '@/app/server-actions/todos';
import { CustomButton } from '@/app/_components/CustomButton/CustomButton';

type DeleteTodoFormProps = {
  id: string;
};

export const DeleteTodoForm = (props: DeleteTodoFormProps) => {
  const { id } = props;

  return (
    <form action={deleteTodo} className={styles.DeleteTodoForm}>
      <input type="hidden" name="id" value={id} />
      <CustomButton text="Delete" isTransparent type="submit" />
    </form>
  );
};
