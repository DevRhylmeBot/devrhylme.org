"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import { Event } from "@/lib/firebase/services";
import RegistrationModal from "./RegistrationModal";

interface EventCardProps {
  event: Event;
  onRegistrationSuccess?: () => void;
}

// Helper: Check if registration is cached
const isRegistrationCached = (eventId: string, email: string = ""): boolean => {
  // For anonymous users, check all cached registrations for this event
  const keys = Object.keys(localStorage);
  return keys.some(key => key.startsWith(`registered_${eventId}`));
};

export default function EventCard({ event, onRegistrationSuccess }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  useEffect(() => {
    // Check if any registration cached for this event
    setIsUserRegistered(isRegistrationCached(event.id));
  }, [event.id]);

  const handleRegistrationSuccess = () => {
    setIsUserRegistered(true);
    if (onRegistrationSuccess) {
      onRegistrationSuccess();
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
        {/* Image */}
        {event.image && (
          <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Type Badge */}
          <div className="mb-3">
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
              {event.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
            {event.description}
          </p>

          {/* Event Details */}
          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="line-clamp-1">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>
                {event.attendeeCount || event.registeredCount || 0}/{event.capacity} Registered
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mb-4">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full capitalize ${
                event.status === "upcoming"
                  ? "bg-green-100 text-green-700"
                  : event.status === "ongoing"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {event.status}
            </span>
          </div>

          {/* Register Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={event.status === "completed" || isUserRegistered}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            {event.status === "completed" 
              ? "Event Ended" 
              : isUserRegistered 
              ? "✓ Registered" 
              : "Register Now"}
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleRegistrationSuccess}
      />
    </>
  );
}