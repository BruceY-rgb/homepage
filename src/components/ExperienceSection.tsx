"use client";

import { motion } from "framer-motion";
import { Briefcase, Github, Globe } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  projects: {
    name: string;
    description: string;
    links?: { label: string; url: string }[];
  }[];
}

const experiences: Experience[] = [
  {
    company: "杭州市零码软件有限公司",
    role: "全栈工程师 & Agent 工程师",
    projects: [
      {
        name: "Credit Report Agent",
        description: "开发了基于 AI 的信用报告智能助手。",
        links: [{ label: "代码仓库", url: "https://github.com/BruceY-rgb/credit-report-agent.git" }]
      },
      {
        name: "Nexus Chat Tools",
        description: "构建了一套高效的对话工具集成系统。",
        links: [
          { label: "代码仓库", url: "https://github.com/BruceY-rgb/nexus-chat.git" },
          { label: "在线体验", url: "https://slack.rlenv.data4o.ai/" }
        ]
      }
    ]
  },
  {
    company: "杭州市天泽量化科技有限公司",
    role: "数据分析师",
    projects: [
      {
        name: "Polymarket 分流管道",
        description: "搭建了高效的数据提取管线，并实现了精准的数据回测。",
        links: [{ label: "项目地址", url: "https://github.com/BruceY-rgb/TzQuantPolymarket.git" }]
      },
      {
        name: "Polymarket-Bot",
        description: "实现了从全流程数据提取到策略分析的闭环自动化机器人。",
        links: [{ label: "项目地址", url: "https://github.com/BruceY-rgb/Polymarket-Bot.git" }]
      }
    ]
  },
  {
    company: "科研项目：WMH 多模态深度学习",
    role: "研究成员",
    projects: [
      {
        name: "脑影像分割模型",
        description: "专注于白质高信号 (WMH) 的自动分割，探索深度学习在医学影像中的应用。"
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
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
            <Briefcase className="w-8 h-8 text-cyan" />
            <span className="gradient-text">实习与科研经历</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-cyan-dark mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: expIndex * 0.1 }}
            >
              {/* Company header */}
              <div className="glass rounded-xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
                <p className="text-cyan">{exp.role}</p>
              </div>

              {/* Projects */}
              <div className="grid md:grid-cols-2 gap-4 ml-4 md:ml-8 border-l-2 border-cyan/20 pl-6">
                {exp.projects.map((project, projIndex) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: expIndex * 0.1 + projIndex * 0.05 }}
                    className="glass rounded-lg p-5 hover:border-cyan/30 transition-all"
                  >
                    <h4 className="text-lg font-medium text-white mb-2">{project.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    {project.links && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-cyan hover:text-cyan-dark transition-colors"
                          >
                            {link.label.includes("仓库") || link.label.includes("地址") ? (
                              <Github className="w-3 h-3" />
                            ) : (
                              <Globe className="w-3 h-3" />
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
