import { ChevronRightIcon } from "@heroicons/react/outline";

const MainHero = () => {
  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 pb-10 sm:pb-40 lg:overflow-hidden xl:min-h-screen">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-1 md:mt-4 text-4xl tracking-tight text-center font-extrabold text-white sm:mt-5 lg:mt-6">
                <span className="block">Omaha React/Node/NextJs</span>
                <span className="pb-3 block bg-clip-text text-center text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5 text-xl mt-2">
                  Omaha, Nebraska Area
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Our group is for anybody who wants to talk about ReactJs / React
                Native / NodeJs / Next.Js and other technologies used with them.
                We welcome everyone from beginners to experts.
              </p>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl mt-5">
                Our in-person meetings are focused on the Omaha, Nebraska metro
                area (and surrounding areas), but we are not limited to any set
                location or area. We will also try to have online/remote
                meetings as technology allows.
              </p>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 lg:max-w-2xl sm:px-6 xl:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/frontmain-transp.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
