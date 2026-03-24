import { Inter, Playfair_Display, JetBrains_Mono, Dancing_Script } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GridBackground from '@/components/effects/CosmicBackground';
import AtmosphericBlobs from '@/components/effects/AtmosphericBlobs';
import GrainOverlay from '@/components/effects/GrainOverlay';
import ClientShell from '@/components/layout/ClientShell';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from '@next/third-parties/google';
import GalaxyWrapper from '@/components/effects/GalaxyWrapper';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['400', '600'],
  display: 'swap',
});

export const metadata = {
  title: 'Xinshi Feng — Mathematics & Computer Science Student Researcher',
  description:
    'Portfolio of Xinshi Feng, double major in Mathematics and Computer Science at Washington University in St. Louis (WashU). Researcher in manifold theory, reinforcement learning, and machine learning. Available for Math PhD programs and research internships, Fall 2027.',
  keywords: ['Xinshi Feng', 'Mathematics', 'Computer Science', 'Washington University in St. Louis', 'WashU', 'Researcher', 'Machine Learning', 'Reinforcement Learning', 'Manifold Theory', 'Portfolio'],
  openGraph: {
    title: 'Xinshi Feng — Mathematics & Computer Science',
    description: 'Portfolio of Xinshi Feng, double major in Mathematics and Computer Science at Washington University in St. Louis.',
    url: 'https://xinshifeng.com',
    siteName: 'Xinshi Feng',
    images: [
      {
        url: '/images/headshot.jpeg', // Fallback OG image
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xinshi Feng — Mathematics & Computer Science',
    description: 'Portfolio of Xinshi Feng, double major in Mathematics and Computer Science at Washington University in St. Louis.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Xinshi Feng',
  jobTitle: 'Mathematics & Computer Science Student Researcher',
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Washington University in St. Louis' },
    { '@type': 'HighSchool', name: 'Culver Academies' },
  ],
  email: 'f.jerry@wustl.edu',
  telephone: '(949)-709-6611',
  sameAs: [
    'https://www.linkedin.com/in/xinshifeng/',
    'https://github.com/XinshiFeng',
    'https://arxiv.org/abs/2502.07537',
  ],
  knowsAbout: [
    'Differential Topology',
    'de Rham Cohomology',
    'Reinforcement Learning',
    'Machine Learning',
    'Game Theory',
    'Data Structures',
    'Algorithms',
    'Python',
    'Java',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${dancing.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <GridBackground />
          <AtmosphericBlobs />
          <GrainOverlay />
          <GalaxyWrapper />

          <ClientShell>
            <div className="flex flex-col min-h-screen relative" style={{ zIndex: 10 }}>
              <Header />
              <main id="main-content" className="flex-grow">
                {children}
              </main>
              <Footer />
              <Toaster />
            </div>
          </ClientShell>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-YOUR_GA_MEASUREMENT_ID" />
    </html>
  );
}
