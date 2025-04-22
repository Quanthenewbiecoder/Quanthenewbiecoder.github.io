import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import TimelineSection from './components/TimelineSection';
import TechStack from './components/TechStack';
import StickyNavBar from './components/StickyNavBar';

export default function App() {
  return (
    <>
      <div className="starry-bg" />
      <div className="twinkling" />
      <div className="relative z-10 min-h-screen text-white">
        <StickyNavBar />
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="experience">
          <TimelineSection />
        </div>
        <div id="techstack">
          <TechStack />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </>
  );
}
