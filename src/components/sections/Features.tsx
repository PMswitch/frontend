"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  ArrowRightLeft, 
  FileQuestion, 
  Settings, 
  Download
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: "Automatic Detection",
    description: "Detects package managers based on lockfiles (pnpm-lock.yaml, yarn.lock, package-lock.json, bun.lockb)."
  },
  {
    icon: <ArrowRightLeft className="h-10 w-10 text-pink-500" />,
    title: "Command Proxying",
    description: "Forwards commands to the correct package manager automatically, no manual switching required."
  },
  {
    icon: <FileQuestion className="h-10 w-10 text-purple-500" />,
    title: "Multiple Lockfile Handling",
    description: "Interactive prompts for ambiguous scenarios when multiple lockfiles are detected."
  },
  {
    icon: <Settings className="h-10 w-10 text-green-500" />,
    title: "Configuration Options",
    description: "Global and project-specific settings to customize behavior according to your needs."
  },
  {
    icon: <Download className="h-10 w-10 text-orange-500" />,
    title: "Auto-Installation",
    description: "Can install missing package managers when needed, ensuring smooth operation."
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Features</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            PMSwitch comes packed with everything you need to streamline your package manager workflow.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
