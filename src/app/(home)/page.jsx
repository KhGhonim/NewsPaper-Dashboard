import HeroSectionSlider from "../../components/HeroSection/HeroSectionSlider";
import LatestWorldNews from "../../components/News/WorldNews/LatestWorldNews";
import BannerAD from "../../components/BannerAd/BannerAD";
import TopStories from "../../components/UserChoice/User/User";
import PopularStories from "../../components/SideBars/PopularStories/PopularStories";
import Weather from "../../components/SideBars/WeatherNews/Weather";
import Followus from "../../components/SideBars/FollowUs/Followus";
import Tags from "../../components/SideBars/Tags/Tags";
import Catagories from "../../components/SideBars/Catagories/Catagories";
import SliderTrendingNews from "../../components/SliderTrendingNews/SliderTrendingNews";
import { ToastContainer } from "react-toastify";
import EditorChoice from "components/SideBars/EditorChoice/EditorChoice";

export default function Home() {
  return (
    <>
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
          <EditorChoice />
          <Catagories />
        </div>
      </div>
      {/* <FeaturedVideo /> */}

      {/* <div className="flex">
        <div className=" w-1/2  px-5 max-sm:w-full">
          <BestInCatagories />
        </div>
        <div className=" w-1/2 max-sm:hidden">
          <VerticalCatagories  />
        </div>
      </div> */}
      <SliderTrendingNews />

      <ToastContainer />
    </>
  );
}
