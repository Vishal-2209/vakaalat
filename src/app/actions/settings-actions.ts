'use server';

import { getSettings, updateSettings } from '@/lib/settings-data';
import { isLoggedIn, getCurrentUserRole } from '@/app/actions/auth';
import { revalidatePath } from 'next/cache';

export async function updateSettingsAction(formData: FormData) {
  const authorized = await isLoggedIn();
  if (!authorized) {
    return { success: false, message: 'Unauthorized' };
  }

  // Optional: Check for SUPER_ADMIN if you want to restrict this further
  // const role = await getCurrentUserRole();
  // if (role !== 'SUPER_ADMIN') ...

  const webAppUrl = formData.get('webAppUrl') as string;
  const androidAppUrl = formData.get('androidAppUrl') as string;

  if (!webAppUrl || !androidAppUrl) {
    return { success: false, message: 'All fields are required' };
  }

  try {
    await updateSettings({
      webAppUrl,
      androidAppUrl
    });

    revalidatePath('/services');
    revalidatePath('/admin/settings');
    
    return { success: true, message: 'Settings updated successfully' };
  } catch (error) {
    console.error('Settings Update Error:', error);
    return { success: false, message: 'Failed to update settings' };
  }
}
