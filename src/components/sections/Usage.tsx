"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UsageExampleProps {
  command: string;
  description: string;
  output: string;
}

const UsageExample = ({ command, description, output }: UsageExampleProps) => {
  return (
    <div className="mb-6">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="bg-slate-800 p-4 rounded-t-lg border-b border-slate-700 flex items-center cursor-help">
            <Terminal className="h-5 w-5 mr-2 text-blue-400" />
            <code className="text-pink-400">$ {command}</code>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <p className="text-sm">{description}</p>
        </HoverCardContent>
      </HoverCard>
      <div className="bg-slate-900 p-4 rounded-b-lg">
        <code className="text-sm text-slate-300 whitespace-pre-wrap">{output}</code>
      </div>
    </div>
  );
};

interface CommandExampleProps {
  command: string;
  description: string;
}

const CommandExample = ({ command, description }: CommandExampleProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-slate-800 p-3 rounded-lg flex items-center cursor-help mb-3">
            <ArrowRight className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
            <code className="text-sm text-slate-300">{command}</code>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Usage = () => {
  return (
    <section id="usage" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Usage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Use PMSwitch as a universal command for all your package manager needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Basic Commands</h3>
              
              <UsageExample 
                command="pms install" 
                description="Automatically detects the package manager based on lockfiles and runs the install command."
                output="🔍 Detected package manager: pnpm
📦 Running: pnpm install
Lockfile is up to date, resolution step is skipped
Already up to date"
              />
              
              <UsageExample 
                command="pms add react" 
                description="Add a dependency using the detected package manager."
                output="🔍 Detected package manager: pnpm
📦 Running: pnpm add react
Packages: +2
Progress: resolved 2, reused 2, downloaded 0, added 2, done"
              />
              
              <UsageExample 
                command="pms run start" 
                description="Run a script defined in package.json using the detected package manager."
                output="🔍 Detected package manager: pnpm
📦 Running: pnpm run start
> my-app@1.0.0 start
> react-scripts start

Starting the development server..."
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900 text-slate-50 rounded-lg p-6 shadow-lg h-full">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Advanced Usage</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-pink-400">Force a specific package manager</h4>
                <CommandExample 
                  command="pms install --force-pnpm" 
                  description="Force using pnpm for this command"
                />
                <CommandExample 
                  command="pms add react --force-yarn" 
                  description="Force using yarn for this command"
                />
                <CommandExample 
                  command="pms run build --force-npm" 
                  description="Force using npm for this command"
                />
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-pink-400">Configuration Options</h4>
                <CommandExample 
                  command="pms --default pnpm" 
                  description="Set pnpm as your default package manager"
                />
                <CommandExample 
                  command="pms install --no-interactive" 
                  description="Disable interactive prompts"
                />
                <CommandExample 
                  command="pms add lodash --debug" 
                  description="Show debug information"
                />
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-pink-400">Multiple Lockfile Handling</h4>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <p className="text-sm text-slate-300 mb-2">When multiple lockfiles are detected:</p>
                  <pre className="text-xs text-slate-400 whitespace-pre-wrap">
{`🔍 Multiple lockfiles detected:
  - package-lock.json (npm)
  - yarn.lock (yarn)

? Which package manager would you like to use? › 
❯ yarn 
  npm 
  Use default (pnpm)`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
