import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  const linkNames = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfir text-3xl font-bold">JE</h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {linkNames.map((linkName) => (
              <Link
                key={`desktop-${linkName}`}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page={linkName}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {linkNames.map((linkName) => (
                <Link
                  key={`mobile-${linkName}`}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page={linkName}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
