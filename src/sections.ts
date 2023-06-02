import type { ComponentProps, ReactNode } from 'react';
import { ReactIcon, AndroidIcon, HTMLIcon } from './icons';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  // Product introduction
  {
    name: 'Features',
    docId: 'features',
    icon: HTMLIcon,
    section: 'introduction',
  },
  {
    name: 'Technology',
    docId: 'technology',
    icon: ReactIcon,
    section: 'introduction',
  },
  // Tech blog
  {
    name: 'Paper reading',
    docId: 'paper-reading',
    icon: ReactIcon,
    section: 'blog',
  },
  {
    name: 'Tech Blog',
    docId: 'tech-blog',
    icon: AndroidIcon,
    section: 'blog',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'Product Introduction',
      section: 'introduction',
    },
  ],
  [
    {
      name: 'Blog',
      section: 'blog',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
