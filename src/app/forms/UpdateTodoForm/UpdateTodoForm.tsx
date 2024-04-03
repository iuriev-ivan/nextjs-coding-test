'use server';

import styles from './UpdateTodoForm.module.css';
import { deleteTodo, updateTodo } from '@/app/server-actions/todos';
import { CustomButton } from '@/app/_components/CustomButton/CustomButton';

type UpdateFormProps = {
  title: string;
  id: string;
};

export const UpdateTodoForm = (props: UpdateFormProps) => {
  const { id, title } = props;

  // TODO 1.Input element also can be moved to component UI kit and reused
  // TODO 2.I am not sure is it good practice to use formAction to work with different submit actions

  return (
    <form action={updateTodo} className={styles.UpdateTodoForm}>
      <label htmlFor="title" className={styles.UpdateTodoFormLabel}>
        Title
      </label>
      <input
        name="title"
        type="text"
        defaultValue={title}
        className={styles.UpdateTodoFormLabelInput}
        required
      />
      <input type="hidden" name="id" value={id} required />
      <div className={styles.UpdateTodoFormActions}>
        <CustomButton text="Save" type="submit" />
        <CustomButton text="Delete" isTransparent formAction={deleteTodo} type="submit" />
      </div>
    </form>
  );
};
