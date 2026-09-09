import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useHeroTheme } from '../context/HeroThemeContext';
import { technologiesData } from '../data/technologies';
import { TechCategory, TechnologyItem } from '../types';
import {
  Code2,
  Server,
  Database,
  Layers,
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Terminal,
  Activity,
  Zap,
  ShieldCheck,
  Cpu,
  Gauge,
  ExternalLink,
  Copy,
  Check,
  Lock,
  Globe,
  Flame,
  Boxes,
  HelpCircle,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface TechnologiesProps {
  onOpenQuoteModal?: (prefilledContext?: string) => void;
  onSelectTechnology?: (techName: string) => void;
}

// Enterprise Architecture Profiles for the Interactive Configurator
interface ArchitectureProfile {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  speed: string;
  lighthouse: string;
  uptime: string;
  idealFor: string;
  techList: string[];
  pipeline: {
    ingress: string;
    edge: string;
    compute: string;
    cache: string;
    database: string;
  };
  codeTitle: string;
  codeSnippet: string;
}

const ARCHITECTURE_PROFILES: ArchitectureProfile[] = [
  {
    id: 'ecommerce-edge',
    name: 'High-Growth E-Commerce Storefront',
    tagline: 'Headless Next.js 15 + Shopify Plus / Medusa + Global Edge CDN',
    category: 'E-Commerce & Retail',
    badge: 'Fastest Checkout Flow',
    speed: '0.38s LCP',
    lighthouse: '99',
    uptime: '99.99%',
    idealFor: 'Direct-to-Consumer Brands, High SKU Catalogs & Flash Sales',
    techList: ['Next.js 15', 'Shopify Plus', 'Tailwind CSS', 'Stripe', 'Redis', 'Cloudflare Edge'],
    pipeline: {
      ingress: 'Anycast DNS Global Ingress',
      edge: 'Cloudflare Edge Worker Cache',
      compute: 'Next.js 15 ISR / Edge SSR',
      cache: 'Redis In-Memory Session & Cart',
      database: 'Shopify Storefront GraphQL & Stripe Checkout',
    },
    codeTitle: 'app/api/cart/checkout/route.ts',
    codeSnippet: `// High-conversion Next.js 15 Edge Checkout Handler
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { redis } from '@/lib/redis';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { cartId, items, customerEmail } = await req.json();
  
  // Instant sub-15ms cart verification via Redis cache
  const cachedInventory = await redis.mget(items.map((i: any) => \`sku:\${i.id}\`));
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'apple_pay', 'google_pay'],
    mode: 'payment',
    customer_email: customerEmail,
    success_url: \`\${process.env.APP_URL}/checkout/success?id={CHECKOUT_SESSION_ID}\`,
  });

  return NextResponse.json({ checkoutUrl: session.url, latencyMs: 14 });
}`,
  },
  {
    id: 'enterprise-saas',
    name: 'Enterprise SaaS Platform Architecture',
    tagline: 'React 19 + TypeScript + Scalable Node.js Microservices + PostgreSQL',
    category: 'B2B SaaS & Applications',
    badge: 'Maximum Concurrency',
    speed: '0.45s FCP',
    lighthouse: '98',
    uptime: '100% SLA',
    idealFor: 'Complex B2B Dashboards, Data Visualizations & Team Portals',
    techList: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    pipeline: {
      ingress: 'AWS Route53 Global Latency Routing',
      edge: 'AWS CloudFront SSL & WAF Firewalls',
      compute: 'Node.js Microservices Cluster on ECS',
      cache: 'Redis Cluster Query Caching',
      database: 'PostgreSQL 16 Multi-AZ (ACID Compliant)',
    },
    codeTitle: 'server/microservices/analytics.ts',
    codeSnippet: `// High-concurrency Node.js Microservice with Connection Pooling
import express from 'express';
import { Pool } from 'pg';
import { z } from 'zod';

const pool = new Pool({
  max: 30, // Optimized connection pool
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000,
});

export async function queryTelemetry(tenantId: string) {
  const client = await pool.connect();
  try {
    const res = await client.query(
      'SELECT metric_name, value, timestamp FROM tenant_metrics WHERE tenant_id = $1 ORDER BY timestamp DESC LIMIT 100',
      [tenantId]
    );
    return res.rows;
  } finally {
    client.release();
  }
}`,
  },
  {
    id: 'headless-cms',
    name: 'Decoupled Headless CMS & Publishing Engine',
    tagline: 'Next.js App Router + Headless WordPress / Strapi + Instant Global ISR',
    category: 'Media & Corporate',
    badge: 'Zero CMS Maintenance',
    speed: '0.35s LCP',
    lighthouse: '100',
    uptime: '99.99%',
    idealFor: 'Editorial Publications, Corporate Giants & Multi-language Portals',
    techList: ['Next.js 15', 'WordPress GraphQL', 'Tailwind CSS', 'AWS S3', 'Cloudinary'],
    pipeline: {
      ingress: 'Global Anycast CDN Ingress',
      edge: 'Vercel / Cloudflare Edge Static Cache',
      compute: 'Next.js Incremental Static Regeneration (ISR)',
      cache: 'Statically Baked HTML & WebP Assets',
      database: 'Decoupled Headless CMS (Zero Direct Public DB)',
    },
    codeTitle: 'lib/cms/headless-graphql.ts',
    codeSnippet: `// Incremental Static Regeneration (ISR) with On-Demand Webhooks
import { fetchAPI } from '@/lib/fetch';

export async function getArticleBySlug(slug: string) {
  const data = await fetchAPI(
    \`query ArticleBySlug($slug: String!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        seo { title metaDesc schemaMarkup }
      }
    }\`,
    { variables: { slug }, next: { revalidate: 3600, tags: [\`post-\${slug}\`] } }
  );

  return data.post;
}`,
  },
  {
    id: 'realtime-app',
    name: 'Real-Time Interactive Web Platform',
    tagline: 'React 19 + WebSocket Microservice + MongoDB NoSQL + GPU Canvas',
    category: 'Interactive & Collaborative',
    badge: '< 15ms WebSocket Ping',
    speed: '60 FPS',
    lighthouse: '98',
    uptime: '99.99%',
    idealFor: 'Live Market Dashboards, Chat, Collaborative Canvases & Streaming',
    techList: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Redis Pub/Sub', 'WebSockets'],
    pipeline: {
      ingress: 'Global WebSocket Gateway',
      edge: 'Sub-millisecond TCP / TLS Acceleration',
      compute: 'Node.js WebSocket Cluster & Pub/Sub',
      cache: 'Redis Pub/Sub & Memory State',
      database: 'MongoDB Document Clustered Replicas',
    },
    codeTitle: 'server/sockets/realtime-cluster.ts',
    codeSnippet: `// Resilient WebSocket Cluster with Redis State Sync
import { WebSocketServer } from 'ws';
import { createClient } from 'redis';

const pub = createClient({ url: process.env.REDIS_URL });
const sub = pub.duplicate();

export function initLiveStream(wss: WebSocketServer) {
  sub.subscribe('telemetry-stream', (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  });
}`,
  },
];

export const Technologies: React.FC<TechnologiesProps> = ({
  onOpenQuoteModal,
  onSelectTechnology,
}) => {
  const { theme, isDark } = useHeroTheme();
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('all');
  const [activeArchIndex, setActiveArchIndex] = useState(0);
  const [activeInspectorTech, setActiveInspectorTech] = useState<string>('Next.js');
  const [activeInspectorMode, setActiveInspectorMode] = useState<'pipeline' | 'code' | 'metrics'>('pipeline');
  const [hasCopiedCode, setHasCopiedCode] = useState(false);
  const [projectGoal, setProjectGoal] = useState<string>('ecommerce');

  // Mouse illumination for kinetic canvas
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const categories: { key: TechCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Stacks', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: 'frontend', label: 'Frontend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { key: 'backend', label: 'Backend APIs', icon: <Server className="w-3.5 h-3.5" /> },
    { key: 'cms', label: 'CMS & Commerce', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'database', label: 'Databases & Cache', icon: <Database className="w-3.5 h-3.5" /> },
    { key: 'tools', label: 'DevOps & Payments', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredTechnologies = selectedCategory === 'all'
    ? technologiesData
    : technologiesData.filter((tech) => tech.category === selectedCategory);

  const activeArch = ARCHITECTURE_PROFILES[activeArchIndex];

  const copyCode = () => {
    navigator.clipboard.writeText(activeArch.codeSnippet);
    setHasCopiedCode(true);
    setTimeout(() => setHasCopiedCode(false), 2000);
  };

  // Specific technical benchmark tags for tech cards
  const getTechMetric = (name: string): string => {
    switch (name.toLowerCase()) {
      case 'next.js':
        return '0.38s LCP Edge SSR';
      case 'react.js':
        return '60FPS GPU Smooth';
      case 'typescript':
        return '0 Runtime Type Bugs';
      case 'tailwind css':
        return '< 12KB Compressed CSS';
      case 'node.js':
        return '40k req/sec Throughput';
      case 'express.js':
        return '< 15ms Endpoint SLA';
      case 'postgresql':
        return 'ACID Compliant Clustered';
      case 'mongodb':
        return 'Horizontal Sharded NoSQL';
      case 'shopify':
        return '99.99% Checkout Uptime';
      case 'wordpress':
        return 'Decoupled Headless GraphQL';
      case 'stripe':
        return 'PCI-DSS Level 1 Encrypted';
      case 'github':
        return 'Automated CI/CD Workflows';
      default:
        return '99th Percentile SLA';
    }
  };

  // Project goal to architecture matching
  const handleSelectGoal = (goal: string) => {
    setProjectGoal(goal);
    if (goal === 'ecommerce') setActiveArchIndex(0);
    else if (goal === 'saas') setActiveArchIndex(1);
    else if (goal === 'corporate') setActiveArchIndex(2);
    else if (goal === 'realtime') setActiveArchIndex(3);
  };

  return (
    <section
      id="technologies"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative py-20 sm:py-28 md:py-32 bg-[#0A0D17] text-white border-y border-slate-800/90 overflow-hidden transition-colors duration-500"
    >
      {/* 1. HIGH-TECH KINETIC WAVE CANVAS (Fluid SVG Curves & Luminous Auroras) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        
        {/* Dynamic Theme Luminous Radial Orbs */}
        <div 
          className="absolute -top-32 left-1/3 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] rounded-full blur-[120px] opacity-40 animate-aurora pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(45, 37, 117, 0.55) 0%, rgba(217, 142, 58, 0.25) 50%, transparent 80%)',
          }}
        />

        <div 
          className="absolute -bottom-24 -right-20 w-[500px] h-[500px] rounded-full blur-[110px] opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
          }}
        />

        {/* Interactive Mouse Illumination Flare */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            opacity: isHovering ? 0.28 : 0,
            background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(217, 142, 58, 0.35) 0%, transparent 70%)`,
          }}
        />

        {/* Fluid Cyber Wave Vector Canvas (No Rigid Box Grids) */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-40 sm:opacity-55"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="techWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D2575" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#D98E3A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="techWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D98E3A" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#4338CA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Kinetic Flow Curves - Upper Stream */}
          <path
            d="M-100,200 C300,80 500,320 850,190 C1200,60 1350,260 1600,160"
            fill="none"
            stroke="url(#techWaveGrad1)"
            strokeWidth="1.8"
            strokeDasharray="6 8"
            className="animate-wave-flow"
          />

          <path
            d="M-100,280 C320,160 480,380 900,260 C1250,150 1380,340 1600,240"
            fill="none"
            stroke="url(#techWaveGrad2)"
            strokeWidth="1.2"
            opacity="0.6"
          />

          {/* Kinetic Flow Curves - Lower Atmospheric Stream */}
          <path
            d="M-100,650 C350,520 600,780 980,600 C1340,430 1460,700 1600,580"
            fill="none"
            stroke="url(#techWaveGrad1)"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* Global Node Telemetry Mesh */}
          <circle cx="350" cy="220" r="3.5" fill="#D98E3A" className="animate-pulse" />
          <circle cx="850" cy="190" r="4" fill="#10B981" className="animate-ping" />
          <circle cx="850" cy="190" r="3" fill="#10B981" />
          <circle cx="1250" cy="260" r="3.5" fill="#818CF8" />
        </svg>

        {/* Ambient High-Tech Vertical Laser Scan Line */}
        <div className="absolute inset-x-0 h-32 pointer-events-none animate-laser-scan overflow-hidden opacity-50">
          <div 
            className="w-full h-[1px]" 
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #D98E3A 50%, transparent 100%)',
              boxShadow: '0 0 16px 2px #D98E3A',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        
        {/* SECTION HEADER: High-Authority Engineering Identity */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-[#D98E3A] animate-pulse" />
            <span>Digital Engineering &amp; Architecture Lab</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-mono lowercase">production-verified</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Engineered For Speed, Security &amp; Infinite Scale
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            We don&apos;t use bloated monolithic site builders. We architect ultra-fast Next.js 15 apps, strictly typed React frontends, high-throughput Node.js microservices, and decoupled headless CMS platforms with guaranteed sub-second delivery.
          </p>

          {/* Interactive Project Goal Quick-Selector */}
          <div className="mt-6 sm:mt-8 p-1 sm:p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl inline-flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-3 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-[#D98E3A]" />
              <span>Select Architecture:</span>
            </span>
            {[
              { id: 'ecommerce', label: 'E-Commerce Storefront', icon: '🛍️' },
              { id: 'saas', label: 'Enterprise SaaS', icon: '⚡' },
              { id: 'corporate', label: 'Headless CMS Portal', icon: '🌐' },
              { id: 'realtime', label: 'Real-Time Web App', icon: '🚀' },
            ].map((goal) => (
              <button
                key={goal.id}
                type="button"
                onClick={() => handleSelectGoal(goal.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  projectGoal === goal.id
                    ? 'bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white shadow-md shadow-[#D98E3A]/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{goal.icon}</span>
                <span>{goal.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. THE INTERACTIVE FULL-STACK ARCHITECTURE CONSOLE (Matches Hero Aesthetic) */}
        <div className="mb-14 sm:mb-20">
          <div className="rounded-3xl bg-[#0E1424]/95 border border-slate-700/80 shadow-2xl backdrop-blur-2xl overflow-hidden relative">
            
            {/* Top Console Titlebar & Global Fibre Telemetry */}
            <div className="px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#090D18] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>drtechei.engineering/stack-blueprint/{activeArch.id}</span>
                </div>
              </div>

              {/* View Mode Switchers */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/40 border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveInspectorMode('pipeline')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    activeInspectorMode === 'pipeline'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Cloud Pipeline
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInspectorMode('code')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    activeInspectorMode === 'code'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>Typed Code</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInspectorMode('metrics')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    activeInspectorMode === 'metrics'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Gauge className="w-3 h-3 text-emerald-400" />
                  <span>SLA Metrics</span>
                </button>
              </div>
            </div>

            {/* Architecture Overview Banner with Live Diagnostic Badges */}
            <div className="p-5 sm:p-6 lg:p-7 border-b border-slate-800 bg-gradient-to-r from-[#0E1424] via-[#141B2E] to-[#0E1424] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D98E3A] bg-[#D98E3A]/10 px-2.5 py-0.5 rounded-md border border-[#D98E3A]/30">
                    {activeArch.badge}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-300 font-semibold">{activeArch.category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {activeArch.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  {activeArch.tagline}
                </p>
                <p className="mt-2 text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="text-[#D98E3A] font-semibold">Ideal Deployment:</span>
                  <span>{activeArch.idealFor}</span>
                </p>
              </div>

              {/* Real-time Hardware & Performance Telemetry Badges */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Load Speed</div>
                  <div className="text-base sm:text-lg font-mono font-black text-emerald-400">{activeArch.speed}</div>
                </div>

                <div className="px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Lighthouse</div>
                  <div className="text-base sm:text-lg font-mono font-black text-[#D98E3A]">{activeArch.lighthouse}/100</div>
                </div>

                <div className="px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-center">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Reliability</div>
                  <div className="text-base sm:text-lg font-mono font-black text-white">{activeArch.uptime}</div>
                </div>
              </div>
            </div>

            {/* Dynamic Console Body: Cloud Pipeline vs Typed Code vs SLA Metrics */}
            <div className="p-5 sm:p-7 bg-[#0A0F1D]">
              <AnimatePresence mode="wait">
                {activeInspectorMode === 'pipeline' && (
                  <motion.div
                    key={`pipeline-${activeArch.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#D98E3A]" />
                        <span>Live Request Flow (Edge CDN to Clustered Database)</span>
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Zero Bottleneck Throughput</span>
                      </span>
                    </div>

                    {/* Interactive 5-Stage Visual Architecture Pipeline */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                      {[
                        { step: '01', title: 'Global Ingress', detail: activeArch.pipeline.ingress, icon: <Globe className="w-4 h-4 text-sky-400" /> },
                        { step: '02', title: 'Edge CDN Layer', detail: activeArch.pipeline.edge, icon: <Zap className="w-4 h-4 text-[#D98E3A]" /> },
                        { step: '03', title: 'Compute & SSR', detail: activeArch.pipeline.compute, icon: <Cpu className="w-4 h-4 text-emerald-400" /> },
                        { step: '04', title: 'Fast Cache', detail: activeArch.pipeline.cache, icon: <Boxes className="w-4 h-4 text-purple-400" /> },
                        { step: '05', title: 'Data Persistence', detail: activeArch.pipeline.database, icon: <Database className="w-4 h-4 text-amber-400" /> },
                      ].map((stage, idx) => (
                        <div
                          key={idx}
                          className="relative p-4 rounded-2xl bg-[#0E1528] border border-slate-800 hover:border-[#D98E3A]/60 transition-all group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#D98E3A] transition-colors">
                              STAGE {stage.step}
                            </span>
                            <div className="p-1.5 rounded-lg bg-black/40 border border-white/5">
                              {stage.icon}
                            </div>
                          </div>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#F2BC7B] transition-colors">
                            {stage.title}
                          </h4>
                          <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                            {stage.detail}
                          </p>

                          {idx < 4 && (
                            <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Integrated Technology Stack Badges for this Profile */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">Deployed Technologies:</span>
                        {activeArch.techList.map((tName, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-white/5 border border-white/10 text-white flex items-center gap-1.5 hover:border-[#D98E3A]/40 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>{tName}</span>
                          </span>
                        ))}
                      </div>

                      {onOpenQuoteModal && (
                        <button
                          type="button"
                          onClick={() => onOpenQuoteModal(activeArch.name)}
                          className="text-xs font-bold text-[#D98E3A] hover:text-[#F2BC7B] flex items-center gap-1.5 cursor-pointer group"
                        >
                          <span>Deploy This Stack For My Project</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}

                {activeInspectorMode === 'code' && (
                  <motion.div
                    key={`code-${activeArch.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-[#070A12] border border-slate-800 p-4 sm:p-5 font-mono text-left relative shadow-inner"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                      <div className="flex items-center gap-2 text-[#D98E3A]">
                        <Terminal className="w-3.5 h-3.5" />
                        <span className="font-bold">{activeArch.codeTitle}</span>
                      </div>
                      <button
                        type="button"
                        onClick={copyCode}
                        className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-slate-200 text-[11px] font-mono flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        {hasCopiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Production Snippet</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed selection:bg-[#D98E3A]/40 font-mono">
                      <code>{activeArch.codeSnippet}</code>
                    </pre>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Standard: Strict TypeScript 5.8+ • Zero Runtime Any Types</span>
                      <span className="text-emerald-400 font-bold">100% Client Source Code Ownership</span>
                    </div>
                  </motion.div>
                )}

                {activeInspectorMode === 'metrics' && (
                  <motion.div
                    key={`metrics-${activeArch.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
                  >
                    <div className="p-4 rounded-2xl bg-[#0E1528] border border-slate-800">
                      <div className="text-xs text-slate-400">Largest Contentful Paint (LCP)</div>
                      <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">{activeArch.speed}</div>
                      <p className="text-[11px] text-slate-400 mt-1">Google recommends &lt; 2.5s. DrTechei delivers sub-0.5s.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0E1528] border border-slate-800">
                      <div className="text-xs text-slate-400">Interaction to Next Paint (INP)</div>
                      <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">&lt; 28ms</div>
                      <p className="text-[11px] text-slate-400 mt-1">Instant UI responsiveness with zero main-thread freezing.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0E1528] border border-slate-800">
                      <div className="text-xs text-slate-400">Cumulative Layout Shift (CLS)</div>
                      <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">0.00</div>
                      <p className="text-[11px] text-slate-400 mt-1">Zero jumping banners or shifting buttons during hydration.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0E1528] border border-slate-800">
                      <div className="text-xs text-slate-400">Organic SEO Visibility</div>
                      <div className="text-2xl font-mono font-bold text-[#D98E3A] mt-1">+240%</div>
                      <p className="text-[11px] text-slate-400 mt-1">Direct indexing boost from 100/100 Core Web Vitals pass.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 3. TECHNOLOGY STACK FILTER TABS & SEARCHABLE SHOWCASE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Explore Our Comprehensive Technology Arsenal
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select any category to inspect battle-tested tools across our digital engineering workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#0E1424] border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4. HIGH-TECH TECHNOLOGY CARDS GRID (With Live Performance Tags & Glow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTechnologies.map((tech) => {
            const metric = getTechMetric(tech.name);
            return (
              <div
                key={tech.name}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#0E1424]/90 border border-slate-800 hover:border-[#D98E3A]/60 hover:bg-[#121B30] hover:shadow-xl hover:shadow-[#D98E3A]/10 transition-all duration-300 text-left"
              >
                <div>
                  {/* Top Card Header: Tech Symbol + Category Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-black text-sm shadow-md bg-gradient-to-br ${tech.badgeColor || 'from-[#2D2575] to-[#D98E3A]'}`}>
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F2BC7B] bg-[#D98E3A]/10 px-2 py-0.5 rounded border border-[#D98E3A]/30">
                      {tech.category}
                    </span>
                  </div>

                  {/* Tech Name */}
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#F2BC7B] transition-colors flex items-center justify-between">
                    <span>{tech.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                  </h4>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom Card Footer: Live Diagnostic SLA Pill */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <Zap className="w-3 h-3 text-[#D98E3A] shrink-0" />
                    <span className="truncate font-medium">{metric}</span>
                  </div>

                  {onOpenQuoteModal && (
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(tech.name)}
                      className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white flex items-center gap-0.5 cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity"
                      title={`Request project quote using ${tech.name}`}
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3 text-[#D98E3A]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. THE DRTECHEI ENGINEERING QUALITY GUARANTEE (Enterprise Trust) */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0E1424] via-[#141A2D] to-[#0E1424] border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D98E3A] to-[#2D2575] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-[#D98E3A]/20">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Zero Technical Debt &amp; 100% Client Code Ownership
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Every line of code we write is strictly typed in TypeScript, documented, and delivered with automated GitHub CI/CD workflows. No proprietary vendor lock-in. You own your IP, database, and repository completely.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {onOpenQuoteModal ? (
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Custom Tech Stack')}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/30 transition-all cursor-pointer"
              >
                Discuss Architecture Specs
              </button>
            ) : (
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/30 transition-all"
              >
                Discuss Architecture Specs
              </a>
            )}
          </div>
        </div>

      </div>

      {/* Subtle bottom gradient rule for section boundary */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D98E3A]/30 to-transparent" />
    </section>
  );
};
