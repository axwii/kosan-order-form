import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    quantity: 1,
    honeypot: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      alert("Spam detected. Submission ignored.");
      return;
    }

    // reCAPTCHA check
    const recaptchaToken = grecaptcha.getResponse();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("/api/sendOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({ name: '', email: '', product: '', quantity: 1, honeypot: '' });
        grecaptcha.reset(); // Reset reCAPTCHA
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Failed to send order. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1em', border: '1px solid #ccc' }}>
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Honeypot Field */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          style={{ display: 'none' }}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="product">Select Product:</label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">Choose a product</option>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          required
        />

        {/* reCAPTCHA Widget */}
        <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}
