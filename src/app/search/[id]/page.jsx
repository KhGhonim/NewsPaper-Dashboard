import ImageID from "app/(home)/(pages)/[id]/ImageID";
import News from "app/(home)/(pages)/[id]/News";
import Catagories from "components/SideBars/Catagories/Catagories";
import PopularStories from "components/SideBars/PopularStories/PopularStories";
import Tags from "components/SideBars/Tags/Tags";

export default function page({params}) {
  const { id } = params;

  return (
    <>
      <ImageID id={id} />

      <div className="container  mt-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold capitalize">
            Search :{id}
          </h1>
        </div>

        <div className="w-screen flex">
          <div className="w-2/3 max-md:w-screen p-7">
            <News id={id} />
          </div>

          <div className="hidden  md:flex flex-col gap-5 w-1/3">
            <Catagories />
            <PopularStories />
            <Tags />
          </div>
        </div>
      </div>
    </>
  );
}