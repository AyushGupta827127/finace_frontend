import { defineEventHandler, readBody, createError } from 'h3';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export default defineEventHandler(async (event) => {
  // Parse JSON body directly
  const { to, message } = await readBody(event);

  // Initialize Twilio client with environment variables
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    // Send the WhatsApp message
    const response = await client.messages.create({
      body: message,
      from: 'whatsapp:' + process.env.TWILIO_WHATSAPP_NUMBER, // Your Twilio WhatsApp number
      to: 'whatsapp:' + to, // Recipient's WhatsApp number
    });

    return { message: 'WhatsApp message sent successfully.', response };
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.message); // Log the error message
    throw createError({
      statusCode: 500,
      statusMessage: 'Error sending WhatsApp message',
      error,
    });
  }
});
