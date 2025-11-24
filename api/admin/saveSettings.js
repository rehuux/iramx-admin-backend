export default function handler(req, res) {
  const token = req.headers.authorization;

  // SIMPLE AUTH CHECK (same token as login.js)
  if (token !== "REHU_ADMIN_TOKEN_786") {
    return res.status(403).json({ success: false, error: "Unauthorized" });
  }

  const body = JSON.parse(req.body || "{}");

  // Abhi ke liye hum kuch really save nahi kar rahe,
  // sirf response me return kar rahe hain.
  // Future me yahi pe database save karenge.
  return res.status(200).json({
    success: true,
    saved: body
  });
}
