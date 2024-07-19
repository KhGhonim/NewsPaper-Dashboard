import { FaRegUser, FaSearch } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

export const menuItems = [
  { name: "Home", submenu: ["Submenu 1", "Submenu 2"] },
  { name: "Posts", submenu: ["Submenu 1", "Submenu 2"] },
  { name: "Business", submenu: ["Submenu 1", "Submenu 2"] },
  { name: "Technology", submenu: ["Submenu 1", "Submenu 2"] },
  { name: "Shop", submenu: ["Submenu 1", "Submenu 2"] },
  { name: "Pages", submenu: ["Submenu 1", "Submenu 2"] },
];

export const ActionItems = [
  { Icon: <IoBagOutline />, submenu: ["Cart"] },
  { Icon: <FaRegUser />, submenu: ["Sign In"] },
  { Icon: <FaSearch />, submenu: ["Search"] },
];

export const CATEGORY_IMAGES = [
  {
    name: "Health",
    image:
      "https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg",
    link: "/Health",
  },
  {
    name: "Politics",
    image:
      "https://blog.politics.ox.ac.uk/wp-content/uploads/2023/05/visual-politics-scaled.jpg",
    link: "/Politics",
  },
  {
    name: "Technology",
    image:
      "https://moonpreneur.com/blog/wp-content/uploads/2023/07/top-technology-news.png",
    link: "/Technology",
  },
  {
    name: "Business",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjPGGNSjIECuVxu6_swvMOSIH15uQcZpvww&s",
    link: "/Business",
  },
];

export const CATEGORIES = [
  { name: "BUSINESS", link: "/Business" },
  { name: "POLITICS", link: "/Politics" },
  { name: "HEALTH", link: "/Health" },
  { name: "TECHNOLOGY", link: "/Technology" },
];

export const FloatingCatagoriesitems = [
  {
    href: "/Politics",
    className: "flex items-center justify-center h-16 border-b-4",
    imgSrc: "/Socail/politics.png",
    alt: "bucket-icon",
    submenu: "Politics",
  },
  {
    href: "/Technology",
    className: "flex items-center justify-center h-16 border-b-4",
    imgSrc: "/Socail/technology.png",
    alt: "bucket-icon",
    submenu: "Technology",
  },
  {
    href: "/Health",
    className: "flex items-center justify-center h-16 border-b-4",
    imgSrc: "/Socail/healthcare.png",
    alt: "bucket-icon",
    submenu: "Health",
  },
  {
    href: "/Business",
    className: "flex items-center justify-center h-16",
    imgSrc: "/Socail/human.png",
    alt: "bucket-icon",
    submenu: "Business",
  },
];
