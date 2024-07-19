import EditorChoice from "components/SideBars/EditorChoice/EditorChoice.jsx";
import Followus from "components/SideBars/FollowUs/Followus.jsx";
import Tags from "components/SideBars/Tags/Tags.jsx";
import Search from "./Search.jsx";
export default function page() {
  return (
    <div className=" w-full flex">
      <Search />
      <div className="hidden md:block flex-col w-1/3">
        <Followus />
        <Tags />
        <EditorChoice />
      </div>
    </div>
  );
}
