import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, query } = body;

    // Validate the input
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof query !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !query.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email) || name.length > 200 || phone.length > 20 || query.length > 5000) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeQuery = escapeHtml(query);

    // Save to Supabase
    const { error: dbError } = await supabase.from("contacts").insert([
      {
        name,
        email,
        phone,
        query,
        created_at: new Date().toISOString(),
      },
    ]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save contact information");
    }

    // Send email using Resend
    const { data, error: emailError } = await resend.emails.send({
      from: "Becoz Life Matters | Archana Phaltankar <contact@becozlifematters.in>", // Replace with your verified domain
      to: "archu.phaltankar@gmail.com", // Replace with your Gmail
      subject: `New Contact Form Submission from ${name.replace(/[\r\n]/g, " ")}`,
      html: `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Contact Form Submission</title>

    <!--
      NOTE: Many email clients strip <style> rules or apply their own.
      This template uses table-based layout and inline CSS for best compatibility.
    -->
    <style>
      /* fallback / preview style for clients that support <style> */
      .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f6f8;font-family:Arial, Helvetica, sans-serif;-webkit-font-smoothing:antialiased;">
    <!-- Preheader (visible in inbox preview) -->
    <span class="preheader">New contact form submission from ${safeName} — ${safeEmail}</span>

    <!-- Outer wrapper table (centers email) -->
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f3f6f8;padding:24px 12px;">
      <tr>
        <td align="center">
          <!-- Main container -->
          <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 18px rgba(21,32,43,0.08);">
            <!-- Header -->
            <tr>
              <td style="background:#0b6fa4;padding:18px 24px;color:#ffffff;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="vertical-align:middle;">
                      <div style="font-weight:700;font-size:18px;letter-spacing:0.2px;">Becoz Life Matters</div>
                      <div style="font-size:13px;opacity:0.95;margin-top:4px;">New contact form submission</div>
                    </td>
                    <td align="right" style="vertical-align:middle;">
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:26px 28px 18px 28px;color:#222;">
                <h1 style="margin:0 0 12px 0;font-size:20px;font-weight:600;color:#0b2e3a;">🔔 New Contact Request</h1>
                <p style="margin:0 0 18px 0;font-size:14px;color:#515d64;">
                  You have received a new message via your website contact form. Details are below.
                </p>

                <!-- Details card -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:10px;">
                  <tr>
                    <td style="padding:12px;border-radius:6px;background:#fbfdff;border:1px solid #e6eef4;">
                      <!-- Row: Name -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:10px;">
                        <tr>
                          <td style="width:110px;font-weight:600;color:#334e57;padding:6px 8px 6px 0;">Name</td>
                          <td style="padding:6px 8px;color:#0e2b33;">${safeName}</td>
                        </tr>
                      </table>

                      <!-- Row: Email -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:10px;">
                        <tr>
                          <td style="width:110px;font-weight:600;color:#334e57;padding:6px 8px 6px 0;">Email</td>
                          <td style="padding:6px 8px;">
                            <a href="mailto:${safeEmail}" style="color:#0b6fa4;text-decoration:none;">${safeEmail}</a>
                          </td>
                        </tr>
                      </table>

                      <!-- Row: Phone -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:10px;">
                        <tr>
                          <td style="width:110px;font-weight:600;color:#334e57;padding:6px 8px 6px 0;">Phone</td>
                          <td style="padding:6px 8px;">
                            ${safePhone ? `<a href="tel:${safePhone}" style="color:#0b6fa4;text-decoration:none;">${safePhone}</a>` : `<span style="color:#8a9599;">Not provided</span>`}
                          </td>
                        </tr>
                      </table>

                      <!-- Row: Query -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:6px;">
                        <tr>
                          <td style="vertical-align:top;font-weight:600;color:#334e57;padding:6px 8px 6px 0;width:110px;">Message</td>
                          <td style="padding:6px 8px;color:#0e2b33;line-height:1.5;white-space:pre-wrap;">${safeQuery}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Meta -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-top:16px;">
                  <tr>
                    <td style="font-size:13px;color:#6b7780;padding:6px 0;">
                      Submitted at: <strong style="color:#27393f;">${new Date().toLocaleString()}</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f7fafc;padding:18px 28px 26px 28px;color:#6b7780;font-size:13px;text-align:center;">
                <div style="margin-bottom:6px;">This email was sent from your website's contact form.</div>
                <div style="font-size:12px;color:#98a3a9;">If you need to change where these notifications are sent, update your site settings.</div>
              </td>
            </tr>

          </table>
          <!-- /Main container -->
        </td>
      </tr>
    </table>
  </body>
</html>

      `,
    });

    if (emailError) {
      console.error("Email error:", emailError);
      // Don't throw error here, as the data is already saved to DB
      return NextResponse.json(
        {
          success: true,
          message: "Contact information saved, but email notification failed",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact information saved and email sent successfully",
        emailId: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to process contact form",
      },
      { status: 500 }
    );
  }
}
