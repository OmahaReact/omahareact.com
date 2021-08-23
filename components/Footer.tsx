import FooterNavigation from "config/FooterNavigation";

const Footer = () => {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="space-y-8 text-center flex flex-col justify-center md:flex-none">
            <img
              className="h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
              alt="Company name"
            />
            <p className="text-gray-500 text-base">
              Join our group and connect with other developers.
            </p>
            <div className="flex space-x-6 text-center w-full justify-center">
              {FooterNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 md:mt-0 text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Locations
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {FooterNavigation.locations.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0 text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Joining Our Group
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {FooterNavigation.joiningourgroup.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0 text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Group Resources
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              {FooterNavigation.ourgroup.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 py-8 text-center">
          <p className="text-base text-gray-400">
            &copy; 2021 Omaha React/Node/NextJs Group.{" "}
            <span className="block md:inline">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
