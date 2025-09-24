export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Example: Log to console, replace with email API / DB storage
  console.log('Contact form submission:', { name, email, message });

  return res.status(200).json({ success: true });
}
