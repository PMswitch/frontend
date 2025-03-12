"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Settings, FileJson } from "lucide-react";

const Documentation = () => {
  return (
    <section id="documentation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Detailed <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Documentation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Configure PMSwitch to match your workflow perfectly
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="global" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="global" className="flex items-center gap-2">
                <Settings className="h-4 w-4" /> Global Configuration
              </TabsTrigger>
              <TabsTrigger value="project" className="flex items-center gap-2">
                <FileJson className="h-4 w-4" /> Project Configuration
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="global" className="mt-0">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <Settings className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="text-lg font-semibold">Global Configuration</h3>
                </div>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  Create a <code className="bg-slate-100 dark:bg-slate-700 px-1 py-0.5 rounded text-pink-500">.pmswitchrc</code> file in your home directory to set global preferences:
                </p>
                
                <div className="relative">
                  <div className="absolute top-3 right-3 flex items-center">
                    <Code className="h-5 w-5 text-slate-400" />
                    <span className="ml-2 text-sm text-slate-400">JSON</span>
                  </div>
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                    <code>{`{
  "defaultPackageManager": "pnpm",
  "priority": ["pnpm", "bun", "yarn", "npm"],
  "interactive": true,
  "autoInstall": false
}`}</code>
                  </pre>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-500">Configuration Options</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex">
                        <span className="font-mono text-pink-500 mr-2">defaultPackageManager</span>
                        <span className="text-slate-600 dark:text-slate-400">The fallback package manager to use when no lockfile is detected</span>
                      </li>
                      <li className="flex">
                        <span className="font-mono text-pink-500 mr-2">priority</span>
                        <span className="text-slate-600 dark:text-slate-400">The order of preference when multiple lockfiles are detected</span>
                      </li>
                      <li className="flex">
                        <span className="font-mono text-pink-500 mr-2">interactive</span>
                        <span className="text-slate-600 dark:text-slate-400">Whether to show interactive prompts for ambiguous scenarios</span>
                      </li>
                      <li className="flex">
                        <span className="font-mono text-pink-500 mr-2">autoInstall</span>
                        <span className="text-slate-600 dark:text-slate-400">Whether to automatically install missing package managers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="project" className="mt-0">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <FileJson className="h-5 w-5 mr-2 text-blue-500" />
                  <h3 className="text-lg font-semibold">Project Configuration</h3>
                </div>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  Add a <code className="bg-slate-100 dark:bg-slate-700 px-1 py-0.5 rounded text-pink-500">pmswitchConfig</code> section to your project's <code className="bg-slate-100 dark:bg-slate-700 px-1 py-0.5 rounded text-pink-500">package.json</code> file:
                </p>
                
                <div className="relative">
                  <div className="absolute top-3 right-3 flex items-center">
                    <Code className="h-5 w-5 text-slate-400" />
                    <span className="ml-2 text-sm text-slate-400">JSON</span>
                  </div>
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                    <code>{`{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    // ...
  },
  "pmswitchConfig": {
    "defaultPackageManager": "yarn",
    "priority": ["yarn", "pnpm", "npm"],
    "interactive": true
  }
}`}</code>
                  </pre>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-blue-500">Project-specific Settings</h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Project-specific settings override global settings, allowing you to customize PMSwitch's behavior on a per-project basis. This is especially useful for teams with different package manager preferences.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Documentation;
