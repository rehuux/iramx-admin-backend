export default function handler(req, res) {
  // Abhi ke liye static data (demo).
  // Baad me isse database se laa sakte hain (Supabase etc.)
  return res.status(200).json({
    aadhaar_base: "https://myvercalapi.vercel.app/fetch",
    aadhaar_key: "paidchx",
    mobile_in_base: "https://dark-trace-networks.vercel.app/api",
    mobile_in_key: "DarkTrace_Network",
    banner_text: "iramX is running normally. :)"
  });
}
