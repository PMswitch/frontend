"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Github, Package } from "lucide-react";

const Installation = () => {
  return (
    <section id="installation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Easy <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Installation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Get up and running with PMSwitch in seconds
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Tabs defaultValue="npm" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="npm" className="flex items-center gap-2">
                <Package className="h-4 w-4" /> From NPM
              </TabsTrigger>
              <TabsTrigger value="source" className="flex items-center gap-2">
                <Github className="h-4 w-4" /> From Source
              </TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="mt-0">
              <div className="bg-slate-900 text-slate-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Terminal className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">Global Installation</h3>
                </div>
                <div className="font-mono text-sm sm:text-base overflow-x-auto">
                  <p className="mb-4 text-slate-400"># Install globally with npm</p>
                  <pre className="bg-slate-800 p-4 rounded">
                    <code>npm install -g pmswitch</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="source" className="mt-0">
              <div className="bg-slate-900 text-slate-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Terminal className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-400">From Source</h3>
                </div>
                <div className="font-mono text-sm sm:text-base overflow-x-auto">
                  <p className="mb-2 text-slate-400"># Clone the repository</p>
                  <pre className="bg-slate-800 p-4 rounded mb-4">
                    <code>git clone https://github.com/PMswitch/PMSwitch.git</code>
                  </pre>
                  
                  <p className="mb-2 text-slate-400"># Navigate to the directory</p>
                  <pre className="bg-slate-800 p-4 rounded mb-4">
                    <code>cd PMSwitch</code>
                  </pre>
                  
                  <p className="mb-2 text-slate-400"># Install dependencies</p>
                  <pre className="bg-slate-800 p-4 rounded mb-4">
                    <code>pnpm install</code>
                  </pre>
                  
                  <p className="mb-2 text-slate-400"># Build the project</p>
                  <pre className="bg-slate-800 p-4 rounded mb-4">
                    <code>pnpm build</code>
                  </pre>
                  
                  <p className="mb-2 text-slate-400"># Link globally</p>
                  <pre className="bg-slate-800 p-4 rounded">
                    <code>pnpm link --global</code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Installation;
