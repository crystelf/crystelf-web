import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";
import { NavLink, PingStatus } from "../types";
import { ping } from "../services/pingService";

const StatusIndicator: React.FC<{
  status: PingStatus;
  latency: number | null;
}> = ({ status, latency }) => {
  if (status === PingStatus.Loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
        <div className="h-2.5 w-2.5 bg-yellow-400 rounded-full animate-ping-slow"></div>
        <span>Checking...</span>
      </div>
    );
  }

  if (status === PingStatus.Online) {
    return (
      <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400">
        <div className="h-2.5 w-2.5 bg-green-500 rounded-full"></div>
        <span>Online - {latency}ms</span>
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
      <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>
      <span>Offline</span>
    </div>
  );
};

const NavLinkCard: React.FC<{ link: NavLink }> = ({ link }) => {
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
            className="text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
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
};

const NavigationSection: React.FC = () => {
  return (
    <section id="navigation" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Service Navigation
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Quick links to our essential services and their current status.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {NAV_LINKS.map((link) => (
            <NavLinkCard key={link.name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
