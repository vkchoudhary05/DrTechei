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

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const [activeTab, setActiveTab] = useState<'nextjs' | 'react' | 'nodejs' | 'headless'>('nextjs');
  const [viewMode, setViewMode] = useState<'specs' | 'code' | 'vitals'>('specs');

  const architectures = {
    nextjs: {
      name: 'Next.js 15 App Router',
      category: 'Full-Stack Edge Framework',
      speed: '0.38s LCP',
      score: 99,
      features: ['Server Actions & Streaming SSR', 'Edge Dynamic Micro-Caching', 'Automated Schema & SEO Core'],
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
      }
    },
    react: {
      name: 'Custom React 19 Architecture',
      category: 'Component-Driven UI System',
      speed: '0.45s FCP',
      score: 98,
      features: ['Tailwind CSS Micro-Bundle System', 'Strict Zero-Runtime State Machines', '60FPS Hardware-Accelerated Animation'],
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
      }
    },
    nodejs: {
      name: 'Node.js & Cloud Microservices',
      category: 'Scalable Distributed Backend',
      speed: '< 18ms Latency',
      score: 100,
      features: ['High-Concurrency Clustered Pools', 'PostgreSQL / Redis Multi-Region Cache', 'Strict OpenAPI & TypeSafe Endpoints'],
      codeSnippet: `// server/service.ts
import express from 'express';
import { pool } from '@drtechei/db';

const app = express();
app.get('/api/telemetry', async (req, res) => {
  const result = await pool.query('SELECT * FROM cluster');
  res.json({ cluster: 'healthy', activeNodes: 6, p99LatencyMs: 12 });
});`,
      vitals: {
        lcp: '0.30s',
        inp: '14ms',
        cls: '0.00',
        ttfb: '18ms',
      }
    },
    headless: {
      name: 'Headless CMS & Commerce',
      category: 'Decoupled Content Platform',
      speed: 'Instant Edge Delivery',
      score: 99,
      features: ['WordPress GraphQL & Shopify Plus', 'Sanity.io & Strapi Real-Time APIs', 'Total Content Editor Autonomy'],
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
      }
    },
  };

  const currentArch = architectures[activeTab];

  return (
    <section 
      id="hero-section"
      className="relative transition-colors duration-500 overflow-hidden bg-gradient-to-b from-[#111622] via-[#1A1842] to-[#2D2575] text-white border-b border-[#2D2575]/60"
    >
      {/* Background Dot Matrix (Identical to technology-partner-finland hero) */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F2BC7B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#2D2575]/40 via-[#6366F1]/20 to-[#D98E3A]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D98E3A]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Animated Headline, Badges & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Animated Eyebrow Badge with High-Rank Keywords */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold self-start mb-5 shadow-2xs border border-white/15 bg-white/10 backdrop-blur-md text-[#F2BC7B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-bold">#1 Global Tech Partner</span>
              <span className="text-[#D98E3A]">•</span>
              <span className="text-slate-200">
                Europe • Australia • Canada • All India
              </span>
            </div>

            {/* Clear, High-Impact Big Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white">
              High-Performance Web Apps,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#F2BC7B] to-[#D98E3A]">
                Headless CMS
              </span>{' '}
              &amp; Digital Engineering
            </h1>

            {/* Value Proposition */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-normal text-slate-200">
              We engineer fast Next.js 15 web applications, custom React 19 frontends, scalable Node.js APIs, and headless CMS platforms. As your dedicated technology partner, we guarantee 95+ PageSpeed scores, sub-second load times, and 100% source code ownership.
            </p>

            {/* Floating Tech Chips Strip */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {[
                { name: 'Next.js 15', color: 'bg-[#121826] text-white border-[#243048]' },
                { name: 'React 19', color: 'bg-cyan-950/60 text-cyan-300 border-cyan-800' },
                { name: 'TypeScript', color: 'bg-blue-950/60 text-blue-300 border-blue-800' },
                { name: 'Shopify Plus', color: 'bg-emerald-950/60 text-emerald-300 border-emerald-800' },
                { name: 'WordPress / Sanity CMS', color: 'bg-amber-950/60 text-amber-300 border-amber-800' },
                { name: 'Node.js Edge', color: 'bg-indigo-950/60 text-indigo-300 border-indigo-800' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${tech.color} shadow-2xs`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Global Hubs Strip (All India + Europe + Australia + Canada) */}
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium text-slate-300">
              <span className="font-semibold text-slate-200">Delivery Hubs:</span>
              <span className="px-2.5 py-0.5 rounded-lg font-semibold border border-white/15 bg-white/10 text-slate-100 flex items-center gap-1.5 shadow-2xs">
                <span>🇮🇳</span>
                <span>Delhi NCR (HQ) &amp; Pan-India</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-2.5 py-0.5 rounded-lg font-semibold border border-white/15 bg-white/10 text-slate-100 flex items-center gap-1.5 shadow-2xs">
                <span>🇪🇺</span>
                <span>London &amp; Dublin</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-2.5 py-0.5 rounded-lg font-semibold border border-white/15 bg-white/10 text-slate-100 flex items-center gap-1.5 shadow-2xs">
                <span>🇦🇺</span>
                <span>Sydney</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="px-2.5 py-0.5 rounded-lg font-semibold border border-white/15 bg-white/10 text-slate-100 flex items-center gap-1.5 shadow-2xs">
                <span>🇨🇦</span>
                <span>Toronto</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <motion.button
                id="hero-primary-cta"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartProject}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#D98E3A] to-[#B26E20] hover:from-[#E59B48] hover:to-[#C67E2C] shadow-lg shadow-[#D98E3A]/25 hover:shadow-xl hover:shadow-[#D98E3A]/30 transition-all cursor-pointer overflow-hidden"
              >
                <span>Hire Tech Partner / Get Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                id="hero-secondary-cta"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-2xs cursor-pointer text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md"
              >
                <span>Explore Client Work</span>
              </motion.button>
            </div>

            {/* Core Reassurances Strip */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs font-medium text-slate-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D98E3A] shrink-0" />
                <span className="font-semibold text-white">95+ PageSpeed Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
                <span className="font-semibold text-white">Sub-Second Load Times</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Architecture Card & Speed Dial */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="rounded-2xl border border-white/15 overflow-hidden text-left relative transition-all duration-300 bg-[#0F1422]/90 backdrop-blur-xl shadow-2xl shadow-black/40">
              
              {/* Card Header Bar */}
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2 bg-slate-900/90">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border border-slate-800 bg-slate-950 text-slate-300">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">drtechei.com/diagnostics</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Audit</span>
                </div>
              </div>

              {/* Summary Metrics Bar with Animated Gauge Dial */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between gap-3 bg-slate-900/60">
                <div className="flex items-center gap-3.5">
                  {/* Circular Speed Dial */}
                  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        key={currentArch.score}
                        initial={{ strokeDasharray: '0, 100' }}
                        animate={{ strokeDasharray: `${currentArch.score}, 100` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-emerald-400"
                        strokeWidth="3.5"
                        strokeDasharray="99, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono font-black text-xs text-emerald-400">
                      <span>{currentArch.score}</span>
                      <span className="text-[7px] text-slate-400 font-normal">PERF</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold flex items-center gap-1.5 text-white">
                      <span>Lighthouse 100/100 Core</span>
                      <Gauge className="w-3.5 h-3.5 text-[#D98E3A]" />
                    </div>
                    <div className="text-[11px] text-slate-300 font-mono mt-0.5">
                      LCP {currentArch.vitals.lcp} • INP {currentArch.vitals.inp} • CLS {currentArch.vitals.cls}
                    </div>
                  </div>
                </div>

                {/* Sub-view mode toggles */}
                <div className="flex items-center gap-1 p-1 rounded-xl border border-slate-800 bg-slate-950">
                  {(['specs', 'code', 'vitals'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold capitalize transition-all cursor-pointer ${
                        viewMode === mode
                          ? 'bg-[#2D2575] text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Framework Switcher Tabs */}
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl mb-4 text-center border border-slate-800 bg-slate-950">
                  {(['nextjs', 'react', 'nodejs', 'headless'] as const).map((tabKey) => {
                    const isSelected = activeTab === tabKey;
                    const labels = {
                      nextjs: { short: 'Next', full: 'Next.js 15' },
                      react: { short: 'React', full: 'React 19' },
                      nodejs: { short: 'Node', full: 'Node APIs' },
                      headless: { short: 'CMS', full: 'Headless' },
                    };

                    return (
                      <button
                        key={tabKey}
                        type="button"
                        onClick={() => setActiveTab(tabKey)}
                        className={`py-1.5 px-1 rounded-lg text-xs transition-all cursor-pointer font-bold truncate ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white shadow-xs'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="sm:hidden">{labels[tabKey].short}</span>
                        <span className="hidden sm:inline">{labels[tabKey].full}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic View Content */}
                <AnimatePresence mode="wait">
                  {viewMode === 'specs' && (
                    <motion.div
                      key={`specs-${activeTab}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {currentArch.name}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">{currentArch.category}</p>
                        </div>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400">
                          {currentArch.speed}
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        {currentArch.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {viewMode === 'code' && (
                    <motion.div
                      key={`code-${activeTab}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-[11px] overflow-x-auto leading-relaxed border border-slate-800"
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Production Implementation</span>
                        </span>
                        <span className="text-[#D98E3A] font-bold">TypeSafe 5.8</span>
                      </div>
                      <pre className="overflow-x-auto">
                        <code>{currentArch.codeSnippet}</code>
                      </pre>
                    </motion.div>
                  )}

                  {viewMode === 'vitals' && (
                    <motion.div
                      key={`vitals-${activeTab}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span>Core Web Vitals Pass</span>
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                          Zero Penalties
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-left">
                        <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/80">
                          <div className="text-[10px] text-slate-400 font-medium">LCP (Load Speed)</div>
                          <div className="text-sm font-mono font-bold text-emerald-400">{currentArch.vitals.lcp}</div>
                        </div>
                        <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/80">
                          <div className="text-[10px] text-slate-400 font-medium">INP (Interaction)</div>
                          <div className="text-sm font-mono font-bold text-emerald-400">{currentArch.vitals.inp}</div>
                        </div>
                        <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/80">
                          <div className="text-[10px] text-slate-400 font-medium">CLS (Layout Shift)</div>
                          <div className="text-sm font-mono font-bold text-emerald-400">{currentArch.vitals.cls}</div>
                        </div>
                        <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/80">
                          <div className="text-[10px] text-slate-400 font-medium">TTFB (Response)</div>
                          <div className="text-sm font-mono font-bold text-emerald-400">{currentArch.vitals.ttfb}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card Footer */}
                <div className="mt-3.5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Tested Production Architecture</span>
                  </div>

                  <button
                    type="button"
                    onClick={onStartProject}
                    className="text-xs font-bold text-[#D98E3A] hover:text-[#F2BC7B] inline-flex items-center gap-1 cursor-pointer group"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Latency Badge with Multi-Region Live Pings */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-4 p-3 rounded-xl border border-white/15 bg-slate-950/90 text-white backdrop-blur-md shadow-lg flex items-center gap-2.5 text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-[#2D2575] text-[#D98E3A] flex items-center justify-center font-bold shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold flex items-center gap-1">
                  <span>Sub-Second Global Edge Latency</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[11px] text-slate-300 font-mono">
                  London: 24ms • Sydney: 32ms • Delhi: 12ms
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Kinetic Scrolling Text Banner (Three.js Style Smooth Continuous Ticker) */}
      <KineticTicker theme="dark" speed="normal" />
    </section>
  );
};
