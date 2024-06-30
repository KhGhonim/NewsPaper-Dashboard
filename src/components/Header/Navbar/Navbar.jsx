import MainNavbar from "../MainNavbar/MainNavbar";
import UpperNavbar from "../UpperNavbar/UpperNavbar";

export default function Navbar() {
  return (
    <div className="relative w-screen">
      {/* Upper Navbar */}
      <UpperNavbar />
      {/* Main Navbar */}
      <MainNavbar />
    </div>
  );
}
