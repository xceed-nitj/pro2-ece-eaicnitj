import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Committees",
    href: "/committee",
    current: false,
    subItems: [
      { name: "Organising Heads", href: "/committee/main" },
      { name: "International Advisory Committee", href: "/committee/international" },
      { name: "National Advisory Committee", href: "/committee/national" },
      { name: "Technical Committee", href: "/committee/technical" },
      { name: "Other Committees", href: "/committee/others" },

    ],
  },
  { name: "Location", href: "/location", current: false },
  { name: "Accommodation", href: "/accommodation", current: false },
  { name: "Registration Fee", href: "/registration", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [currentNavigation, setCurrentNavigation] = useState(navigation);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: location.pathname.endsWith(item.href),
    }));
    setCurrentNavigation(updatedNavigation);
  }, []);

  return (
    <div>
      <Disclosure as="header" className="bg-accent-300">
        {({ open }) => (
          <>
            <div className="mx-auto">
              <div className="relative px-2 sm:px-4 lg:px-8 flex justify-between items-center bg-accent-300">
                <span className="text-xl font-bold text-accent-800">
                  EAIC 2025
                </span>
                <div className="relative z-10 flex items-center lg:hidden">
                  <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-accent-700 hover:bg-accent-400 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-300"
                    onClick={() => setIsDropdownOpen((prevState) => !prevState)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:flex" aria-label="Global">
                  {currentNavigation.map((item) => (
                    <div key={item.name} className="relative group">
                      {item.subItems ? (
                        <>
                          <Link
                            to={item.href}
                            className={`inline-flex items-center py-5 px-2 text-xs text-accent-800 uppercase font-bold ${
                              isDropdownOpen
                                ? "bg-accent-500 text-accent-100"
                                : "hover:bg-accent-500 hover:text-accent-100"
                            }`}
                            aria-current={item.current ? "page" : undefined}
                            onClick={() =>
                              setIsDropdownOpen((prevState) => !prevState)
                            }
                          >
                            {item.name}
                          </Link>
                          <div className="absolute left-0 hidden mt-0 w-48 origin-top-left bg-accent-100 shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                            <div className="py-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-4 py-2 text-sm text-accent-800 hover:bg-accent-500 hover:text-accent-100"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="inline-flex items-center py-5 px-2 text-xs text-accent-800 uppercase hover:bg-accent-500 hover:text-accent-100 font-bold"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {currentNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => setIsDropdownOpen((prevState) => !prevState)}
                  >
                    {item.subItems ? (
                      <div className="space-y-1">
                        {item.name}
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block pl-4 text-gray-700 hover:bg-gray-50"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link to={item.href}>{item.name}</Link>
                    )}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}