// Biryani & Rolls page content. Static data: no API or database behind this
// page. Copy (including "biriyani" and the "#" Order Now targets) is
// intentional.

import type { ListingPageContent } from "./listings";
import introImage from "@/assets/images/biryani/p.jpg";
import hyderabadiImage from "@/assets/images/biryani/v.webp";
import amburImage from "@/assets/images/biryani/ambur.webp";
import kathiRollImage from "@/assets/images/biryani/roll.jpg";
import tikkaRollImage from "@/assets/images/biryani/tikka.jpg";

export const biryaniAndRolls: ListingPageContent = {
  heading:
    "Explore the various authentic Biryani & Rolls from different places of India.",
  subheading: "Choose from a variety of delicious meals to cheer up your mood.",
  description:
    "From gazing at the stunning golden rice grains, to transcending into a royal world because of the striking flavours and aroma, to swallowing that first portion of rice and tender meat pieces, only a biriyani lover can understand the state of mind when being treated with this delicacy.",
  image: introImage,
  imageAlt: "Pan of biryani rice with cashews, mint and fried onions",
  imageWidth: 1920,
  imageHeight: 1180,
  listings: [
    {
      name: "Hyderabadi Chicken Dum Biryani",
      restaurant: "Behrouz Biryani",
      location: "Shanti Nagar, Bengaluru",
      price: "200 for one",
      rating: 5,
      image: hyderabadiImage,
      imageAlt: "Hyderabadi chicken dum biryani served in a clay pot",
      imageWidth: 620,
      imageHeight: 330,
      orderHref: "#",
    },
    {
      name: "Ambur Star Biryani",
      restaurant: "Ambur Biryani Point",
      location: "Koramangala, Bengaluru",
      price: "150 for one",
      rating: 4,
      image: amburImage,
      imageAlt: "Ambur biryani with chicken pieces on a metal plate",
      imageWidth: 1000,
      imageHeight: 667,
      orderHref: "#",
    },
    {
      name: "Chicken Kathi Kebab Roll",
      restaurant: "Rolls On Wheels",
      location: "Cunningham Road, Bengaluru",
      price: "120 for one",
      rating: 4,
      image: kathiRollImage,
      imageAlt: "Stacked chicken kathi kebab rolls wrapped in paper",
      imageWidth: 640,
      imageHeight: 464,
      orderHref: "#",
    },
    {
      name: "Chicken Tikka Roll",
      restaurant: "RollsKing",
      location: "BTM Layout, Bengaluru",
      price: "100 for one",
      rating: 5,
      image: tikkaRollImage,
      imageAlt: "Two chicken tikka rolls on a wooden board with mint chutney",
      imageWidth: 720,
      imageHeight: 480,
      orderHref: "#",
    },
  ],
};
