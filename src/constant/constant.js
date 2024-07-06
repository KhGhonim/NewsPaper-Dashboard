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
    name: "Sport",
    image:
      "https://indiansportsassociation.org/wp-content/uploads/2019/06/banner.jpg",
    link: "/sport",
  },
  {
    name: "Politics",
    image:
      "https://news.unl.edu/sites/default/files/styles/large_aspect/public/media/1709.014COJMC_heroBanner_1.jpg?itok=eNmyO9EM",
    link: "/politics",
  },
  {
    name: "Technology",
    image:
      "https://moonpreneur.com/blog/wp-content/uploads/2023/07/top-technology-news.png",
    link: "/technology",
  },
  {
    name: "Business",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjPGGNSjIECuVxu6_swvMOSIH15uQcZpvww&s",
    link: "/business",
  },
];

export const CATEGORIES = [
  { name: "BUSINESS", link: "/business" },
  { name: "POLITICS", link: "/politics" },
  { name: "HEALTH", link: "/health" },
  { name: "SCIENCE", link: "/science" },
  { name: "SPORTS", link: "/sports" },
  { name: "TECHNOLOGY", link: "/technology" },
];

export const FloatingCatagoriesitems = [
  {
    href: "/politics",
    className: "flex items-center justify-center h-16 border-b-4",
    imgSrc: "/Socail/politics.png",
    alt: "bucket-icon",
    submenu: "Politics",
  },
  {
    href: "/technology",
    className: "flex items-center justify-center h-16 border-b-4",
    imgSrc: "/Socail/technology.png",
    alt: "bucket-icon",
    submenu: "Technology",
  },
  {
    href: "/health",
    className: "flex items-center justify-center h-16 border-b-4",
    imgSrc: "/Socail/healthcare.png",
    alt: "bucket-icon",
    submenu: "Health",
  },
  {
    href: "/business",
    className: "flex items-center justify-center h-16",
    imgSrc: "/Socail/human.png",
    alt: "bucket-icon",
    submenu: "Business",
  },
];
