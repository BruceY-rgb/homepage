"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative grid-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan/5 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-cyan/30 glow-cyan">
              <img
                src="/homepage/avatar.jpg"
                alt="杨思行"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-cyan/10 text-cyan text-4xl font-bold">杨</div>';
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan rounded-full animate-pulse" />
          </motion.div>

          {/* Info */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">杨思行</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-400 mb-2"
            >
              Sixing Yang
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 mb-6"
            >
              浙江大学 · 计算机科学与技术学院
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a
                href="mailto:3230104703@zju.edu.cn"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:border-cyan/50 transition-all group"
              >
                <Mail className="w-4 h-4 text-cyan" />
                <span className="text-sm text-gray-300 group-hover:text-cyan transition-colors">3230104703@zju.edu.cn</span>
              </a>

              <a
                href="tel:15946491276"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:border-cyan/50 transition-all group"
              >
                <Phone className="w-4 h-4 text-cyan" />
                <span className="text-sm text-gray-300 group-hover:text-cyan transition-colors">15946491276</span>
              </a>

              <a
                href="https://github.com/BruceY-rgb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:border-cyan/50 transition-all group"
              >
                <Github className="w-4 h-4 text-cyan" />
                <span className="text-sm text-gray-300 group-hover:text-cyan transition-colors">GitHub</span>
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan transition-colors" />
              </a>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-gray-400 max-w-lg"
            >
              热衷于探索前沿技术，研究兴趣涵盖{" "}
              <span className="text-cyan">机器学习</span>、{" "}
              <span className="text-cyan">深度学习</span>、{" "}
              <span className="text-cyan">量化投资</span> 与{" "}
              <span className="text-cyan">多智能体系统</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-cyan/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
