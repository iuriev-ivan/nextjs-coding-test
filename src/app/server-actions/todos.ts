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
    return null;
  }
};

export const deleteTodo = async (formData: FormData) => {
  console.log('deleteTodo');
  const { id } = Object.fromEntries(formData);

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    revalidatePath(todosPath);
    redirect('/todos');
  }
};
