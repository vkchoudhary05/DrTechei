
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Gauge,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { KineticTicker } from './KineticTicker';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onViewWork,
}) => {
  const [activeTab, setActiveTab] = useState<
    'nextjs' | 'react' | 'nodejs' | 'headless'
  >('nextjs');

  const [viewMode, setViewMode] = useState<
    'specs' | 'code' | 'vitals'
  >('specs');

  const architectures = {
    nextjs: {
      name: 'Next.js 15 App Router',
      category: 'Full-Stack Edge Framework',
      speed: '0.38s LCP',
      score: 99,
      features: [
        'Server Actions & Streaming SSR',
        'Edge Dynamic Micro-Caching',
        'Automated Schema & SEO Core',
      ],
      codeSnippet: `// app/api/edge-accelerate/route.ts
import { NextResponse } from 'next/server';
import { edgeCache } from '@drtechei/edge';

export const runtime = 'edge';

export async function GET() {
  const payload = await edgeCache.fetch({
    region: 'global-fastest',
    ttl: 3600,
  });

  return NextResponse.json({
    status: 'optimized',
    latencyMs: 14,
    lighthouseScore: 99
  });
}`,
      vitals: {
        lcp: '0.38s',
        inp: '22ms',
        cls: '0.00',
        ttfb: '42ms',
      },
    },

    react: {
      name: 'Custom React 19 Architecture',
      category: 'Component-Driven UI System',
      speed: '0.45s FCP',
      score: 98,
      features: [
        'Tailwind CSS Micro-Bundle System',
        'Strict Zero-Runtime State Machines',
        '60FPS Hardware-Accelerated Animation',
      ],
      codeSnippet: `// components/MotionStage.tsx
'use client';

import { motion } from 'motion/react';

export const MotionStage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="will-change-transform"
    />
  );
};`,
      vitals: {
        lcp: '0.45s',
        inp: '26ms',
        cls: '0.00',
        ttfb: '58ms',
      },
    },

    nodejs: {
      name: 'Node.js & Cloud Microservices',
      category: 'Scalable Distributed Backend',
      speed: '< 18ms Latency',
      score: 100,
      features: [
        'High-Concurrency Clustered Pools',
        'PostgreSQL / Redis Multi-Region Cache',
        'Strict OpenAPI & TypeSafe Endpoints',
      ],
      codeSnippet: `// server/service.ts
import express from 'express';
import { pool } from '@drtechei/db';

const app = express();

app.get('/api/telemetry', async (req, res) => {
  const result = await pool.query('SELECT * FROM cluster');

  res.json({
    cluster: 'healthy',
    activeNodes: 6,
    p99LatencyMs: 12
  });
});`,
      vitals: {
        lcp: '0.30s',
        inp: '14ms',
        cls: '0.00',
        ttfb: '18ms',
      },
    },

    headless: {
      name: 'Headless CMS & Commerce',
      category: 'Decoupled Content Platform',
      speed: 'Instant Edge Delivery',
      score: 99,
      features: [
        'WordPress GraphQL & Shopify Plus',
        'Sanity.io & Strapi Real-Time APIs',
        'Total Content Editor Autonomy',
      ],
      codeSnippet: `// lib/cms.ts
import { createClient } from '@drtechei/headless';

export const cms = createClient({
  endpoint: 'https://cdn.drtechei.com/graphql',
  cache: 'force-cache',
  revalidate: 60,
});`,
      vitals: {
        lcp: '0.42s',
        inp: '30ms',
        cls: '0.00',
        ttfb: '64ms',
      },
    },
  };

  const currentArch = architectures[activeTab];

  return (
    <section
      id="hero-section"
      className="
        relative
        overflow-hidden
        bg-[#f8fafc]
        text-slate-900
        border-b
        border-slate-200
      "
    >
      {/* LIGHT DOT BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-70
          bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      {/* SOFT LIGHT GLOWS */}
      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[500px]
          sm:w-[700px]
          h-[250px]
          sm:h-[350px]
          rounded-full
          bg-indigo-200/30
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-20
          right-[-120px]
          w-64
          sm:w-80
          h-64
          sm:h-80
          rounded-full
          bg-orange-200/25
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-[-120px]
          w-72
          h-72
          rounded-full
          bg-blue-200/20
          blur-3xl
          pointer-events-none
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-8
          sm:py-12
          md:py-16
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            sm:gap-10
            lg:gap-12
            items-center
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="
              lg:col-span-7
              flex
              flex-col
              text-left
              min-w-0
            "
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                text-[10px]
                sm:text-xs
                font-semibold
                self-start
                mb-4
                sm:mb-5
                border
                border-slate-200
                bg-white/80
                backdrop-blur-md
                shadow-sm
                text-indigo-700
                max-w-full
                overflow-hidden
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>

              <span className="font-bold whitespace-nowrap">
                #1 Global Tech Partner
              </span>

              <span className="text-orange-500">
                •
              </span>

              <span className="text-slate-600 truncate">
                Europe • Australia • Canada • India
              </span>
            </div>

            {/* HEADLINE */}
            <h1
              className="
                text-[30px]
                leading-[1.12]
                sm:text-4xl
                md:text-5xl
                lg:text-[54px]
                font-extrabold
                tracking-tight
                text-slate-900
              "
            >
              High-Performance Web Apps,{' '}
              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-orange-500
                "
              >
                Headless CMS
              </span>{' '}
              &amp; Digital Engineering
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                sm:mt-5
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                max-w-2xl
                text-slate-600
              "
            >
              We engineer fast Next.js 15 web applications,
              custom React 19 frontends, scalable Node.js APIs,
              and headless CMS platforms. As your dedicated
              technology partner, we guarantee 95+ PageSpeed
              scores, sub-second load times, and 100% source
              code ownership.
            </p>

            {/* TECH CHIPS */}
            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              {[
                {
                  name: 'Next.js 15',
                  color:
                    'bg-slate-900 text-white border-slate-900',
                },
                {
                  name: 'React 19',
                  color:
                    'bg-cyan-50 text-cyan-700 border-cyan-200',
                },
                {
                  name: 'TypeScript',
                  color:
                    'bg-blue-50 text-blue-700 border-blue-200',
                },
                {
                  name: 'Shopify Plus',
                  color:
                    'bg-emerald-50 text-emerald-700 border-emerald-200',
                },
                {
                  name: 'WordPress / Sanity',
                  color:
                    'bg-amber-50 text-amber-700 border-amber-200',
                },
                {
                  name: 'Node.js Edge',
                  color:
                    'bg-indigo-50 text-indigo-700 border-indigo-200',
                },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`
                    text-[10px]
                    sm:text-[11px]
                    font-semibold
                    px-2.5
                    py-1
                    rounded-md
                    border
                    shadow-sm
                    whitespace-nowrap
                    ${tech.color}
                  `}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* DELIVERY HUBS */}
            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-2
                text-[11px]
                sm:text-xs
                font-medium
                text-slate-600
              "
            >
              <span className="font-semibold text-slate-800">
                Delivery Hubs:
              </span>

              <span
                className="
                  px-2.5
                  py-1
                  rounded-lg
                  font-semibold
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  flex
                  items-center
                  gap-1.5
                  shadow-sm
                "
              >
                <span>🇮🇳</span>
                <span>Delhi NCR & Pan-India</span>
              </span>

              <span className="text-slate-400">•</span>

              <span
                className="
                  px-2.5
                  py-1
                  rounded-lg
                  font-semibold
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  flex
                  items-center
                  gap-1.5
                  shadow-sm
                "
              >
                <span>🇪🇺</span>
                <span>London & Dublin</span>
              </span>

              <span className="text-slate-400">•</span>

              <span
                className="
                  px-2.5
                  py-1
                  rounded-lg
                  font-semibold
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  flex
                  items-center
                  gap-1.5
                  shadow-sm
                "
              >
                <span>🇦🇺</span>
                <span>Sydney</span>
              </span>

              <span className="text-slate-400">•</span>

              <span
                className="
                  px-2.5
                  py-1
                  rounded-lg
                  font-semibold
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  flex
                  items-center
                  gap-1.5
                  shadow-sm
                "
              >
                <span>🇨🇦</span>
                <span>Toronto</span>
              </span>
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-6
                sm:mt-8
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-3
                w-full
                sm:w-auto
              "
            >
              <motion.button
                id="hero-primary-cta"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartProject}
                className="
                  group
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  sm:px-6
                  py-3.5
                  rounded-xl
                  text-sm
                  font-bold
                  text-white
                  bg-gradient-to-r
                  from-indigo-600
                  to-violet-600
                  hover:from-indigo-700
                  hover:to-violet-700
                  shadow-lg
                  shadow-indigo-500/20
                  transition-all
                  cursor-pointer
                "
              >
                <span>Hire Tech Partner / Get Quote</span>

                <ArrowRight
                  className="
                    w-4
                    h-4
                    shrink-0
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              <motion.button
                id="hero-secondary-cta"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewWork}
                className="
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  sm:px-6
                  py-3.5
                  rounded-xl
                  text-sm
                  font-bold
                  text-slate-700
                  bg-white
                  hover:bg-slate-50
                  border
                  border-slate-200
                  shadow-sm
                  transition-all
                  cursor-pointer
                "
              >
                <span>Explore Client Work</span>
              </motion.button>
            </div>

            {/* REASSURANCE */}
            <div
              className="
                mt-7
                sm:mt-8
                pt-5
                sm:pt-6
                border-t
                border-slate-200
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-1
                xl:grid-cols-3
                gap-3
                text-xs
                font-medium
                text-slate-600
              "
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-semibold text-slate-800">
                  100% Client Code Ownership
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-semibold text-slate-800">
                  95+ PageSpeed Guaranteed
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="font-semibold text-slate-800">
                  Sub-Second Load Times
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: 'easeOut',
            }}
            className="
              lg:col-span-5
              relative
              mt-2
              lg:mt-0
              min-w-0
            "
          >
            {/* ARCHITECTURE CARD */}
            <div
              className="
                rounded-2xl
                border
                border-slate-200
                overflow-hidden
                text-left
                relative
                bg-white/95
                backdrop-blur-xl
                shadow-xl
                shadow-slate-300/30
                w-full
                min-w-0
              "
            >
              {/* CARD HEADER */}
              <div
                className="
                  px-3
                  sm:px-4
                  py-3
                  border-b
                  border-slate-200
                  flex
                  items-center
                  justify-between
                  gap-2
                  bg-slate-50
                  min-w-0
                "
              >
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    px-2
                    sm:px-2.5
                    py-1
                    rounded-md
                    text-[9px]
                    sm:text-xs
                    font-mono
                    border
                    border-slate-200
                    bg-white
                    text-slate-500
                    min-w-0
                    flex-1
                    max-w-[190px]
                  "
                >
                  <Lock className="w-3 h-3 text-emerald-500 shrink-0" />

                  <span className="truncate">
                    drtechei.com/diagnostics
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-[9px]
                    sm:text-[11px]
                    font-bold
                    text-emerald-600
                    bg-emerald-50
                    px-2
                    py-0.5
                    rounded-full
                    border
                    border-emerald-200
                    shrink-0
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden xs:inline">
                    Live Audit
                  </span>
                  <span className="xs:hidden">
                    Live
                  </span>
                </div>
              </div>

              {/* METRICS */}
              <div
                className="
                  p-3
                  sm:p-4
                  border-b
                  border-slate-200
                  flex
                  flex-col
                  sm:flex-row
                  items-start
                  sm:items-center
                  justify-between
                  gap-3
                  bg-white
                "
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* SPEED DIAL */}
                  <div
                    className="
                      relative
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-slate-200"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />

                      <motion.path
                        key={currentArch.score}
                        initial={{
                          strokeDasharray: '0, 100',
                        }}
                        animate={{
                          strokeDasharray: `${currentArch.score}, 100`,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: 'easeOut',
                        }}
                        className="text-emerald-500"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        font-mono
                        font-black
                        text-xs
                        text-emerald-600
                      "
                    >
                      <span>{currentArch.score}</span>

                      <span
                        className="
                          text-[7px]
                          text-slate-400
                          font-normal
                        "
                      >
                        PERF
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div
                      className="
                        text-xs
                        font-bold
                        flex
                        items-center
                        gap-1.5
                        text-slate-800
                      "
                    >
                      <span>
                        Lighthouse 100/100 Core
                      </span>

                      <Gauge className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    </div>

                    <div
                      className="
                        text-[10px]
                        sm:text-[11px]
                        text-slate-500
                        font-mono
                        mt-0.5
                        truncate
                      "
                    >
                      LCP {currentArch.vitals.lcp} • INP{' '}
                      {currentArch.vitals.inp} • CLS{' '}
                      {currentArch.vitals.cls}
                    </div>
                  </div>
                </div>

                {/* VIEW MODE */}
                <div
                  className="
                    flex
                    items-center
                    gap-1
                    p-1
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    w-full
                    sm:w-auto
                  "
                >
                  {(['specs', 'code', 'vitals'] as const).map(
                    (mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setViewMode(mode)}
                        className={`
                          flex-1
                          sm:flex-none
                          px-2.5
                          py-1
                          rounded-lg
                          text-[10px]
                          sm:text-[11px]
                          font-bold
                          capitalize
                          transition-all
                          cursor-pointer
                          ${
                            viewMode === mode
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'text-slate-500 hover:text-slate-800'
                          }
                        `}
                      >
                        {mode}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-3 sm:p-5">
                {/* FRAMEWORK TABS */}
                <div
                  className="
                    grid
                    grid-cols-4
                    gap-1.5
                    p-1
                    rounded-xl
                    mb-4
                    text-center
                    border
                    border-slate-200
                    bg-slate-50
                  "
                >
                  {(
                    [
                      'nextjs',
                      'react',
                      'nodejs',
                      'headless',
                    ] as const
                  ).map((tabKey) => {
                    const isSelected =
                      activeTab === tabKey;

                    const labels = {
                      nextjs: {
                        short: 'Next',
                        full: 'Next.js 15',
                      },
                      react: {
                        short: 'React',
                        full: 'React 19',
                      },
                      nodejs: {
                        short: 'Node',
                        full: 'Node APIs',
                      },
                      headless: {
                        short: 'CMS',
                        full: 'Headless',
                      },
                    };

                    return (
                      <button
                        key={tabKey}
                        type="button"
                        onClick={() =>
                          setActiveTab(tabKey)
                        }
                        className={`
                          py-2
                          px-1
                          rounded-lg
                          text-[10px]
                          sm:text-xs
                          transition-all
                          cursor-pointer
                          font-bold
                          truncate
                          ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'text-slate-500 hover:text-slate-800 hover:bg-white'
                          }
                        `}
                      >
                        <span className="sm:hidden">
                          {labels[tabKey].short}
                        </span>

                        <span className="hidden sm:inline">
                          {labels[tabKey].full}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* DYNAMIC CONTENT */}
                <AnimatePresence mode="wait">
                  {/* SPECS */}
                  {viewMode === 'specs' && (
                    <motion.div
                      key={`specs-${activeTab}`}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        p-3
                        sm:p-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        space-y-3
                      "
                    >
                      <div
                        className="
                          flex
                          flex-col
                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                          gap-2
                        "
                      >
                        <div className="min-w-0">
                          <h4
                            className="
                              text-sm
                              font-bold
                              text-slate-800
                              break-words
                            "
                          >
                            {currentArch.name}
                          </h4>

                          <p
                            className="
                              text-xs
                              text-slate-500
                              font-medium
                              mt-0.5
                            "
                          >
                            {currentArch.category}
                          </p>
                        </div>

                        <span
                          className="
                            self-start
                            text-[10px]
                            sm:text-xs
                            font-mono
                            font-bold
                            px-2.5
                            py-1
                            rounded-full
                            bg-emerald-50
                            border
                            border-emerald-200
                            text-emerald-600
                            whitespace-nowrap
                          "
                        >
                          {currentArch.speed}
                        </span>
                      </div>

                      <div className="space-y-2 pt-1">
                        {currentArch.features.map(
                          (feat, idx) => (
                            <div
                              key={idx}
                              className="
                                flex
                                items-start
                                gap-2
                                text-xs
                                text-slate-600
                              "
                            >
                              <CheckCircle2
                                className="
                                  w-3.5
                                  h-3.5
                                  text-emerald-500
                                  shrink-0
                                  mt-0.5
                                "
                              />

                              <span>
                                {feat}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* CODE */}
                  {viewMode === 'code' && (
                    <motion.div
                      key={`code-${activeTab}`}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        p-3
                        sm:p-3.5
                        rounded-xl
                        bg-slate-950
                        text-slate-200
                        font-mono
                        text-[10px]
                        sm:text-[11px]
                        overflow-x-auto
                        leading-relaxed
                        border
                        border-slate-800
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-2
                          pb-2
                          mb-2
                          border-b
                          border-slate-800
                          text-[9px]
                          sm:text-[10px]
                          text-slate-400
                        "
                      >
                        <span
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-emerald-400
                            font-semibold
                            whitespace-nowrap
                          "
                        >
                          <Terminal className="w-3.5 h-3.5 shrink-0" />

                          <span>
                            Production Implementation
                          </span>
                        </span>

                        <span
                          className="
                            text-orange-400
                            font-bold
                            whitespace-nowrap
                          "
                        >
                          TypeSafe 5.8
                        </span>
                      </div>

                      <pre className="overflow-x-auto">
                        <code>
                          {currentArch.codeSnippet}
                        </code>
                      </pre>
                    </motion.div>
                  )}

                  {/* VITALS */}
                  {viewMode === 'vitals' && (
                    <motion.div
                      key={`vitals-${activeTab}`}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                        p-3
                        sm:p-4
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        space-y-3
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-2
                          text-xs
                          font-bold
                          text-slate-800
                        "
                      >
                        <span>
                          Core Web Vitals Pass
                        </span>

                        <span
                          className="
                            text-[9px]
                            sm:text-[10px]
                            font-bold
                            text-emerald-600
                            bg-emerald-50
                            px-2
                            py-0.5
                            rounded-full
                            border
                            border-emerald-200
                            whitespace-nowrap
                          "
                        >
                          Zero Penalties
                        </span>
                      </div>

                      <div
                        className="
                          grid
                          grid-cols-2
                          gap-2
                          text-left
                        "
                      >
                        <div
                          className="
                            p-2.5
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                          "
                        >
                          <div className="text-[10px] text-slate-400 font-medium">
                            LCP (Load Speed)
                          </div>

                          <div className="text-sm font-mono font-bold text-emerald-600">
                            {currentArch.vitals.lcp}
                          </div>
                        </div>

                        <div
                          className="
                            p-2.5
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                          "
                        >
                          <div className="text-[10px] text-slate-400 font-medium">
                            INP (Interaction)
                          </div>

                          <div className="text-sm font-mono font-bold text-emerald-600">
                            {currentArch.vitals.inp}
                          </div>
                        </div>

                        <div
                          className="
                            p-2.5
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                          "
                        >
                          <div className="text-[10px] text-slate-400 font-medium">
                            CLS (Layout Shift)
                          </div>

                          <div className="text-sm font-mono font-bold text-emerald-600">
                            {currentArch.vitals.cls}
                          </div>
                        </div>

                        <div
                          className="
                            p-2.5
                            rounded-lg
                            border
                            border-slate-200
                            bg-white
                          "
                        >
                          <div className="text-[10px] text-slate-400 font-medium">
                            TTFB (Response)
                          </div>

                          <div className="text-sm font-mono font-bold text-emerald-600">
                            {currentArch.vitals.ttfb}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CARD FOOTER */}
                <div
                  className="
                    mt-3.5
                    pt-3
                    border-t
                    border-slate-200
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-2
                    text-xs
                    text-slate-500
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-medium
                    "
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />

                    <span>
                      Tested Production Architecture
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={onStartProject}
                    className="
                      text-xs
                      font-bold
                      text-indigo-600
                      hover:text-indigo-800
                      inline-flex
                      items-center
                      gap-1
                      cursor-pointer
                      group
                    "
                  >
                    <span>Request Spec</span>

                    <ArrowRight
                      className="
                        w-3
                        h-3
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* LATENCY BADGE */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              }}
              className="
                mt-3
                lg:absolute
                lg:-bottom-4
                lg:-left-4
                p-3
                rounded-xl
                border
                border-slate-200
                bg-white/95
                text-slate-800
                backdrop-blur-md
                shadow-lg
                flex
                items-center
                gap-2.5
                text-left
                w-full
                lg:w-auto
                max-w-full
              "
            >
              <div
                className="
                  w-8
                  h-8
                  rounded-lg
                  bg-indigo-50
                  text-indigo-600
                  flex
                  items-center
                  justify-center
                  font-bold
                  shrink-0
                "
              >
                <Zap className="w-4 h-4" />
              </div>

              <div className="min-w-0">
                <div
                  className="
                    text-[11px]
                    sm:text-xs
                    font-bold
                    flex
                    items-center
                    gap-1
                  "
                >
                  <span className="truncate">
                    Sub-Second Global Edge Latency
                  </span>

                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-emerald-500
                      animate-ping
                      shrink-0
                    "
                  />
                </div>

                <div
                  className="
                    text-[10px]
                    sm:text-[11px]
                    text-slate-500
                    font-mono
                    truncate
                  "
                >
                  London: 24ms • Sydney: 32ms • Delhi: 12ms
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* TICKER */}
      <KineticTicker
        theme="light"
        speed="normal"
      />
    </section>
  );
};

