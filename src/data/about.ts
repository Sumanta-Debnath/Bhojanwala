// About page content. Static data: there is no API or database behind this
// page. Wording (including curly quotes and the trailing dots shown while
// collapsed) is intentional.

import heroImage from "@/assets/images/about/back.jpg";

export const about = {
  title: "Who Are We?",
  /** Always-visible part of the text. */
  intro:
    "Hello everyone we are “Bhojanwala”. We at Bhojanwala give you the best technology platform that connects the customers to the best hotel partners and serving their multiple needs. Various customers use our platform to search and discover foods, read and write customer generated reviews and make payments while they are ordering something.",
  /** Shown/hidden by the "Read more" button. */
  more: "On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We’ve been empowering our customers in discovering new tastes and experiences in just one go. By putting together meticulous information from our customers, we enable them to make an informed choice. We also provide our delivery partners with transparent and flexible earning opportunities.",
  /** Shown after the intro while the rest of the text is collapsed. */
  ellipsis: "....",
  /** Decorative hero image. */
  image: heroImage,
};
