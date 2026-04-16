"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full">
                Event Listing & Management Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover & Host{" "}
              <span className="text-primary-600">Amazing Events</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              A community-driven event platform to discover, manage, and host tech events,
              hackathons, and meetups. Join thousands of users and organizations building
              the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/community">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Involved
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              
              <Link href="/events">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2" size={20} />
                  Join Event
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-primary-600">7+</div>
                <div className="text-sm text-gray-600 mt-1">Events Hosted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">2+</div>
                <div className="text-sm text-gray-600 mt-1">Partner Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">9000+</div>
                <div className="text-sm text-gray-600 mt-1">Users Joined</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="space-y-4">
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">const</span>
                      <span className="text-blue-600">events</span>
                      <span className="text-gray-600">=</span>
                      <span className="text-green-600">"7+"</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">const</span>
                      <span className="text-blue-600">partners</span>
                      <span className="text-gray-600">=</span>
                      <span className="text-green-600">"2+"</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-purple-600">const</span>
                      <span className="text-blue-600">users</span>
                      <span className="text-gray-600">=</span>
                      <span className="text-green-600">"9000+"</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}