'use client'

import Title from "./homepage/components/Title";
import Headline from "./homepage/components/Headline";
import SocialLinks from "./homepage/components/SocialLinks";
import AboutSection from "./homepage/components/AboutSection";
import ProjectContainer from "./homepage/components/ProjectContainer";
import ExperienceContainer from "./homepage/components/ExperienceContainer";
import EducationContainer from "./homepage/components/EducationContainer";
import SkillsSection from "./homepage/components/SkillsSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-white px-4 -mt-[80px] pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-950 to-gray-900 z-0"></div>
        <div className="absolute inset-0 z-0 lattice-pattern"></div>
        <div className="z-10 relative">
          <Title />
          <Headline />
          <SocialLinks />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-900">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-950">
        <div className="w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">Projects</h2>
          <ProjectContainer />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">Experience</h2>
          <div className="flex flex-col gap-8 mx-auto max-w-3xl">
            <ExperienceContainer />
            <EducationContainer />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-100">Skills</h2>
          <SkillsSection />
        </div>
      </section>
    </div>
  );
}
