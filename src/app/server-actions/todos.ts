'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { todosPath } from '@/app/config/path.config';
import { API_URL } from '@/app/config/api.config';

export const getAllTodos = async () => {
  const res = await fetch(`${API_URL}?_limit=10`);

  return res.json();
};

export const deleteTodo = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  if (id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 200) {
      revalidatePath(todosPath);
      redirect('/todos');
    } else {
      return {
        error: 'Couldn`t delete todo.',
      };
    }
  }
};

export const createTodo = async (formData: FormData) => {
  const { title } = Object.fromEntries(formData);

  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      title,
    }),
  });

  const data = await response.json();

  if (data.id) {
    revalidatePath(todosPath);
    redirect('/todos');
  } else {
    return {
      error: 'Couldn`t create todo.',
    };
  }
};
