'use client';

import { MotionConfig } from 'framer-motion';
import {
  Nav,
  HomepageHero,
  Section,
  About,
  TagMarquee,
  Services,
  ProjectFeature,
  Email,
  Footer,
  ProjectModal,
  ImageSliderImage,
  DetailSectionProps,
  Cursor,
} from '../components';

export interface Project {
  projectId: string;
  title: string;
  description: string;
  images: ImageSliderImage[];
  features: ImageSliderImage[];
  details: DetailSectionProps[];
  link: string;
}

export default function Homepage() {
  const projects: Project[] = [
    {
      projectId: 'k3iZKEvW',
      title: 'Skillthrive',
      description: 'Code challenges for web developers.',
      images: [
        {
          id: 'QfX47eZF',
          src: '/projects/skillthrive-1-v2.jpg',
          alt: 'Skillthrive homepage',
        },
        {
          id: '2jsLmujW',
          src: '/projects/skillthrive-2-v2.jpg',
          alt: 'Skillthrive Challenge page',
        },
        {
          id: 'pSaDmujW',
          src: '/projects/skillthrive-3-v2.jpg',
          alt: 'Skillthrive dashboard',
        },
        {
          id: '4WbLmujX',
          src: '/projects/skillthrive-4-v2.jpg',
          alt: 'Skillthrive blog post editor',
        },
      ],
      features: [
        {
          id: 'QfSx7eZF',
          src: '/projects/skillthrive-feature-1-v2.jpg',
          alt: 'Skillthrive homepage',
        },
        {
          id: '0LsLmujW',
          src: '/projects/skillthrive-feature-2-v2.jpg',
          alt: 'Skillthrive Challenge page',
        },
      ],
      details: [
        { title: 'Tech', details: 'Next.js, Supabase' },
        { title: 'Role', details: 'Design, Development' },
        { title: 'Year', details: '2020 – Present' },
      ],
      link: 'https://www.skillthrive.com?ref=hunterbecton',
    },
    {
      projectId: 'yZQfCT7t',
      title: 'CodeSlider',
      description: 'Animated code snippets created in seconds.',
      images: [
        {
          id: 'WGGHV8tn',
          src: '/projects/codeslider-1.jpg',
          alt: 'CodeSlider editor',
        },
        {
          id: 'nxjJy9db',
          src: '/projects/codeslider-2.jpg',
          alt: 'LeapPage video player',
        },
        {
          id: '8WxJy9db',
          src: '/projects/codeslider-3.jpg',
          alt: 'CodeSlider with CSS and new theme',
        },
      ],
      features: [
        {
          id: 'PwS32eZF',
          src: '/projects/codeslider-feature-1.jpg',
          alt: 'CodeSlider editor',
        },
        {
          id: '32SLmudC',
          src: '/projects/codeslider-feature-2.jpg',
          alt: 'CodeSlider with CSS and new theme',
        },
      ],
      details: [
        { title: 'Tech', details: 'Next.js, Lambda, Remotion' },
        { title: 'Role', details: 'Design, Development' },
        { title: 'Year', details: '2024 – Present' },
      ],
      link: 'https://www.codeslider.com?ref=hunterbecton',
    },
    {
      projectId: '6phudXXs',
      title: 'Vidroad',
      description: 'On-demand video agency for SaaS.',
      images: [
        {
          id: 'gYVRuX2y',
          src: '/projects/vidroad-1.jpg',
          alt: 'Vidroad homepage',
        },
        {
          id: 'p8Vy2gir',
          src: '/projects/vidroad-2.jpg',
          alt: 'Vidroad blog',
        },
        {
          id: '02Sy2gir',
          src: '/projects/vidroad-3.jpg',
          alt: 'Vidroad features',
        },
      ],
      features: [
        {
          id: '1qP32eZF',
          src: '/projects/vidroad-feature-1.jpg',
          alt: 'Vidroad homepage',
        },
        {
          id: '8XSLpswC',
          src: '/projects/vidroad-feature-2.jpg',
          alt: 'Vidroad blog page',
        },
      ],
      details: [
        { title: 'Tech', details: 'After Effects, Premiere' },
        { title: 'Role', details: 'Video marketing' },
        { title: 'Year', details: '2023 – Present' },
      ],
      link: 'https://www.vidroad.com?ref=hunterbecton',
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      <Nav />
      <main>
        <HomepageHero projects={projects} />
        <Section title="About" subtitle="01" tag="about" />
        <About />
        <TagMarquee />
        <Services />
        <Section title="Work" subtitle="02" tag="work" />
        {projects.map((project) => (
          <ProjectFeature
            key={project.projectId}
            projectId={project.projectId}
            title={project.title}
            description={project.description}
            features={project.features}
          />
        ))}
        <Section title="Contact" subtitle="03" tag="contact" />
        <Email />
      </main>
      <Footer />
      {projects.map((project) => (
        <ProjectModal
          key={project.projectId}
          projectId={project.projectId}
          title={project.title}
          description={project.description}
          details={project.details}
          images={project.images}
          link={project.link}
        />
      ))}
    </MotionConfig>
  );
}
