import wbm from 'wbm';

export default defineEventHandler(async (event) => {
  try {
    console.log("Wbm is running...");
    // Start the wbm session
    await wbm.start({ showBrowser: false });
    console.log("Wbm is started.");

    // Define the phone numbers and the message
    const phones = ["918271274460"];
    const message = "Good Morning, Ayush Gupta";

    // Send the message
    await wbm.send(phones, message);

    // End the wbm session
    await wbm.end();

    // Return a success message
    return { message: 'Message sent successfully.' };
  } catch (err) {
    console.error(err);

    // Return an error message
    return { error: 'Failed to send message.' };
  }
});
