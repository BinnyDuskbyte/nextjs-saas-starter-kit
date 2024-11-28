import { Mailer } from "next-auth/middleware";
import { createTransport } from "nodemailer";

import { NextApiRequest, NextApiResponse } from "next";

interface SubscriptionConfirmationProps {
  name: string;
  plan: string;
  status: string;
}

export const sendSubscriptionConfirmation = async ({ name, plan, status }: SubscriptionConfirmationProps) => {
  const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT as string),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM_ADDRESS,
    to: name, // Replace with user's email
    subject: "Subscription Confirmation",
    html: `
      <h1>Thank You for Subscribing, ${name}!</h1>
      <p>You have successfully subscribed to the ${plan} plan.</p>
      <p>Status: ${status}</p>
      <p>Thank you for choosing our service!</p>
    `,
  });
};