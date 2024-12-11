import { supabase } from './supabase';

export const emailService = {
  async sendSubscriptionConfirmation(email: string) {
    try {
      const { error } = await supabase.functions.invoke('send-subscription-email', {
        body: { email }
      });
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error sending subscription email:', error);
      return { success: false, error };
    }
  },

  async sendNewsletterEmail(subscribers: string[], content: string, subject: string) {
    try {
      const { error } = await supabase.functions.invoke('send-newsletter', {
        body: { subscribers, content, subject }
      });
      
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error sending newsletter:', error);
      return { success: false, error };
    }
  }
};