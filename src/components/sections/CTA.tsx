"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500/10 to-pink-500/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Simplify</span> Your Workflow?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Say goodbye to manually switching between package managers in different projects. Try PMSwitch today and experience seamless package management across all your projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#installation">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white py-6 px-8 text-lg"
                size="lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/PMswitch/PMSwitch" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg"
                className="py-6 px-8 text-lg border-slate-300 dark:border-slate-700 flex items-center"
              >
                <Github className="mr-2 h-5 w-5" /> Star on GitHub
              </Button>
            </a>
          </div>
          
          <div className="mt-12 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md inline-block">
            <code className="text-sm md:text-base font-mono">
              <span className="text-pink-500">$</span> <span className="text-blue-500">npm install -g pmswitch</span>
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
