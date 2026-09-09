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
  Sparkles,
  Layers,
  Cpu,
  Activity,
  Globe2,
  Rocket,
  Star
} from 'lucide-react';

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
      className="relative bg-gradient-to-b from-white via-[#FAFBFD] to-white text-slate-900 border-b border-slate-200/90 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#2D2575]/10 via-[#6366F1]/5 to-[#D98E3A]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D98E3A]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Animated Headline, Badges & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Animated Badge - Simplified */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#EEEDFA] text-[#2D2575] border border-[#2D2575]/15 self-start mb-4 sm:mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-bold">DrTechei IT Solutions</span>
            </motion.div>

            {/* Clear, High-Impact Big Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-[#111622] tracking-tight leading-[1.1] sm:leading-[1.15]">
              High Performance Web Apps{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D2575] via-[#4338CA] to-[#D98E3A]">
                Headless CMS
              </span>{' '}
              &amp; Digital Engineering
            </h1>

            {/* Value Proposition */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              We engineer fast Next.js 15 web applications, custom React 19 frontends, scalable Node.js APIs, and headless CMS platforms. Guaranteed 95+ PageSpeed scores, sub-second load times, and 100% source code ownership.
            </p>

            {/* Tech Chips - Responsive */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { name: 'Next.js 15', color: 'bg-slate-900 text-white border-slate-800' },
                { name: 'React 19', color: 'bg-sky-50 text-sky-800 border-sky-200' },
                { name: 'TypeScript', color: 'bg-blue-50 text-blue-800 border-blue-200' },
                { name: 'Shopify Plus', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                { name: 'WordPress / Sanity', color: 'bg-amber-50 text-amber-800 border-amber-200' },
                { name: 'Node.js', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-md border ${tech.color} shadow-sm`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Global Hubs - Responsive */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-500 font-medium">
              <span className="font-semibold text-slate-700 text-[11px] sm:text-xs">🌍 Delivery Hubs:</span>
              <span className="px-2 py-0.5 rounded-lg bg-white text-slate-800 font-semibold border border-slate-200/90 shadow-sm flex items-center gap-1">
                <span>🇮🇳</span>
                <span>Delhi HQ</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="px-2 py-0.5 rounded-lg bg-white text-slate-800 font-semibold border border-slate-200/90 shadow-sm flex items-center gap-1">
                <span>🇫🇮</span>
                <span>Helsinki</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="px-2 py-0.5 rounded-lg bg-white text-slate-800 font-semibold border border-slate-200/90 shadow-sm flex items-center gap-1">
                <span>🇮🇪</span>
                <span>Dublin</span>
              </span>
            </div>

            {/* Primary Action Buttons - Responsive */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.button
                id="hero-primary-cta"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartProject}
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2D2575] via-[#3B308D] to-[#D98E3A] hover:from-[#231C61] hover:to-[#B26E20] shadow-md shadow-[#2D2575]/20 hover:shadow-lg hover:shadow-[#D98E3A]/25 transition-all cursor-pointer overflow-hidden min-h-[48px] sm:min-h-[52px]"
              >
                <span>Get Free Project Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                id="hero-secondary-cta"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-sm font-bold text-[#2D2575] bg-white hover:bg-[#EEEDFA]/50 border border-slate-300 hover:border-[#2D2575]/40 transition-all shadow-sm hover:shadow-md cursor-pointer min-h-[48px] sm:min-h-[52px]"
              >
                <span>Explore Client Work</span>
              </motion.button>
            </div>

            {/* Core Reassurances - Responsive */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D98E3A] shrink-0" />
                <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">95+ PageSpeed Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D2575] shrink-0" />
                <span className="font-semibold text-slate-800 text-[11px] sm:text-xs">Sub-Second Load Times</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Architecture Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 overflow-hidden text-left relative">
              
              {/* Card Header Bar */}
              <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-[10px] sm:text-xs font-mono">
                  <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 shrink-0" />
                  <span className="truncate max-w-[80px] sm:max-w-none">drtechei.com</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </div>
              </div>

              {/* Summary Metrics Bar */}
              <div className="p-3 sm:p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2 bg-gradient-to-br from-[#FAFBFD] to-white">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  {/* Circular Speed Dial */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100"
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
                        className="text-emerald-500"
                        strokeWidth="3.5"
                        strokeDasharray="99, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center font-mono font-black text-[9px] sm:text-xs text-[#2D2575]">
                      <span>{currentArch.score}</span>
                      <span className="text-[6px] sm:text-[7px] text-slate-400 font-normal">PERF</span>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span className="truncate">Lighthouse 100/100</span>
                      <Gauge className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D98E3A] shrink-0" />
                    </div>
                    <div className="text-[9px] sm:text-[11px] text-slate-500 font-mono truncate">
                      LCP {currentArch.vitals.lcp} • INP {currentArch.vitals.inp}
                    </div>
                  </div>
                </div>

                {/* Sub-view mode toggles */}
                <div className="flex items-center gap-1 p-0.5 sm:p-1 rounded-xl bg-slate-100 border border-slate-200/80">
                  {(['specs', 'code', 'vitals'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[9px] sm:text-[11px] font-bold capitalize transition-all cursor-pointer ${
                        viewMode === mode
                          ? 'bg-white text-[#2D2575] shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Framework Switcher Tabs */}
              <div className="p-3 sm:p-5">
                <div className="grid grid-cols-4 gap-1 p-0.5 sm:p-1 rounded-xl mb-3 sm:mb-4 bg-slate-100 text-center border border-slate-200/60">
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
                        className={`py-1 px-0.5 sm:py-1.5 sm:px-1 rounded-lg text-[10px] sm:text-xs transition-all cursor-pointer font-bold truncate ${
                          isSelected
                            ? 'bg-[#2D2575] text-white shadow-sm'
                            : 'text-slate-600 hover:text-[#2D2575] hover:bg-white/60'
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
                      className="p-3 sm:p-4 rounded-xl bg-[#FAFBFD] border border-slate-200/90 space-y-2 sm:space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{currentArch.name}</h4>
                          <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 truncate">{currentArch.category}</p>
                        </div>
                        <span className="text-[10px] sm:text-xs font-mono font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 whitespace-nowrap">
                          {currentArch.speed}
                        </span>
                      </div>

                      <div className="space-y-1 pt-0.5">
                        {currentArch.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-700">
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
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
                      className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-[9px] sm:text-[11px] overflow-x-auto leading-relaxed border border-slate-800"
                    >
                      <div className="flex flex-wrap items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-slate-800 text-[8px] sm:text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                          <Terminal className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                          <span>Production</span>
                        </span>
                        <span className="text-[#D98E3A] font-bold text-[8px] sm:text-[10px]">TypeSafe 5.8</span>
                      </div>
                      <pre className="overflow-x-auto">
                        <code className="text-[8px] sm:text-[11px]">{currentArch.codeSnippet}</code>
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
                      className="p-3 sm:p-4 rounded-xl bg-[#FAFBFD] border border-slate-200/90 space-y-2 sm:space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs font-bold text-slate-900">
                        <span>Core Web Vitals Pass</span>
                        <span className="text-[8px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-100/60 px-1.5 sm:px-2 py-0.5 rounded-full">
                          ✅ Zero Penalties
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-left">
                        {[
                          { label: 'LCP', value: currentArch.vitals.lcp },
                          { label: 'INP', value: currentArch.vitals.inp },
                          { label: 'CLS', value: currentArch.vitals.cls },
                          { label: 'TTFB', value: currentArch.vitals.ttfb },
                        ].map((item) => (
                          <div key={item.label} className="p-1.5 sm:p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="text-[8px] sm:text-[10px] text-slate-500 font-medium">{item.label}</div>
                            <div className="text-[11px] sm:text-sm font-mono font-bold text-emerald-600">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card Footer */}
                <div className="mt-3 sm:mt-3.5 pt-2.5 sm:pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-xs text-slate-500">
                  <div className="flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    <span className="hidden xs:inline">Tested Architecture</span>
                    <span className="xs:hidden">Tested ✓</span>
                  </div>

                  <button
                    type="button"
                    onClick={onStartProject}
                    className="text-[10px] sm:text-xs font-bold text-[#2D2575] hover:text-[#D98E3A] inline-flex items-center gap-1 cursor-pointer group transition-colors"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform group-hover:translate-x-1 text-[#D98E3A]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Latency Badge - Responsive */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-4 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-2 text-left"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center font-bold shrink-0">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D98E3A]" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-bold text-[#111622] flex items-center gap-1">
                  <span>Sub-Second Delivery</span>
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <div className="text-[9px] sm:text-[11px] text-slate-500">Global Edge • &lt;40ms TTFB</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};