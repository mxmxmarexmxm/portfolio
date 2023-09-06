import React, { useContext } from 'react';
import Settings from '../../assets/icons/settings';
import { SettingsContext } from '../../context/SettingsContext';
import avatar from '../../assets/img/nav-avatar.png';

const Navbar = (props) => {
  const { settings } = useContext(SettingsContext);
  const { openSettings } = props;
  return (
    <nav className="nav-menu smooth-scroll flex fixed bg-[#000000] top-0 right-0 gap-2 sm:gap-8 w-full items-center px-2 py-2 sm:py-4 font-semibold z-50">
      <div className="w-8 aspect-square self-start">
        <img
          src={avatar}
          className="h-full w-full object-contain"
          alt="avatar"
        />
      </div>
      <ul className="flex sm:text-xl gap-4 sm:gap-8 w-full items-center text-sm font-semibold">
        <li className="cursor-pointer whitespace-nowrap">
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer whitespace-nowrap">
          <a href="#about-me">About Me</a>
        </li>
        <li className="cursor-pointer whitespace-nowrap">
          <a href="#work">Projects</a>
        </li>
        <li className="cursor-pointer whitespace-nowrap">
          <a href="#contact">Contact</a>
        </li>
        <li className="cursor-pointer ml-0" onClick={openSettings}>
          <Settings
            className="cursor-pointer w-6 sm:w-8"
            color={settings.iconsColor}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
