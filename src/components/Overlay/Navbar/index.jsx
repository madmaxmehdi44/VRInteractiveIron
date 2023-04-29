import React from "react";
import { AnimatePresence } from "framer-motion";

// Styles
import "./style.css";

// Icons
import {
  HiOutlineMusicNote,
  HiOutlineUsers,
  HiOutlineDesktopComputer,
  HiOutlineBookOpen,
  HiOutlineChip,
  HiOutlineCollection,
} from "react-icons/hi";

// Nav list
const navList = [
  { title: "About", icon: <HiOutlineBookOpen />, position: 0.7 },
  { title: "Team", icon: <HiOutlineUsers />, position: 2.1 },
  { title: "Stack", icon: <HiOutlineChip />, position: 6.7 },
  { title: "Portfolio", icon: <HiOutlineDesktopComputer />, position: 7.8 },
  { title: "Credits", icon: <HiOutlineCollection />, position: 9 },
];

// Mobile Nav
import MobileNav from "../MobileNav";

// Helpers
import changeCameraPosition from "../../../helpers/changeCameraPosition";

// Sound control
import SoundControl from "../SoundControl/";

const Navbar = ({
  soundLevel,
  controlIsVisible,
  setControlIsVisible,
  setSoundLevel,
  setCursorType,
}) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navigation">
          {/* Sections navigation */}
          <ul>
            {navList.map((navItem, index) => (
              <li key={`${index}-navLink`}>
                <button
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("pointer")}
                  onClick={() => changeCameraPosition(navItem.position)}
                >
                  {navItem.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme toggler & Sound Level Control */}
          <ul>
            {/* <li>
              <button aria-label="theme toggler">
                <HiOutlineSun />
              </button>
            </li> */}
            <li>
              <button
                className={`sound_control ${soundLevel == 0 && "no-sound"}`}
                aria-label="sound level control"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("pointer")}
                onClick={() => setControlIsVisible(!controlIsVisible)}
              >
                <HiOutlineMusicNote />
              </button>
            </li>
          </ul>
          {/* Sound Control */}
          <AnimatePresence>
            {controlIsVisible && (
              <SoundControl
                soundLevel={soundLevel}
                setSoundLevel={setSoundLevel}
                setCursorType={setCursorType}
              />
            )}
          </AnimatePresence>
        </nav>

        {/* Mobile menu */}
        <MobileNav navList={navList} />
      </div>
    </header>
  );
};

export default Navbar;
