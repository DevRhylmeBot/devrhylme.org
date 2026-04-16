"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Calendar, Users, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const ctaCards = [
  {
    icon: Calendar,
    title: "Browse Events",
    description:
      "Discover hackathons, workshops, and meetups happening across communities.",
    link: "/events",
    linkText: "Explore Events",
  },
  {
    icon: PlusCircle,
    title: "Create Event",
    description:
      "Host your own event and manage registrations, participants, and updates.",
    link: "/events/create",
    linkText: "Create Now",
  },
  {
    icon: Users,
    title: "Join Community",
    description:
      "Connect with organizers, attendees, and grow your network through events.",
    link: "/community",
    linkText: "Join Now",
  },
];

export default function CommunityCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started with Events
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover events, host your own, and connect with a growing tech community.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ctaCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center group"
                >
                  {card.linkText}
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>

              <p className="text-lg text-primary-100 mb-6">
                Get the latest updates on upcoming hackathons, workshops,
                and community events. Join our growing community and stay ahead.
              </p>

              <div className="flex flex-wrap gap-6 text-primary-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  Weekly Event Updates
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  Exclusive Opportunities
                </div>
              </div>
            </div>

            {/* Right Substack */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://devrhylme1.substack.com/embed"
                width="100%"
                height="320"
                style={{ border: "none", background: "white" }}
                frameBorder="0"
                scrolling="no"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}