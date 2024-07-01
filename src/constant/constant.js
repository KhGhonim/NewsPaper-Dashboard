import { FaRegUser, FaSearch } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

export const menuItems = [
  { name: 'Home', submenu: ['Submenu 1', 'Submenu 2'] },
  { name: 'Posts', submenu: ['Submenu 1', 'Submenu 2'] },
  { name: 'Business', submenu: ['Submenu 1', 'Submenu 2'] },
  { name: 'Technology', submenu: ['Submenu 1', 'Submenu 2'] },
  { name: 'Shop', submenu: ['Submenu 1', 'Submenu 2'] },
  { name: 'Pages', submenu: ['Submenu 1', 'Submenu 2'] },
];

export const ActionItems = [
  { Icon: <IoBagOutline/>, submenu: ['Cart'] },
  { Icon: <FaRegUser/>, submenu: ['Sign In'] },
  { Icon: <FaSearch/>, submenu: ['Search'] },
];
