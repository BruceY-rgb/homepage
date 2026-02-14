"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <PenLine className="w-8 h-8 text-cyan" />
            <span className="gradient-text">博客 & 思考</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-cyan-dark mt-4 rounded-full" />
        </motion.div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl p-12 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan/10 flex items-center justify-center">
            <PenLine className="w-8 h-8 text-cyan" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">即将上线</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            博客与思考板块正在准备中，敬请期待。这里将分享我的技术见解、学习笔记和项目经验。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
