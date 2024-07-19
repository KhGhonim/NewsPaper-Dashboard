import { Suspense } from "react";
import Search from "./Search";
import Loading from "../../../loading";

export default function page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Search />
      </Suspense>
    </div>
  );
}
