import * as functions from 'firebase-functions/v1';
import { Resend } from 'resend';

export const sendOtpCodeViaEmail = async ({
  receiverEmail,
  subject,
  htmlTemplate,
}: {
  receiverEmail: string;
  subject: string;
  htmlTemplate: string;
}) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    return await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL as string,
      to: receiverEmail,
      subject,
      html: htmlTemplate,
    });
  } catch (error) {
    throw new functions.https.HttpsError(
      'internal',
      'We’re unable to send the verification code to your email at the moment due to a service issue. Please try again later!',
    );
  }
};
