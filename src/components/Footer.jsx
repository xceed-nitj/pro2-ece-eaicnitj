// import { SocialIcon } from "react-social-icons";

// const socialLinks = [
//   {
//     id: 1,
//     url: "https://www.facebook.com/",
//   },
//   {
//     id: 2,
//     url: "https://www.instagram.com/",
//   },
//   {
//     id: 3,
//     url: "https://www.x.com/",
//   },
//   {
//     id: 4,
//     url: "https://www.linkedin.com/",
//   },
//   {
//     id: 5,
//     url: "https://www.github.com/",
//   },
// ];
// const footerLinks = [
//   {
//     id: 1,
//     title: "Services",
//     links: [
//       {
//         id: 1,
//         title: "1on1 Coaching",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Company Review",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//       {
//         id: 4,
//         title: "HR Consulting",
//         url: "#",
//       },
//       {
//         id: 5,
//         title: "SEO Optimisation",
//         url: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Company",
//     links: [
//       {
//         id: 1,
//         title: "About",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Meet the Team",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//     ],
//   },
// ];
const Footer = () => {
  3;
  return (
    <>
      <footer className="bg-stone-100 lg:grid lg:grid-cols-5">
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="/side-1.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute w-full h-full bg-accent-500 z-10 mix-blend-color" />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:mx-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                {/* <span className="text-xs uppercase tracking-wide text-stone-500">
                  {" "}
                  Call us{" "}
                </span> */}


              </p>
              <p className="block text-2xl font-medium text-stone-900 hover:opacity-75 sm:text-3xl">Contact Us</p>

              <ul className="mt-4 space-y-1 text-sm text-stone-700 ">
              {/* <li>Prof. S. Bajpai</li> */}
              <li>Organizing Secretary, Conference-2024</li>
              <li>NIT Jalandhar</li>
                <li>Phone:</li>
                <li>Email:</li>
                <li> <a href="/">
                  Website: </a></li>
              </ul>

              {/* <ul className="mt-8 flex gap-6">
                {socialLinks.map((socialLink) => (
                  <li key={socialLink.id}>
                    <SocialIcon
                      style={{
                        height: 28,
                        width: 28,
                      }}
                      url={socialLink.url}
                    />
                  </li>
                ))}
              </ul> */}
            </div>

            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {footerLinks.map((footerLink) => (
                <div key={footerLink.id}>
                  <p className="font-medium text-stone-900">
                    {footerLink.title}
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {footerLink.links.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.url}
                          className="text-stone-700 transition hover:opacity-75"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>*/}
          </div> 

          <div className="mt-12 border-t border-stone-200 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="#"
                    className="text-stone-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-500 transition hover:opacity-75"
                  >
                    Cookies
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-stone-500 sm:mt-0">
                &copy; 2023 XCEED-NITJ All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
