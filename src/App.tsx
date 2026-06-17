import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroBanner from './components/sections/HeroBanner';
import StatsSection from './components/sections/StatsSection';
import AboutLeader from './components/sections/AboutLeader';
import ProgramsSection from './components/sections/ProgramsSection';
import FarmersSection from './components/sections/FarmersSection';
import EducationSection from './components/sections/EducationSection';
import RoadsSection from './components/sections/RoadsSection';
import DigitalSection from './components/sections/DigitalSection';
import PanchayatSection from './components/sections/PanchayatSection';
import GallerySection from './components/sections/GallerySection';
import SocialMediaPosts from './components/sections/SocialMediaPosts';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroBanner />
        <StatsSection />
        <AboutLeader />
        <ProgramsSection />
        <FarmersSection />
        <EducationSection />
        <RoadsSection />
        <DigitalSection />
        <PanchayatSection />
        <GallerySection />
        <SocialMediaPosts />
      </main>
      <Footer />
    </div>
  );
}
