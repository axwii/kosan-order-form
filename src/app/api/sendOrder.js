import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, product, quantity, recaptchaToken } = req.body;

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return res.status(400).json({ message: "reCAPTCHA failed, please try again." });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email message
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "internal-recipient@example.com", // Replace with your internal email
      subject: `New Order from ${name}`,
      text: `Order Details:\n\nName: ${name}\nEmail: ${email}\nProduct: ${product}\nQuantity: ${quantity}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Order sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send order. Please try again." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
