"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Code } from "lucide-react";

const skills = [
  "Python", "Full-Stack Development", "Agent Architecture",
  "Data Analysis", "PyTorch", "React", "LangChain"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
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
            <User className="w-8 h-8 text-cyan" />
            <span className="gradient-text">关于我</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-cyan-dark mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              我是杨思行，目前就读于 <span className="text-cyan font-semibold">浙江大学计算机科学与技术专业</span>。
              我热衷于探索前沿技术，研究兴趣涵盖 <span className="text-cyan">机器学习 (ML)</span>、<span className="text-cyan">深度学习 (DL)</span>、<span className="text-cyan">量化投资 (Quant)</span> 以及 <span className="text-cyan">多智能体系统 (Multi-Agent)</span>。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              我具备完整的 <span className="text-cyan font-semibold">全栈开发</span> 能力，致力于将复杂的 AI 模型转化为实用的落地工具。
            </p>

            {/* GPA */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-cyan" />
                <span className="text-gray-400">学业表现</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold gradient-text">GPA 4.32 / 5.0</span>
                <span className="text-gray-500">排名: 52/134</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-5 h-5 text-cyan" />
                <span className="text-gray-400">技术栈</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan hover:bg-cyan/20 hover:border-cyan/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
