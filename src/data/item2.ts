// Indian Cuisines page content. Static data: no API or database behind this
// page. Copy and the "#" Order Now targets are intentional.

import type { GroupedListingPageContent } from "./listings";
import introImage from "@/assets/images/indian/khana.jpg";
import shahiPaneerImage from "@/assets/images/indian/apn.webp";
import choleImage from "@/assets/images/indian/chole.jpg";
import dosaImage from "@/assets/images/indian/dosa.jpg";
import riceSambarImage from "@/assets/images/indian/rice.jpg";

export const indianCuisines: GroupedListingPageContent = {
  heading:
    "Experience how the rich culture, tradition and religion play significant roles in influencing the cuisines and diets of the Indians.",
  subheading:
    "Get to try some dishes from one of the world's most diverse cuisines.",
  description:
    "Spicy, rich, flavourful and diverse are terms that are frequently used to describe Indian food. All these words are apt in describing Indian cuisine, for it is diverse in variety and taste, and is made up from a wide array of regional cuisines throughout various parts of India.",
  image: introImage,
  imageAlt:
    "Assorted Indian dishes in metal bowls on a round tray with flatbread",
  imageWidth: 750,
  imageHeight: 436,
  groups: [
    {
      title: "Northern Indian Cuisine",
      listings: [
        {
          name: "Shahi Paneer with Butter Naan",
          restaurant: "Al-Bek Restaurant",
          location: "Jaynagar, Bengaluru",
          price: "280",
          rating: 5,
          image: shahiPaneerImage,
          imageAlt:
            "Shahi paneer in a black dish with butter naan and onion salad",
          imageWidth: 1200,
          imageHeight: 675,
          orderHref: "#",
        },
        {
          name: "Chole Bhature",
          restaurant: "Delhi Highway",
          location: "Indiranagar, Bengaluru",
          price: "120",
          rating: 4,
          image: choleImage,
          imageAlt: "Two puffed bhature on a white plate with a bowl of chole",
          imageWidth: 2000,
          imageHeight: 1500,
          orderHref: "#",
        },
      ],
    },
    {
      title: "Southern Indian Cuisine",
      listings: [
        {
          name: "Butter Masala Dosa",
          restaurant: "Bangalore Thindies",
          location: "Indiranagar, Bengaluru",
          price: "60",
          rating: 5,
          image: dosaImage,
          imageAlt: "Masala dosa on a wooden plate with sambar and chutneys",
          imageWidth: 539,
          imageHeight: 360,
          orderHref: "#",
        },
        {
          name: "Rice Sambar",
          restaurant: "IDC Kitchen",
          location: "Koramangala 5th Block, Bengaluru",
          price: "80",
          rating: 4,
          image: riceSambarImage,
          imageAlt: "Bowl of sambar beside a plate of steamed white rice",
          imageWidth: 2000,
          imageHeight: 1335,
          orderHref: "#",
        },
      ],
    },
  ],
};
