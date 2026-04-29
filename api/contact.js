const { Resend } = require("resend");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, company, phone, service, companySize, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
  body{font-family:'Segoe UI',Arial,sans-serif;background:#f4f4f4;margin:0;padding:0}
  .wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
  .header{background:#06102B;padding:28px 32px}
  .header h1{color:#00E5C0;font-size:20px;margin:0}
  .header p{color:rgba(255,255,255,0.6);font-size:13px;margin:6px 0 0}
  .body{padding:32px}
  .row{display:flex;border-bottom:1px solid #f0f0f0;padding:12px 0}
  .row:last-child{border-bottom:none}
  .label{color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:140px;flex-shrink:0;padding-top:2px}
  .value{color:#06102B;font-size:14px;font-weight:600;flex:1}
  .msg{background:#f8fffe;border:1px solid rgba(0,229,192,0.2);border-radius:8px;padding:16px;margin-top:20px;color:#333;font-size:14px;line-height:1.6;white-space:pre-wrap}
  .footer{background:#f9f9f9;padding:16px 32px;font-size:12px;color:#aaa;text-align:center}
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>&#128228; New Quote Request</h1>
    <p>Submitted ${new Date().toUTCString()}</p>
  </div>
  <div class="body">
    <div class="row"><span class="label">Name</span><span class="value">${name}</span></div>
    <div class="row"><span class="label">Email</span><span class="value"><a href="mailto:${email}">${email}</a></span></div>
    <div class="row"><span class="label">Company</span><span class="value">${company || "—"}</span></div>
    <div class="row"><span class="label">Phone</span><span class="value">${phone || "—"}</span></div>
    <div class="row"><span class="label">Service</span><span class="value">${service || "—"}</span></div>
    <div class="row"><span class="label">Company Size</span><span class="value">${companySize || "—"}</span></div>
    ${message ? `<div class="msg">${message.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>` : ""}
  </div>
  <div class="footer">Metamorphosis MV — mm-maldive.vercel.app</div>
</div>
</body></html>`;

  try {
    const { data, error } = await resend.emails.send({
      from: "Metamorphosis MV <onboarding@resend.dev>",
      to: ["marketing@metamorphosis.com.bd"],
      reply_to: email,
      subject: `New Quote: ${name}${company ? ` — ${company}` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err.message);
    return res.status(500).json({ error: "Unexpected server error" });
  }
};
