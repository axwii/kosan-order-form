import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
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
  } = body;

  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

  try {
    const transporter = nodemailer.createTransport({
        host: "send.one.com", 
        port: 465, 
        secure: true,
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
      to: "axel@wiingaard.net",
      subject: "New Gas Order",
      text: `
        Firmanavn: ${companyName}
        Email: ${email}
        Kundenummer: ${customerNumber}
        Reference nummer: ${referenceNumber}
        Telefon nummer: ${phoneNumber}
        Adresse: ${address}
        Postnummer: ${postalCode}
        By: ${city}
        
        Produkter:
        ${productDetails}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Order sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}