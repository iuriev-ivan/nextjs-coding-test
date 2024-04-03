'use client';

import styles from './CreateTodoForm.module.css';
import { createTodo } from '@/app/server-actions/todos';
import { CustomButton } from '@/app/_components/CustomButton/CustomButton';
import toast from 'react-hot-toast';

export const CreateTodoForm = () => {
  async function handleCreateTodo(formData: FormData) {
    const response = await createTodo(formData);
    if (response?.error) {
      toast.error(response?.error);
    } else {
      // I add toasts here to show user that his action was handle
      toast.success('Todo created successfully');
    }
  }
  // Validation was not required,
  //  but I add it just by using require attribute,
  //  we can replace it with some library like zod, yup, etc.

  return (
    <form action={handleCreateTodo} className={styles.CreateTodoForm}>
      <label htmlFor="title" className={styles.CreateTodoFormLabel}>
        Title:
      </label>
      <input name="title" type="text" className={styles.CreateTodoFormInput} required />
      <CustomButton text="Submit" type="submit" />
    </form>
  );
};
