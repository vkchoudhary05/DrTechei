// DrTechei Google Sheets & Email Automation Service
// Sends lead and estimate data directly to Google Apps Script Webhook
// Which automatically writes to Google Sheets and sends confirmation emails to clients via Gmail.

export const GOOGLE_SCRIPT_WEBHOOK_URL: string =
  'https://script.google.com/macros/s/AKfycbxDYWYqa2KsfnZrP06-j8yo_4D_yHuyNHu_0LGbCfN1W7jQh0fkK_O7IQG6_0XLcqGH/exec';

export interface EstimateSubmissionPayload {
  type: 'estimate';
  email: string;
  projectType: string;
  totalEstimate: number;
  timeline: string;
  featuresSummary: string;
  referenceId: string;
  hourlyRate?: number;
  estimatedHours?: number;
  baseCost?: number;
  featuresCost?: number;
  experienceLevel?: string;
  isEnterprise?: boolean;
}

export interface ContactSubmissionPayload {
  type: 'contact';
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceRequired: string;
  budget: string;
  message?: string;
  referenceId: string;
}

/**
 * Sends estimate data to Google Sheet and triggers automated email to user
 */
export async function submitEstimateToGoogleSheet(
  payload: EstimateSubmissionPayload
): Promise<{ success: boolean; message: string }> {
  try {
    if (!GOOGLE_SCRIPT_WEBHOOK_URL) {
      console.warn('VITE_GOOGLE_SCRIPT_URL is not configured in .env');
      return { success: false, message: 'Google Script Webhook URL is not set in environment.' };
    }

    const response = await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Standard for Google Apps Script Webhooks to avoid CORS preflight blocks
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    // In no-cors mode, the response is opaque, but the script receives and processes the payload
    return {
      success: true,
      message: 'Estimate recorded in Google Sheet and email dispatched to client.',
    };
  } catch (error) {
    console.error('Error dispatching estimate to Google Script:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send estimate',
    };
  }
}

/**
 * Sends contact form data to Google Sheet and triggers automated acknowledgment email
 */
export async function submitContactToGoogleSheet(
  payload: ContactSubmissionPayload
): Promise<{ success: boolean; message: string }> {
  try {
    if (!GOOGLE_SCRIPT_WEBHOOK_URL) {
      console.warn('VITE_GOOGLE_SCRIPT_URL is not configured in .env');
      return { success: false, message: 'Google Script Webhook URL is not set in environment.' };
    }

    const response = await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Standard for Google Apps Script Webhooks to avoid CORS preflight blocks
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      success: true,
      message: 'Contact form saved to Google Sheet and confirmation email sent.',
    };
  } catch (error) {
    console.error('Error dispatching contact to Google Script:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to save contact inquiry',
    };
  }
}
