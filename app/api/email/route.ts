import sgMail from "@sendgrid/mail";
import { NextRequest } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, subject, message, type } =
    await req.json();

  if (!type || !email) {
    return new Response("Missing required fields", { status: 400 });
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isEmailValid) {
    return new Response("Invalid email address", { status: 400 });
  }

  const isSubscribe = type === "subscribe";

  const mail = {
    to: "no-reply@cronshot.io",
    from: isSubscribe ? "subscribe@cronshot.io" : "contact@cronshot.io",
    replyTo: email,
    subject: isSubscribe
      ? "New subscriber"
      : `New message from ${firstName} ${lastName} - ${subject}`,
    text: isSubscribe ? `New subscriber: ${email}` : message,
  };

  try {
    await sgMail.send(mail);
    return new Response(
      isSubscribe ? "Thank you for subscribing!" : "Message sent successfully!"
    );
  } catch (error) {
    console.error(error);
    return new Response("Something unexpected happened", { status: 500 });
  }
}