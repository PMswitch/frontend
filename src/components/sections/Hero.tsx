"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              PMSwitch
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              A zero-config CLI tool that detects a project&apos;s package manager (pnpm, yarn, npm, bun) by analyzing lockfiles and proxies commands to the correct package manager. Say goodbye to manually switching between package managers in different projects!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#installation">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white py-6 px-8 text-lg"
                  size="lg"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#documentation">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="py-6 px-8 text-lg border-slate-300 dark:border-slate-700"
                >
                  <Terminal className="mr-2 h-5 w-5" /> View Docs
                </Button>
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <code className="text-sm md:text-base font-mono">
                <span className="text-pink-500">$</span> <span className="text-blue-500">npm install -g pmswitch</span>
              </code>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image 
                  src="/assets/logo.png" 
                  alt="PMSwitch Logo" 
                  width={300} 
                  height={300}
                  className="animate-float"
                  priority
                />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg flex items-center gap-3"
            >
              <Package className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Supports npm, yarn, pnpm, bun</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
