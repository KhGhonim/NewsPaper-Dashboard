export default function FeaturedVideo() {
  return (
    <div className="relative w-screen h-dvh my-4">
      <div className="w-full h-full bg-[#191919] z-10 absolute inset-0  ">
        <div className="container mx-auto flex flex-wrap justify-center items-center bg-background text-foreground p-4 text-white">
          <div className="w-full lg:w-2/3 p-4">
            <div className="flex  items-center mb-4">
              <div className="flex justify-center items-center gap-4">
                <h2 className="text-3xl font-bold">Featured Video</h2>
                <span className="text-muted-foreground">Stay up-to-date</span>
                <div className="h-1  bg-red-500"></div>
              </div>
              <div className="flex-grow h-1 bg-gray-300 mr-6"></div>

              <div className="flex items-center space-x-4">
                <button className=" px-4 py-2 rounded bg-red-500">
                  VIEW ALL
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/800x400"
                alt="Featured Video"
                className="w-full h-auto rounded-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://openui.fly.dev/openui/64x64.svg?text=▶"
                  alt="Play Button"
                />
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold">
                London Stay Most Popular City
              </h2>
              <div className="flex items-center text-muted-foreground mt-2">
                <img
                  src="https://openui.fly.dev/openui/16x16.svg?text=🕒"
                  alt="Clock Icon"
                  className="mr-2"
                />
                <span>June 12, 2022</span>
              </div>
              <div className="mt-2">
                <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
                  Business
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 p-4 overflow-y-scroll h-96">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/120x80"
                  alt="Oculus in Trending Now"
                  className="w-1/3 h-auto rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Oculus in Trending Now</h3>
                  <div className="flex items-center text-muted-foreground mt-2">
                    <img
                      src="https://openui.fly.dev/openui/16x16.svg?text=🕒"
                      alt="Clock Icon"
                      className="mr-2"
                    />
                    <span>June 12, 2022</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/120x80"
                  alt="Additional Jobs and Economic Growth After the Pandemic"
                  className="w-1/3 h-auto rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold">
                    Additional Jobs and Economic Growth After the Pandemic
                  </h3>
                  <div className="flex items-center text-muted-foreground mt-2">
                    <img
                      src="https://openui.fly.dev/openui/16x16.svg?text=🕒"
                      alt="Clock Icon"
                      className="mr-2"
                    />
                    <span>June 13, 2022</span>
                  </div>
                  <div className="mt-2">
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      Politics
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
