"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Calendar, Filter, Zap } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import Button from "@/components/ui/Button";
import { subscribeToEvents, Event } from "@/lib/firebase/services";
import { eventTypes, eventStatuses } from "@/lib/data/event";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<typeof eventTypes[number]>("all");
  const [selectedStatus, setSelectedStatus] = useState<typeof eventStatuses[number]>("all");
  const [refreshKey, setRefreshKey] = useState(0);

  // Subscribe to Firebase events
  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToEvents((fetchedEvents) => {
      setEvents(fetchedEvents);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "all" || event.type === selectedType;
      const matchesStatus = selectedStatus === "all" || event.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchQuery, selectedType, selectedStatus, events]);

  // Separate upcoming and past events
  const upcomingEvents = filteredEvents.filter((e) => e.status !== "completed");
  const pastEvents = filteredEvents.filter((e) => e.status === "completed");

  const handleRegistrationSuccess = () => {
    setRefreshKey((prev) => prev + 1);
  };

  if (loading && events.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by event name, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
              />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Status Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter size={18} className="text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Status</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {eventStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      selectedStatus === status
                        ? "bg-primary-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={18} className="text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Type</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                      selectedType === type
                        ? "bg-primary-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 font-medium">
              Showing <span className="text-primary-600 font-bold">{filteredEvents.length}</span> of <span className="text-gray-900 font-bold">{events.length}</span> events
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-1 bg-primary-600 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Upcoming Events
                </h2>
              </div>
              <p className="text-gray-600 mt-2">
                Don't miss out! Register now for our upcoming events.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingEvents.map((event) => (
                <EventCard 
                  key={`${event.id}-${refreshKey}`}
                  event={event}
                  onRegistrationSuccess={handleRegistrationSuccess}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Past Events
                </h2>
              </div>
              <p className="text-gray-600 mt-2">
                Check out what we've accomplished in previous events.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pastEvents.map((event) => (
                <EventCard 
                  key={`${event.id}-${refreshKey}`}
                  event={event}
                  onRegistrationSuccess={handleRegistrationSuccess}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredEvents.length === 0 && (
        <section className="py-24 sm:py-32 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-7xl mb-6">📅</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              No events found
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Try adjusting your search filters to discover more events
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
                setSelectedStatus("all");
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Clear all filters
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}