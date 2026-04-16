"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Globe, Building2 } from "lucide-react";

/*
  Update stats here anytime
  change value / label / description
*/

const stats = [
  {
    icon: Calendar,
    value: "7+",
    label: "Events Hosted",
    description: "Hackathons, meetups & workshops",
  },
  {
    icon: Users,
    value: "9000+",
    label: "Participants",
    description: "Developers & community members",
  },
  {
    icon: Building2,
    value: "2+",
    label: "Partner Companies",
    description: "Supporting and collaborating",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Communities Reached",
    description: "Across online & offline events",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Event Impact
          </h2>

          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            We’re building a growing event ecosystem where communities connect,
            organizers host effortlessly, and participants discover meaningful
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                  <Icon size={32} />
                </div>

                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>

                <div className="text-xl font-semibold mb-1">
                  {stat.label}
                </div>

                <div className="text-primary-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}