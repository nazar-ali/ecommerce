import sendEmail from "../../../helper/sendEmail";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log(email);

    // Here you’d usually look up the user and generate a token
    const resetToken = crypto.randomBytes(32).toString("hex"); // 🔁 Replace this with a secure token

    const resetUrl = `${process.env.BASE_URL}/resetPassword?token=${resetToken}`;

    const message = `
      <p>You requested a password reset.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>This link will expire in 10 minutes.</p>
    `;

    await sendEmail(email, "Password Reset Request", message);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
