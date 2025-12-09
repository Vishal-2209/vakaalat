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

  const clientWebAppUrl = formData.get('clientWebAppUrl') as string;
  const clientAppDownloadUrl = formData.get('clientAppDownloadUrl') as string;
  const lawyerWebAppUrl = formData.get('lawyerWebAppUrl') as string;
  const lawyerAppDownloadUrl = formData.get('lawyerAppDownloadUrl') as string;

  if (!clientWebAppUrl || !clientAppDownloadUrl || !lawyerWebAppUrl || !lawyerAppDownloadUrl) {
    return { success: false, message: 'All fields are required' };
  }

  try {
    await updateSettings({
      clientWebAppUrl,
      clientAppDownloadUrl,
      lawyerWebAppUrl,
      lawyerAppDownloadUrl
    });

    revalidatePath('/services');
    revalidatePath('/admin/settings');
    
    return { success: true, message: 'Settings updated successfully' };
  } catch (error) {
    console.error('Settings Update Error:', error);
    return { success: false, message: 'Failed to update settings' };
  }
}
