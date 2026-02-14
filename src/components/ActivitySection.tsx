"use client";

import { motion } from "framer-motion";
import { Users, Music } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "浙江大学信电学院学生会",
    role: "体育部部长",
    description: "负责大型体育赛事的组织与统筹"
  },
  {
    icon: Music,
    title: "浙江大学灵韵交响乐团",
    role: "宣传部副部长",
    description: "负责乐团品牌推广与视觉输出"
  }
];

export default function ActivitySection() {
  return (
    <section id="activities" className="py-24 relative">
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
            <Users className="w-8 h-8 text-cyan" />
            <span className="gradient-text">学生工作与社会实践</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-cyan-dark mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-cyan/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <activity.icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{activity.title}</h3>
                  <p className="text-cyan mb-2">{activity.role}</p>
                  <p className="text-gray-400 text-sm">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
