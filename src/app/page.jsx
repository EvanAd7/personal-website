'use client'

import Title from "@/app/homepage/components/Title";
import Headline from "@/app/homepage/components/Headline";
import SocialLinks from "@/app/homepage/components/SocialLinks";
import AboutSection from "@/app/homepage/components/AboutSection";
import ProjectContainer from "@/app/homepage/components/ProjectContainer";
import ExperienceContainer from "@/app/homepage/components/ExperienceContainer";
import EducationContainer from "@/app/homepage/components/EducationContainer";
import SkillsSection from "@/app/homepage/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 via-blue-500 to-white text-white px-4">
        <Title />
        <Headline />
        <SocialLinks />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Projects</h2>
          <ProjectContainer />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Experience & Education</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mx-auto">
            <div className="w-full md:w-1/2">
              <ExperienceContainer />
            </div>
            <div className="w-full md:w-1/2">
              <EducationContainer />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">Skills</h2>
          <SkillsSection />
        </div>
      </section>
    </div>
  );
}
