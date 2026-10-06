// Home page content. Static data: there is no API or database behind this
// page.

import heroVideo from "@/assets/video/la.mp4";
import biryaniImage from "@/assets/images/home/pexels-rajesh-tp-1624487.jpg";
import indianImage from "@/assets/images/home/ind.jpg";
import dessertImage from "@/assets/images/home/k.jpg";

export const hero = {
  title: "Welcome to Bhojanwala",
  tagline: "Enjoy the taste that differs!",
  video: heroVideo,
};

export type ServiceCategory = {
  /** Page this card's "Order Now" link points to. */
  href: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  /** Descriptive alt text. */
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export const services: ServiceCategory[] = [
  {
    href: "item1.html",
    title: "Biryani & Rolls",
    tagline: "Satisfy Your Hunger",
    description:
      "Make Biryani your go-to dinner party dish. It is rich in flavour, grand in tradition, and elaborate enough to take center stage at holidays and other different celebrations.",
    image: biryaniImage,
    imageAlt: "Spiced rice with roasted chicken pieces and dipping sauces",
    imageWidth: 1920,
    imageHeight: 1180,
  },
  {
    href: "item2.html",
    title: "Indian Cuisines",
    tagline: "Mouthwatering Food Options",
    description:
      "The traditional food of India has been widely appreciated for its fabulous use of herbs and spices. Indian cuisine is known for its large assortment of dishes.",
    image: indianImage,
    imageAlt: "Naan bread, fritters and curries served in clay pots",
    imageWidth: 1920,
    imageHeight: 1180,
  },
  {
    href: "item3.html",
    title: "Desserts",
    tagline: "Chilled And Sweetened",
    description:
      "From childhood treats to your's favorite dishes, desserts are deeply personal. Whether you're after cake or ice cream, something chocolatey.",
    image: dessertImage,
    imageAlt: "Two scoops of chocolate ice cream with mint in a black bowl",
    imageWidth: 1920,
    imageHeight: 1180,
  },
];
