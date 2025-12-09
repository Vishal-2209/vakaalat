'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isLoggedIn } from './auth';

export async function createCareer(formData: FormData) {
  if (!(await isLoggedIn())) {
    throw new Error('Unauthorized');
  }

  const title = formData.get('title') as string;
  const location = formData.get('location') as string;
  const type = formData.get('type') as string;
  const description = formData.get('description') as string;
  const requirements = formData.get('requirements') as string;
  
  const newCareer = {
    title,
    location,
    type,
    description,
    requirements
  };

  const { error } = await supabaseAdmin.from('careers').insert([newCareer]);
  
  if (error) {
      throw new Error('Failed to create career');
  }
  
  revalidatePath('/careers');
  redirect('/admin/careers');
}

export async function updateCareer(formData: FormData) {
  if (!(await isLoggedIn())) {
     throw new Error('Unauthorized');
  }

  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const location = formData.get('location') as string;
  const type = formData.get('type') as string;
  const description = formData.get('description') as string;
  const requirements = formData.get('requirements') as string;

  const updateData = {
    title,
    location,
    type,
    description,
    requirements
  };

  const { error } = await supabaseAdmin
    .from('careers')
    .update(updateData)
    .eq('id', id);

  if (error) {
     throw new Error('Failed to update career');
  }

  revalidatePath('/careers');
  redirect('/admin/careers');
}

export async function deleteCareer(id: string) {
  if (!(await isLoggedIn())) {
      throw new Error('Unauthorized');
  }
  
  const { error } = await supabaseAdmin
    .from('careers')
    .delete()
    .eq('id', id);

  if (error) {
      throw new Error('Failed to delete career');
  }
  
  revalidatePath('/careers');
}
