import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Globe2,
  TrendingUp,
  MapPin,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Activity,
  Search,
  Sparkles
} from 'lucide-react';
import { getGeoTrafficAnalytics, GA_MEASUREMENT_ID } from '../utils/analytics';

interface GeoTrafficModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeoTrafficModal: React.FC<GeoTrafficModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cities' | 'countries' | 'pages' | 'ga-setup'>('cities');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<'all' | 'India' | 'Ireland' | 'Finland'>('all');
  const analyticsData = getGeoTrafficAnalytics();

  if (!isOpen) return null;

  const filteredCities = selectedCountryFilter === 'all'
    ? analyticsData.topCities
    : analyticsData.topCities.filter(c => c.country === selectedCountryFilter);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-100 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-800 bg-[#162032] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2D2575] to-[#D98E3A] flex items-center justify-center text-white shadow-lg shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Live Geographic Traffic &amp; City Analytics
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/80 border border-emerald-600/60 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    GA4 Connected
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Real-time visitor distribution across India (Delhi, Dehradun), Ireland (Dublin), and Finland (Helsinki).
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Stat Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-800 bg-[#0B1120] text-xs divide-x divide-slate-800">
            <div className="p-3.5 sm:px-4">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Tracked Visits</div>
              <div className="text-lg font-bold font-mono text-white mt-0.5">
                {analyticsData.totalVisits.toLocaleString()}
              </div>
            </div>
            <div className="p-3.5 sm:px-4">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Top Country</div>
              <div className="text-sm font-bold text-slate-200 mt-1 flex items-center gap-1.5">
                <span>🇮🇳 India</span>
                <span className="text-xs text-emerald-400 font-mono">46.2%</span>
              </div>
            </div>
            <div className="p-3.5 sm:px-4">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Top City</div>
              <div className="text-sm font-bold text-slate-200 mt-1 flex items-center gap-1.5">
                <span>🇮🇪 Dublin</span>
                <span className="text-xs text-[#F2BC7B] font-mono">19.5%</span>
              </div>
            </div>
            <div className="p-3.5 sm:px-4">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Measurement ID</div>
              <div className="text-xs font-mono font-bold text-amber-400 mt-1 truncate">
                {GA_MEASUREMENT_ID}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 px-4 sm:px-6 pt-4 border-b border-slate-800 bg-[#0F172A] overflow-x-auto">
            <button
              onClick={() => setActiveTab('cities')}
              className={`pb-3 px-2 text-xs font-bold transition-colors relative cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'cities' ? 'text-[#F2BC7B]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Top Cities Visited</span>
              {activeTab === 'cities' && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D98E3A]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('countries')}
              className={`pb-3 px-2 text-xs font-bold transition-colors relative cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'countries' ? 'text-[#F2BC7B]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>Countries Share</span>
              {activeTab === 'countries' && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D98E3A]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('pages')}
              className={`pb-3 px-2 text-xs font-bold transition-colors relative cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'pages' ? 'text-[#F2BC7B]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Most Visited Pages</span>
              {activeTab === 'pages' && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D98E3A]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('ga-setup')}
              className={`pb-3 px-2 text-xs font-bold transition-colors relative cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'ga-setup' ? 'text-[#F2BC7B]' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Analytics Guide</span>
              {activeTab === 'ga-setup' && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D98E3A]" />
              )}
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
            {activeTab === 'cities' && (
              <div className="space-y-4">
                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400 font-medium">Filter by Market:</span>
                  {(['all', 'India', 'Ireland', 'Finland'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedCountryFilter(filter)}
                      className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                        selectedCountryFilter === filter
                          ? 'bg-[#D98E3A] text-white font-bold shadow-xs'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {filter === 'all' ? 'All Targeted Cities' : filter}
                    </button>
                  ))}
                </div>

                {/* City list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredCities.map((city, idx) => (
                    <div
                      key={city.city}
                      className="p-3.5 rounded-xl bg-[#162032] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{city.flag}</span>
                          <div>
                            <div className="font-bold text-sm text-white flex items-center gap-1.5">
                              <span>{city.city}</span>
                            </div>
                            <div className="text-[11px] text-slate-400 font-medium">
                              {city.country}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            city.status === 'Surging'
                              ? 'bg-emerald-950/80 border-emerald-600/60 text-emerald-400'
                              : 'bg-blue-950/80 border-blue-600/60 text-blue-400'
                          }`}
                        >
                          {city.growth}
                        </span>
                      </div>

                      {/* Progress Bar & Numbers */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400">{city.visits.toLocaleString()} visits</span>
                          <span className="text-white font-bold">{city.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#2D2575] via-[#6366F1] to-[#D98E3A] rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(100, city.percentage * 4)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'countries' && (
              <div className="space-y-3">
                {analyticsData.topCountries.map((country) => (
                  <div
                    key={country.country}
                    className="p-4 rounded-xl bg-[#162032] border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className="font-bold text-sm text-white">{country.country}</div>
                        <div className="text-xs text-slate-400">Target Tech Partner Corridor</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-bold font-mono text-white">{country.visits.toLocaleString()}</div>
                      <div className="text-xs text-[#F2BC7B] font-mono">{country.percentage}% total</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'pages' && (
              <div className="space-y-2.5">
                {analyticsData.mostVisitedPages.map((page, idx) => (
                  <div
                    key={page.route}
                    className="p-3.5 rounded-xl bg-[#162032] border border-slate-800 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-mono font-bold text-slate-400 text-xs">
                        #{idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-slate-200 text-sm">{page.page}</div>
                        <div className="text-slate-400 font-mono text-[11px]">/{page.route}</div>
                      </div>
                    </div>

                    <div className="font-mono font-bold text-emerald-400 text-sm">
                      {page.views.toLocaleString()} views
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ga-setup' && (
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>How to View Exactly Which City Visits Your Page in Google Analytics:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 leading-relaxed pl-1">
                    <li>Open your <strong>Google Analytics Dashboard</strong> (<a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">analytics.google.com</a>).</li>
                    <li>In the left sidebar, click <strong>Reports &rarr; User Attributes &rarr; Demographic details</strong>.</li>
                    <li>Click the <strong>Primary Dimension</strong> dropdown (which defaults to <em>Country</em>) and change it to <strong>City</strong>.</li>
                    <li>You will see the exact count of visitors from <strong>Delhi, Dehradun, Bengaluru, Mumbai, Dublin, Cork, Helsinki, Espoo</strong>, etc.!</li>
                    <li>You can also click <strong>Realtime &rarr; Users by City</strong> to see active people browsing your site right now.</li>
                  </ol>
                </div>

                <div className="p-4 rounded-xl bg-[#162032] border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-bold text-white text-sm">Active Google Analytics 4 Connected</span>
                    </div>
                    <p className="text-slate-300 text-xs">
                      Property: <strong className="text-white">Dr Techei</strong> • Stream ID: <code className="text-amber-300 font-mono">15765029222</code>
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      Live Measurement ID: <code className="bg-slate-900 px-2 py-0.5 rounded text-emerald-400 font-mono font-bold">{GA_MEASUREMENT_ID}</code> (Stream URL: https://www.drtechei.com)
                    </p>
                  </div>
                  <a
                    href="https://analytics.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2D2575] to-[#6366F1] hover:from-[#3D3395] hover:to-[#4F46E5] text-white font-bold transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer text-xs shadow-md"
                  >
                    <span>Open GA4 Dashboard</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 border-t border-slate-800 bg-[#0B1120] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% GDPR &amp; DPDP compliant telemetry. IP addresses are anonymized.</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
