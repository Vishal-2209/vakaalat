'use server';

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const payload = {
    name: `${firstName} ${lastName}`.trim(),
    email: formData.get('email') as string,
    message: (formData.get('message') as string) || 'Newsletter Subscription',
    subject: (formData.get('subject') as string) || 'New Website Inquiry',
    source: 'vakaalat.in'
  };

  // Basic validation (Name not required if subject is Newsletter, but we set it anyway)
  if (!payload.email) {
    return { success: false, message: 'Missing required fields' };
  }

  const SCRIPT_URL = process.env.GOOGLE_SHEET_SCRIPT_URL;

  if (!SCRIPT_URL) {
    console.error('GOOGLE_SHEET_SCRIPT_URL is not set');
    // For now, we return a success-looking error so the user knows what to configure,
    // or we can fail gracefully.
    return { 
      success: false, 
      message: 'Server configuration error: Google Script URL missing' 
    };
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.ok) {
       return { success: true, message: 'Message sent successfully!' };
    } else {
       console.error('Script Error:', data.error);
       return { success: false, message: 'Failed to save message.' };
    }

  } catch (error) {
    console.error('Submission Error:', error);
    return { 
      success: false, 
      message: 'Network error occurred. Please try again later.' 
    };
  }
}
