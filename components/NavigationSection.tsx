import React, { useState, useEffect } from "react";
import { NavLink, PingStatus } from "../types";
import { ping } from "../services/pingService";
import { useLanguage } from "../contexts/LanguageContext";

function StatusIndicator({ status, latency }: { status: PingStatus; latency: number | null }) {
  const { t } = useLanguage();

  if (status === PingStatus.Loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
        <div className="h-2.5 w-2.5 bg-yellow-400 rounded-full animate-ping-slow"></div>
        <span>{t.navigation.checking}</span>
      </div>
    );
  }

  if (status === PingStatus.Online) {
    return (
      <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
        <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
        <span>{t.navigation.online} - {latency}ms</span>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
      <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
      <span>{t.navigation.offline}</span>
    </div>
  );
}

function NavLinkCard({ link }: { link: NavLink }) {
  const [status, setStatus] = useState<PingStatus>(PingStatus.Loading);
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (link.pingUrl) {
      ping(link.pingUrl).then((result) => {
        if (isMounted) {
          setStatus(result.status);
          setLatency(result.latency);
        }
      });
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link.pingUrl]);

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {link.name}
          </h3>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
        <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
          {link.description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
        <StatusIndicator status={status} latency={latency} />
      </div>
    </div>
  );
}

function NavigationSection() {
  const { t } = useLanguage();

  const navLinks: NavLink[] = [
    {
      name: t.navLinksData.officialWebsite.name,
      href: "https://crystelf.top",
      pingUrl: "https://crystelf.top",
      description: t.navLinksData.officialWebsite.description,
    },
    {
      name: t.navLinksData.githubOrg.name,
      href: "https://github.com/crystelf",
      pingUrl: "https://github.com",
      description: t.navLinksData.githubOrg.description,
    },
    {
      name: t.navLinksData.coreProject.name,
      href: "https://github.com/crystelf/crystelf-core",
      pingUrl: "https://github.com",
      description: t.navLinksData.coreProject.description,
    },
    {
      name: t.navLinksData.documentation.name,
      href: "https://github.com/crystelf/crystelf-docs",
      pingUrl: "https://github.com",
      description: t.navLinksData.documentation.description,
    },
  ];

  return (
    <section id="navigation" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.navigation.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t.navigation.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {navLinks.map((link) => (
            <NavLinkCard key={link.name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NavigationSection;
