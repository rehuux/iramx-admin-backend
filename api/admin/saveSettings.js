export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const token = req.headers.authorization;

  if (token !== "REHU_ADMIN_TOKEN_786") {
    return res.status(403).json({ success: false, error: "Unauthorized" });
  }

  const body = JSON.parse(req.body || "{}");

  return res.status(200).json({
    success: true,
    saved: body
  });
}
