export default function SliderAndTitle({ title, urlToImage, author }) {
  return (
    <div className="py-1 md:py-5 mx-auto  bg-gray-100 rounded-t-lg ">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={urlToImage}
          alt={title}
          className="w-full  sm:h-96 rounded-lg object-cover"
        />
        <div className="p-6 pb-2 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-sm font-semibold sm:text-3xl"
            >
              {title}
            </a>
            <p className="text-xs ">
              By :
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline px-3"
              >
                {author}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
