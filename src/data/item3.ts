// Desserts page content. Static data: no API or database behind this page.
// Copy (including the mixed price wording such as "12 for one" and "50 for 5
// pcs") and the "#" Order Now targets are intentional.

import type { ListingPageContent } from "./listings";
import introImage from "@/assets/images/desserts/laddu.jpg";
import gulabJamunImage from "@/assets/images/desserts/gulab.jpg";
import jalebiImage from "@/assets/images/desserts/jal.jpg";
import kheerImage from "@/assets/images/desserts/kheer.jpg";
import chocoImage from "@/assets/images/desserts/choco.jpg";

export const desserts: ListingPageContent = {
  heading:
    "Desserts are eaten after a meal so we make its aftertaste unforgettable… for real!",
  subheading:
    "If you have a sweet tooth, you may wish it were the only course of the meal.",
  description:
    "Whether you crave sweet, savory, decadent or healthy, we have some of top-rated desserts to satisfy your taste buds. Their presence on menu makes us feel satisfied after a meal, and compensates for low blood sugar. Sweet snacks increase the production of the so-called hormone of happiness.",
  image: introImage,
  imageAlt:
    "Assortment of Indian sweets on brass plates with a lit lamp and ribbon",
  imageWidth: 1920,
  imageHeight: 1080,
  listings: [
    {
      name: "Gulab Jamun",
      restaurant: "Bhagatram Sweets",
      location: "Shivaji Nagar, Bengaluru",
      price: "12 for one",
      rating: 4,
      image: gulabJamunImage,
      imageAlt: "Pile of glossy gulab jamun in a paper bowl",
      imageWidth: 700,
      imageHeight: 525,
      orderHref: "#",
    },
    {
      name: "Jalebi",
      restaurant: "Bharatiya Jalpan",
      location: "HAL 2nd Stage, Bengaluru",
      price: "50 for 5 pcs",
      rating: 5,
      image: jalebiImage,
      imageAlt: "Orange jalebi spirals on a banana leaf",
      imageWidth: 612,
      imageHeight: 408,
      orderHref: "#",
    },
    {
      name: "Kesariya Kheer",
      restaurant: "Anand Sweets And Savouries",
      location: "Koramangala, Bengaluru",
      price: "60",
      rating: 5,
      image: kheerImage,
      imageAlt: "Bowl of saffron kheer topped with sliced pistachios",
      imageWidth: 539,
      imageHeight: 360,
      orderHref: "#",
    },
    {
      name: "Choco-Nut Ice Cream",
      restaurant: "Corner House Ice Creams",
      location: "Basaveshwara Nagar, Bengaluru",
      price: "70",
      rating: 4,
      image: chocoImage,
      imageAlt:
        "Bowl of chocolate ice cream with sprinkles beside ice cream cones",
      imageWidth: 509,
      imageHeight: 339,
      orderHref: "#",
    },
  ],
};
