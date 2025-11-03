import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import MicroBio from '../components/MicroBio';
import Footer from '../components/Footer';
import { siteMeta } from '../lib/seo';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:type" content="website" />
      </Head>

      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <Projects />
        <Timeline />
        <Skills />
        <MicroBio />
      </main>
      <Footer />
    </>
  );
}