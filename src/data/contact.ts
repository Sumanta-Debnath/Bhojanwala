// Contact page content. Static data: there is no API or database behind this
// page.

import backgroundImage from "@/assets/images/contact/no.jpg";

export const contact = {
  title: "Contact Us",
  /** Page background (decorative). */
  backgroundImage,
  address: {
    label: "Address",
    lines: ["PES University", "BSK Stage III", "Bengaluru-560085"],
  },
  phone: {
    label: "Phone",
    numbers: ["+91 864-792-3746", "+91 957-624-3840"],
  },
  email: {
    label: "Email",
    address: "bhojanwala852@gmail.com",
  },
  form: {
    heading: "Send us a message",
    /** Placeholders are also used as label text. */
    name: { label: "Name", placeholder: "Enter your name" },
    email: { label: "Email", placeholder: "Enter your email" },
    message: { label: "Message", placeholder: "Enter your message" },
    /** Button label. */
    submit: "Contact Us",
  },
};
