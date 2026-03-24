import HeroSection from '@/components/sections/HeroSection';
import AcademicTicker from '@/components/sections/FinanceTicker';
import KPIFullscreen from '@/components/sections/KPIFullscreen';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import SkillsHorizontal from '@/components/sections/SkillsHorizontal';
import CompetenciesSticky from '@/components/sections/CompetenciesSticky';
import TimelineScroll from '@/components/sections/TimelineScroll';
import CTASection from '@/components/sections/CTASection';
import SectionAtmosphere from '@/components/effects/SectionAtmosphere';

export const metadata = {
  title: 'Home — Xinshi Feng | Math & CS Double Major',
  description:
    'Portfolio of Xinshi Feng — Mathematics and Computer Science double major at Washington University in St. Louis. Researcher specializing in manifold theory, reinforcement learning, and game theory.',
  keywords: ['Xinshi Feng', 'Portfolio', 'Washington University in St. Louis', 'WashU Math', 'CS Double Major', 'Research Assistant'],
};

export default function Home() {
  return (
    <>
      <SectionAtmosphere atmosphere="hero">
        <HeroSection />
      </SectionAtmosphere>
      <AcademicTicker />
      <SectionAtmosphere atmosphere="work">
        <KPIFullscreen />
      </SectionAtmosphere>
      <SectionAtmosphere atmosphere="work">
        <ProjectsShowcase />
      </SectionAtmosphere>
      <SectionAtmosphere atmosphere="skills">
        <SkillsHorizontal />
      </SectionAtmosphere>
      <SectionAtmosphere atmosphere="skills">
        <CompetenciesSticky />
      </SectionAtmosphere>
      <SectionAtmosphere atmosphere="timeline">
        <TimelineScroll />
      </SectionAtmosphere>
      <SectionAtmosphere atmosphere="cta">
        <CTASection />
      </SectionAtmosphere>
    </>
  );
}
