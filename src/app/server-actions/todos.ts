'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { todosPath } from '@/app/config/path.config';
import { API_URL } from '@/app/config/api.config';

export const getAllTodos = async () => {
  try {
    const res = await fetch(`${API_URL}?_limit=10`);
    return res.json();
  } catch (error) {
    return [];
  }
};

export const deleteTodoById = async (formData: FormData) => {
  // TODO we can add validation using zod or yup if it`s required
  const { id } = Object.fromEntries(formData);

  if (id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      revalidatePath(todosPath);
      redirect(todosPath);
    } else {
      // we are return error message to show notification toast
      return {
        error: `Couldn't delete todo.`,
      };
    }
  }
};

export const createTodo = async (formData: FormData) => {
  // TODO we can add validation using zod or yup if it`s required
  const { title } = Object.fromEntries(formData);

  if (title) {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
    });

    const data = await response.json();

    if (data.id) {
      revalidatePath(todosPath);
      redirect(todosPath);
    } else {
      // we are return error message to show notification toast

      return {
        error: `Couldn't create todo.`,
      };
    }
  }
};

export const getTodoById = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
  } catch (error) {
    return null;
  }
};

export const updateTodo = async (formData: FormData) => {
  // TODO I can add validation using zod or yup if it`s required
  // TODO I can also implement toast notifications for updateTodo if required

  const { title, id } = Object.fromEntries(formData);

  if (title && id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
      }),
    });
    revalidatePath(todosPath);
    redirect(todosPath);
  }
};
