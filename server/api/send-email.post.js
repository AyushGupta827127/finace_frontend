import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // Parse JSON body directly
  const { to, subject, text, filename, fileurl } = await readBody(event);
  console.log(process.env.EMAIL_USER)

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use your App Password or correct credentials
      },
    });

    // Initialize mailOptions without attachments
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: `   <h1 style="color: #172554;">
                Welcome to  Finace   <span style="color: #f97316;">India</span>
                </h1> </br> <p style="font-weight: 400; font-size: 21px;">${text} </p>`,
    };

    // Add attachments only if filename and fileurl are provided
    if (filename && fileurl) {
      mailOptions.attachments = [
        {
          filename: filename,
          path: fileurl,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return { message: `Email sent successfully.` };
  } catch (error) {
    console.error("Error sending email:", error.message); // Log the error message
    throw createError({
      statusCode: 500,
      statusMessage: "Error sending email",
      error,
    });
  }
});
