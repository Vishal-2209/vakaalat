import { supabase } from './supabase';

export interface Career {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
}

export async function getCareers(): Promise<Career[]> {
  const { data, error } = await supabase
    .from('careers')
    .select('*');

  if (error) {
    console.error('Error fetching careers:', error);
    return [];
  }

  return data as Career[];
}

export async function getCareerById(id: string): Promise<Career | undefined> {
  const { data, error } = await supabase
    .from('careers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
      return undefined;
  }
  return data as Career;
}

// saveCareers is deprecated
