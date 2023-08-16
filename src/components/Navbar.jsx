import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { github } from "../assets";
import { linkedin } from "../assets";
import { instagram } from "../assets";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Anmol Garg
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <ul className="list-none hidden sm:flex flex-row gap-5">
          <li className="gap-4">
            <div className="justify-center">
              <div
                onClick={() =>
                  window.open("https://github.com/AnmolGarg14", "_blank")
                }
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-slate-950 black-gradient"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="justify-center">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/anmol-garg-3a18291b5/",
                    "_blank"
                  )
                }
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-slate-950 bg-sky-600"
              >
                <img
                  src={linkedin}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </li>

          <li>
            <div className="justify-center">
              <div
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/anmol_garg14",
                    "_blank"
                  )
                }
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-slate-950 instagram-gradient"
              >
                <img
                  src={instagram}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <div className="justify-center">
                  <div
                    onClick={() =>
                      window.open("https://github.com/AnmolGarg14", "_blank")
                    }
                    className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </li>

              <li>
                <div className="justify-center">
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/anmol-garg-3a18291b5/",
                        "_blank"
                      )
                    }
                    className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={linkedin}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </li>

              <li>
                <div className="justify-center">
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/anmol_garg14",
                        "_blank"
                      )
                    }
                    className="instagram-gradient w-8 h-8 rounded-full justify-center flex items-center cursor-pointer"
                  >
                    <img
                      src={instagram}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
