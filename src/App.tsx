/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import BooksForTechies from './components/BooksForTechies';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProgramModal from './components/ProgramModal';
import JoinModal from './components/JoinModal';
import { ProgramItem } from './data/communityData';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#FFF8F6] text-[#1A1E2D]">
      {/* 3-Zone Navigation Bar */}
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section (Canva Peach Background #FFDCD5 & Bogart Typography) */}
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* About Section (Collaboration, Creativity, Community) */}
        <About />

        {/* Programs Section (Explorers, Resources, Moonshot, Wikipedia Docs) */}
        <Programs onSelectProgram={(prog) => setSelectedProgram(prog)} />

        {/* Books for Techies & Events Spotlight */}
        <BooksForTechies />

        {/* Contact & Social Links Section */}
        <ContactSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
