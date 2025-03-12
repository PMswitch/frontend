"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                <Image src="/assets/icon.png" alt="PMSwitch Logo" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                PMSwitch
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md">
              A zero-config CLI tool that detects a project's package manager and proxies commands to the correct one.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/PMswitch/PMSwitch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#features" 
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="#installation" 
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link 
                  href="#usage" 
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  Usage
                </Link>
              </li>
              <li>
                <Link 
                  href="#documentation" 
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/PMswitch/PMSwitch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/PMswitch/PMSwitch/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  Report Issues
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/PMswitch/PMSwitch/blob/main/LICENSE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} PMSwitch. All rights reserved.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-pink-500" /> by the PMSwitch Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
