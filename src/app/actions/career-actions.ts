'use server';

import { getCareers, saveCareers, Career } from '@/lib/career-data';
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
  
  const careers = await getCareers();
  
  const newCareer: Career = {
    id: Date.now().toString(),
    title,
    location,
    type,
    description,
    requirements
  };

  careers.unshift(newCareer);
  await saveCareers(careers); // This writes to local file
  
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

  const careers = await getCareers();
  const index = careers.findIndex(c => c.id === id);

  if (index !== -1) {
      careers[index] = {
          ...careers[index],
          title,
          location,
          type,
          description,
          requirements
      };
      await saveCareers(careers);
  }

  revalidatePath('/careers');
  redirect('/admin/careers');
}

export async function deleteCareer(id: string) {
  if (!(await isLoggedIn())) {
      throw new Error('Unauthorized');
  }
  
  const careers = await getCareers();
  const filtered = careers.filter(c => c.id !== id);
  await saveCareers(filtered);
  
  revalidatePath('/careers');
}
