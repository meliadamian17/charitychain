import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import Charity_Chain_logo from "../assets/Charity_Chain_logo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import "../index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 59) {
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
      } w-full flex items-center py-5 fixed top-0 z-20 my-bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={Charity_Chain_logo} alt='logo' className='w-12 h-12 object-contain paddingX' /> */}
          
          <p className='text-white text-[18px] font-bold cursor-pointer flex p-3'>
            CharityChain | Linking Donations to Charities
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 justify-start'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-lg" : "text-white"
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li>
        <Popup trigger={<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"> Join Us! </button>} modal>
        {close => (
            <div className="p-4 bg-white rounded-md flex flex-col">
            <h2 className="text-2xl mb-6">Login</h2>
            <form className="flex flex-col justify-between flex-grow">
                <div className="mb-6">
                <label className="block text-my-olive text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-6">
                <label className="block text-my-olive text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                </div>
                <div className="mb-6 flex items-center justify-between">
                <button className="bg-olive font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline border" type="button">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-my-olive" href="#">
                    Create Account
                </a>
                </div>
            </form>
            <button className="mt-4 bg-olive py-1 px-2 rounded-full self-end border" onClick={close}>Close</button>
            </div>
        )}
        </Popup>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className="w-[28px] h-[28px] object-contain cursor-pointer justify-end"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 my-bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-xl`}
          >
            <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-lg" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;