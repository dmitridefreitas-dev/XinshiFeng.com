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
  title: 'Xinshi Feng — Computer Science & Mathematics',
  description:
    'Portfolio of Xinshi Feng — CS and Math double major at WashU, researcher in manifold theory and reinforcement learning. Available Fall 2027.',
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
