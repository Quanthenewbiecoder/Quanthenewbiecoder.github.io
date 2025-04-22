import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';

const StickyNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const rocketRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let animationFrame;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const updatePosition = () => {
      setRocketPosition((prev) => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        const x = prev.x + dx * 0.05;
        const y = prev.y + dy * 0.05;

        const radians = Math.atan2(dy, dx);
        const degrees = radians * (180 / Math.PI);
        setAngle(degrees);

        return { x, y };
      });
      animationFrame = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Rocket that follows cursor and rotates toward it */}
      <div
        ref={rocketRef}
        className="fixed z-50 pointer-events-none text-white text-xl transition-transform"
        style={{
          transform: `translate(${rocketPosition.x}px, ${rocketPosition.y}px) rotate(${angle}deg)`
        }}
      >
        <FaRocket className="text-white hover:text-pink-400 active:text-yellow-400 drop-shadow animate-pulse" />
      </div>

      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/5 text-white px-6 py-2 rounded-full shadow-md z-40 backdrop-blur-md transition duration-500 ease-in-out"
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
              Experience
            </Link>
          </li>
          <li>
            <Link to="techstack" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
              Tech Stack
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center justify-between">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg px-6 py-4 rounded-xl shadow-lg text-center space-y-4 text-sm font-medium md:hidden">
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block cursor-pointer hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block cursor-pointer hover:text-blue-400"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="techstack"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block cursor-pointer hover:text-blue-400"
              >
                Tech Stack
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block cursor-pointer hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default StickyNavBar;