import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';

const StickyNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rocketPosition, setRocketPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [angle, setAngle] = useState(0);
  const [rotationComplete, setRotationComplete] = useState(true);
  const rocketRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let animationFrame;
    let lastMoveTime = Date.now();
    let idleAngle = 0;
    let pauseTime = 0;

    // Ref to track cursor position between frames
    let lastCursorPos = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const hasMoved = clientX !== lastCursorPos.x || clientY !== lastCursorPos.y;
    if (hasMoved) {
        targetRef.current = { x: clientX, y: clientY };
        lastCursorPos = { x: clientX, y: clientY };
        lastMoveTime = Date.now();
    }
    };


    const updatePosition = () => {
      const now = Date.now();
      const isIdle = now - lastMoveTime > 3000; // 3s idle threshold

      setRocketPosition((prev) => {
        let targetX = targetRef.current.x;
        let targetY = targetRef.current.y;

        if (isIdle || !document.hasFocus()) {
          if (pauseTime > 0) {
            pauseTime--;
          } else {
            idleAngle += 0.01;

            const radiusX = window.innerWidth * 0.3;
            const radiusY = window.innerHeight * 0.3;
            const centerX = window.innerWidth / 2 + Math.cos(idleAngle * 0.3) * radiusX;
            const centerY = window.innerHeight / 2 + Math.sin(idleAngle * 0.2) * radiusY;
            const driftX = Math.sin(idleAngle * 2 + Math.random()) * 80;
            const driftY = Math.cos(idleAngle * 1.5 + Math.random()) * 60;

            targetX = centerX + driftX;
            targetY = centerY + driftY;

            if (Math.floor(idleAngle * 100) % 250 === 0) {
              pauseTime = 80; // pause briefly every few curves
            }
          }
        } 
        const offset = 40;
        const angleRad = (angle - 90) * (Math.PI / 180);
        const offsetX = Math.cos(angleRad) * offset;
        const offsetY = Math.sin(angleRad) * offset;

        const dx = targetX - prev.x - offsetX;
        const dy = targetY - prev.y - offsetY;
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

        const diff = ((targetAngle - angle + 540) % 360) - 180;
        const rotateStep = 2;
        const limitedDiff = Math.abs(diff) < rotateStep ? diff : rotateStep * Math.sign(diff);
        const newAngle = angle + limitedDiff;

        if (Math.abs(diff) > 1) {
          setAngle(newAngle);
          setRotationComplete(false);
          return prev;
        } else {
          setAngle(targetAngle);
          setRotationComplete(true);
        }

        const dist = Math.sqrt(dx * dx + dy * dy);
        const speed = 2;
        const easing = Math.min(speed / dist, 1);
        const x = dist > 0.5 ? prev.x + dx * easing : prev.x;
        const y = dist > 0.5 ? prev.y + dy * easing : prev.y;

        if (dist <= 0.5) {
          const finalAngle = Math.atan2(targetY - y, targetX - x) * (180 / Math.PI) + 90;
          setAngle(finalAngle);
        }
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
  }, [angle, rotationComplete]);

  return (
    <>
      <div
        ref={rocketRef}
        className="fixed z-50 pointer-events-none text-white text-xl transition-transform duration-75"
        style={{
          transform: `translate(${rocketPosition.x - 10}px, ${rocketPosition.y - 48}px) rotate(${angle}deg)`
        }}
      >
        <FaRocket className="text-white hover:text-pink-400 active:text-yellow-400 drop-shadow animate-bounce" />
      </div>

      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/5 text-white px-6 py-2 rounded-full shadow-md z-40 backdrop-blur-md transition duration-500 ease-in-out"
      >
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

        <div className="md:hidden flex items-center justify-between">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

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
