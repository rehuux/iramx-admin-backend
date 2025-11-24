export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { username, password } = JSON.parse(req.body || "{}");

  // TEMP STATIC LOGIN (backend side)
  if (username === "admin" && password === "rehu123") {
    return res.status(200).json({
      success: true,
      token: "REHU_ADMIN_TOKEN_786"
    });
  }

  return res.status(401).json({ success: false, error: "Invalid credentials" });
}
