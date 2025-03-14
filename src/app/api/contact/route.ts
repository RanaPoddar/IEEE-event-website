import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Placeholder: Integrate with email service or database
      console.log('New contact form submission:', { name, email, message });

      return res.status(200).json({ success: true, message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed.`);
  }
}
