import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      companyName,
      email,
      customerNumber,
      referenceNumber,
      phoneNumber,
      address,
      postalCode,
      city,
      terms,
      ...products
    } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail", // Or your preferred email service
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const productDetails = Object.entries(products)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "internal@company.com",
        subject: "New Gas Order",
        text: `
          Firma Navn: ${companyName}
          Email: ${email}
          Kundenummer: ${customerNumber}
          Referance nummer: ${referenceNumber}
          Telefon nummer: ${phoneNumber}
          Adresse: ${address}
          Postnummer: ${postalCode}
          By: ${city}
          
          Produkter:
          ${productDetails}
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Order sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
