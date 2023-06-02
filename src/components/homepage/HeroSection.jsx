import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            Build with VCMS
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            With VCMS, we build a video content moderation system, automatically
            detecting videos with sensitive and unsafe content for users. In
            addition, we also developed a text recognition system in photos and
            videos, helping to filter out inappropriate words.
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="#start-exploring"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Start exploring
            </Link>
            <Link
              href="/features"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              Getting started
            </Link>
          </div>
        </div>
        <div className="mt-6 flex-1 lg:mt-0 xl:flex-none">
          <ThemedImage
            sources={{
              light: '/static/landing-page/hero-light1.png',
              dark: '/static/landing-page/hero-dark1.png',
            }}
            alt="Preview of using Dyte SDKs"
            className="max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
