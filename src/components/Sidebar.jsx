import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import logo from '../assets/banana.png';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-5">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        end
        className=" flex flex-row justify-start items-center my-8 text-sm font-medium text-[#8cfa61] hover:text-[#faf561]"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2 text-inherit" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#061e0f]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <h2
          className="uppercase flex items-center flex-col mt-8 mb-0 text-lg font-medium
inline-block bg-gradient-to-r from-[#faf561] to-[#8cfa61]
bg-clip-text
text-transparent"
        >
          Banana Music
        </h2>
        <NavLinks />
      </div>
      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-darkgreen hover:cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-darkgreen hover:cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[#061e0f] to-[#061e0f] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-full h-14 object-contain mb-0"
        />
        <h2
          className="uppercase flex items-center flex-col mt-5 mb-0 text-lg font-medium
inline-block bg-gradient-to-r from-[#ebe415] to-[#48be1a]
bg-clip-text
text-transparent"
        >
          Banana Music
        </h2>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
