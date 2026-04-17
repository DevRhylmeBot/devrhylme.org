"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  registeredCount?: number;
  capacity?: number;
}

export default function FeaturedEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc"),
      limit(3)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedEvents: Event[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          fetchedEvents.push({
            id: doc.id,
            title: data.title,
            description: data.description,
            date: data.date,
            time: data.time,
            location: data.location,
            image: data.image || "/image.png",
            registeredCount: data.registeredCount || 0,
            capacity: data.capacity || 0,
          });
        });
        setEvents(fetchedEvents);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover upcoming events, hackathons, and community meetups.
          </p>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="overflow-hidden h-full flex flex-col">
                
                {/* Image */}
                <div className="relative h-48 w-full bg-gradient-to-br from-gray-200 to-gray-300">
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {event.date} at {event.time}
                    </div>

                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>

                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      {event.registeredCount} / {event.capacity} registered
                    </div>
                  </div>

                  <a
                    href={`/events/`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center mt-auto"
                  >
                    View Details
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link href="/events">
            <Button size="lg" variant="outline">
              View All Events
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}