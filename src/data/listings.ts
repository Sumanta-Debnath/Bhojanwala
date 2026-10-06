// Shape shared by the category pages (item1, item2, item3).
// Static data: there is no API behind these pages (see src/data/item1.ts).

export type Listing = {
  /** Dish name. */
  name: string;
  restaurant: string;
  location: string;
  /** Price text exactly as authored, without the rupee sign (rendered by the UI). */
  price: string;
  /** Filled stars out of `RATING_MAX`. */
  rating: number;
  image: string;
  /** Descriptive alt text. */
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** Target of the existing "Order Now" link. */
  orderHref: string;
};

export type ListingPageContent = {
  heading: string;
  subheading: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  listings: Listing[];
};

/** A titled set of listings (e.g. "Northern Indian Cuisine"). */
export type ListingGroup = {
  title: string;
  listings: Listing[];
};

export type GroupedListingPageContent = Omit<ListingPageContent, "listings"> & {
  groups: ListingGroup[];
};

export const RATING_MAX = 5;
