import HeroSectionSlider from "../../components/HeroSection/HeroSectionSlider";
import Navbar from "../../components/Header/Navbar/Navbar";
import LatestWorldNews from "../../components/News/WorldNews/LatestWorldNews";
import BannerAD from "../../components/BannerAd/BannerAD";
import TopStories from "../../components/News/TopStories/TopStories";
import PopularStories from "../../components/SideBars/PopularStories/PopularStories";
import Weather from "../../components/SideBars/WeatherNews/Weather";
import Followus from "../../components/SideBars/FollowUs/Followus";
import Tags from "../../components/SideBars/Tags/Tags";
import Catagories from "../../components/SideBars/Catagories/Catagories";
import FeaturedVideo from "../../components/FeaturedVideo/FeaturedVideo";
import BestInCatagories from "../../components/Catagories/BestInCatagories/BestInCatagories";
import VerticalCatagories from "../../components/Catagories/VerticalCatagories/VerticalCatagories";
import SliderTrendingNews from "../../components/SliderTrendingNews/SliderTrendingNews";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import EditorChoice from "components/SideBars/EditorChoice/EditorChoice";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSectionSlider />
      <div className="flex ">
        <div className="flex-col w-2/3">
          <LatestWorldNews />
          <BannerAD />
          <TopStories />
        </div>

        <div className="hidden md:block flex-col w-1/3">
          <PopularStories />
          <Weather />
          <Followus />
          <Tags />
          <EditorChoice/>
          <Catagories />
        </div>
      </div>
      <FeaturedVideo />

      <div className="flex">
        <div className=" w-1/2">
          <BestInCatagories />
        </div>
        <div className=" w-1/2">
          <VerticalCatagories />
        </div>
      </div>
      <SliderTrendingNews />
      <BannerAD />
      <Footer />

      <ToastContainer />
    </>
  );
}
