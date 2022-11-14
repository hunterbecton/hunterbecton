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
      description:
        'Community website for web developers featuring subscriptions, member-only content, and custom CMS.',
      images: [
        {
          id: 'QfX47eZF',
          src: '/projects/skillthrive-1.jpg',
          alt: 'Skillthrive homepage',
        },
        {
          id: '2jsLmujW',
          src: '/projects/skillthrive-2.jpg',
          alt: 'Skillthrive Challenge page',
        },
        {
          id: 'pSaDmujW',
          src: '/projects/skillthrive-3.jpg',
          alt: 'Skillthrive edit post page',
        },
        {
          id: '4WbLmujX',
          src: '/projects/skillthrive-4.jpg',
          alt: 'Skillthrive blog post',
        },
      ],
      features: [
        {
          id: 'QfSx7eZF',
          src: '/projects/skillthrive-feature-1.jpg',
          alt: 'Skillthrive homepage',
        },
        {
          id: '0LsLmujW',
          src: '/projects/skillthrive-feature-2.jpg',
          alt: 'Skillthrive Challenge page',
        },
      ],
      details: [
        { title: 'Tech', details: 'Lambda, Next.js' },
        { title: 'Role', details: 'Design, Development' },
        { title: 'Year', details: '2020 – Present' },
      ],
      link: 'https://www.skillthrive.com?ref=hunterbecton',
    },
    {
      projectId: 'yZQfCT7t',
      title: 'LeapPage',
      description:
        'Drag-and-drop website builder to create custom landing pages for account-based marketing.',
      images: [
        {
          id: 'WGGHV8tn',
          src: '/projects/leappage-1.jpg',
          alt: 'LeapPage homepage',
        },
        {
          id: 'nxjJy9db',
          src: '/projects/leappage-2.jpg',
          alt: 'LeapPage projects dashboard',
        },
        {
          id: '8WxJy9db',
          src: '/projects/leappage-3.jpg',
          alt: 'LeapPage drag-and-drop webpage builder',
        },
        {
          id: 'pqAJy9db',
          src: '/projects/leappage-4.jpg',
          alt: 'Example of live page built with LeapPage',
        },
      ],
      features: [
        {
          id: 'PwS32eZF',
          src: '/projects/leappage-feature-1.jpg',
          alt: 'LeapPage homepage',
        },
        {
          id: '32SLmudC',
          src: '/projects/leappage-feature-2.jpg',
          alt: 'LeapPage sales page example',
        },
      ],
      details: [
        { title: 'Tech', details: 'Figma, Next.js, Tailwind' },
        { title: 'Role', details: 'Design, Development' },
        { title: 'Year', details: '2021' },
      ],
      link: 'https://www.leappage.com?ref=hunterbecton',
    },
    {
      projectId: '6phudXXs',
      title: 'Mattermix',
      description:
        'Automate marketing image creation at scale with HTML and CSS image templates.',
      images: [
        {
          id: 'gYVRuX2y',
          src: '/projects/mattermix-1.jpg',
          alt: 'Mattermix homepage',
        },
        {
          id: 'p8Vy2gir',
          src: '/projects/mattermix-2.jpg',
          alt: 'Mattermix code example',
        },
        {
          id: '02Sy2gir',
          src: '/projects/mattermix-3.jpg',
          alt: 'Mattermix account dashboard',
        },
      ],
      features: [
        {
          id: '1qP32eZF',
          src: '/projects/mattermix-feature-1.jpg',
          alt: 'Mattermix homepage',
        },
        {
          id: '8XSLpswC',
          src: '/projects/mattermix-feature-2.jpg',
          alt: 'Mattermix blog page',
        },
      ],
      details: [
        { title: 'Tech', details: 'Figma, Next.js, Tailwind' },
        { title: 'Role', details: 'Design, Development' },
        { title: 'Year', details: '2021' },
      ],
      link: 'https://www.mattermix.com?ref=hunterbecton',
    },
  ];

  return (
    <MotionConfig reducedMotion='user'>
      <Cursor />
      <Nav />
      <main>
        <HomepageHero projects={projects} />
        <Section title='About' subtitle='01' tag='about' />
        <About />
        <TagMarquee />
        <Services />
        <Section title='Work' subtitle='02' tag='work' />
        {projects.map((project) => (
          <ProjectFeature
            key={project.projectId}
            projectId={project.projectId}
            title={project.title}
            description={project.description}
            features={project.features}
          />
        ))}
        <Section title='Contact' subtitle='03' tag='contact' />
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
