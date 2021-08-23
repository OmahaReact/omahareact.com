import { Popover } from "@headlessui/react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Popover as="header" className="relative">
      <div className="bg-gray-900 pt-6">
        <Navigation />
        <MobileNavigation />
      </div>
    </Popover>
  );
};

export default Header;
