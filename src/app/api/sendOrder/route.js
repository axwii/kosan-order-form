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

    // Generate product rows for the HTML table
    const productRows = Object.entries(products)
      .map(
        ([key, value]) =>
          `<tr>
             <td style="padding: 8px; border: 1px solid #ddd;">${key}</td>
             <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${value}</td>
           </tr>`
      )
      .join("");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "bestilling@kosan-albertslund.dk",
      subject: `Ny gasbestilling fra ${companyName}`,
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
        ${Object.entries(products)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")}
      `,
      html: `
        <p>Firmanavn: <strong>${companyName}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>Kundenummer: <strong>${customerNumber}</strong></p>
        <p>Reference nummer: <strong>${
          referenceNumber || "Ikke angivet"
        }</strong></p>
        <p>Telefon nummer: <strong>${phoneNumber}</strong></p>
        <p>Adresse: <strong>${address}</strong></p>
        <p>Postnummer: <strong>${postalCode}</strong></p>
        <p>By: <strong>${city}</strong></p>
        <p><strong>Produkter:</strong></p>
        <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
          <thead>
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd; background-color: #f4f4f4;">Produkt</th>
              <th style="padding: 8px; border: 1px solid #ddd; background-color: #f4f4f4;">Antal</th>
            </tr>
          </thead>
          <tbody>
            ${productRows}
          </tbody>
        </table>
      `,
    };

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Bekræftelse af din bestilling hos ${companyName}`,
      text: `
        Tak for din bestilling!
        Her er en oversigt over din ordre:
        
        Firmanavn: ${companyName}
        Email: ${email}
        Kundenummer: ${customerNumber}
        Reference nummer: ${referenceNumber}
        Telefon nummer: ${phoneNumber}
        Adresse: ${address}
        Postnummer: ${postalCode}
        By: ${city}
        Produkter:
        ${Object.entries(products)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")}
      `,
      html: `
        <p>Tak for din bestilling!</p>
        <p>Her er en oversigt over din ordre:</p>
        <p>Firmanavn: <strong>${companyName}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>Kundenummer: <strong>${customerNumber}</strong></p>
        <p>Reference nummer: <strong>${
          referenceNumber || "Ikke angivet"
        }</strong></p>
        <p>Telefon nummer: <strong>${phoneNumber}</strong></p>
        <p>Adresse: <strong>${address}</strong></p>
        <p>Postnummer: <strong>${postalCode}</strong></p>
        <p>By: <strong>${city}</strong></p>
        <p><strong>Produkter:</strong></p>
        <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
          <thead>
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd; background-color: #f4f4f4;">Produkt</th>
              <th style="padding: 8px; border: 1px solid #ddd; background-color: #f4f4f4;">Antal</th>
            </tr>
          </thead>
          <tbody>
            ${productRows}
          </tbody>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: "Bestillingen er sendt! Tak for din ordre." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Ups! Noget gik galt. Prøv igen eller kontakt os for hjælp." },
      { status: 500 }
    );
  }
}