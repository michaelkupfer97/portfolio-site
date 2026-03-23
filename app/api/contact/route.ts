import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (
    !name?.trim() ||
    !email?.trim() ||
    !message?.trim() ||
    name.length > 100 ||
    email.length > 200 ||
    message.length > 2000
  ) {
    return Response.json(
      { error: "Please fill out all fields correctly." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL ?? "michaelkulhs@gmail.com";
  const from = process.env.CONTACT_FROM ?? "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email.trim(),
    subject: `Portfolio contact from ${name.trim()}`,
    text: [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error, null, 2));
    const detail =
      process.env.NODE_ENV === "development"
        ? ` (${error.message})`
        : "";
    return Response.json(
      { error: `Failed to send message. Please try again later.${detail}` },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
