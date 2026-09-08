import React from 'react';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { PageRoute, PAGE_SEO_DATA } from '../types/router';

interface PageBreadcrumbProps {
  currentPage: PageRoute;
  subtitle?: string;
}

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ currentPage, subtitle }) => {
  const { navigate } = useRouter();
  const seo = PAGE_SEO_DATA[currentPage];

  if (currentPage === 'home') return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto flex items-center justify-between gap-4 text-xs">
        <ol className="flex items-center gap-2 flex-wrap text-slate-500 font-medium">
          <li>
            <button
              onClick={() => navigate('home')}
              className="inline-flex items-center gap-1 hover:text-[#2D2575] transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </button>
          </li>
          <li>
            <ChevronRight className="w-3 h-3 text-slate-300" />
          </li>
          <li className="font-bold text-[#2D2575] capitalize" aria-current="page">
            {seo?.breadcrumbs[1]?.name || currentPage}
          </li>
          {subtitle && (
            <>
              <li className="hidden sm:inline">
                <span className="text-slate-300">•</span>
              </li>
              <li className="hidden sm:inline text-slate-400 font-normal">
                {subtitle}
              </li>
            </>
          )}
        </ol>

        <button
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#2D2575] font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden xs:inline">Back to Home</span>
        </button>
      </div>
    </nav>
  );
};
