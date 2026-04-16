import { Metadata } from "next";
import { Target, Users, Globe, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - DevRhylme",
  description:
    "DevRhylme is a Section 8 registered organization building an event listing and management platform.",
};

const milestones = [
  {
    year: "2024",
    title: "Organization Registered",
    description:
      "DevRhylme was established as a Section 8 registered organization focused on open-source collaboration and community initiatives.",
  },
  {
    year: "2024",
    title: "Open Source Community",
    description:
      "Started as an open-source organization bringing developers and communities together.",
  },
  {
    year: "2024",
    title: "First Events Hosted",
    description:
      "Hosted initial hackathons, workshops, and community-driven tech events.",
  },
  {
    year: "2026",
    title: "Event Listing Platform",
    description:
      "Launched DevRhylme event listing and management platform for organizers.",
  },
  {
    year: "2026",
    title: "Growing Ecosystem",
    description:
      "Expanded partnerships and started managing multiple events and communities.",
  },
];

const coreValues = [
  {
    icon: Target,
    title: "Community First",
    description:
      "We focus on building strong communities through meaningful events.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Connecting organizers, developers, and communities together.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Making event discovery and participation accessible to everyone.",
  },
  {
    icon: Heart,
    title: "Impact Driven",
    description:
      "Creating opportunities that bring real value to the ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About DevRhylme
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              DevRhylme is a Section 8 registered organization established in 2024.
              We started as an open-source community and now operate an event listing
              and management platform that helps organizers host events and enables
              communities to discover meaningful opportunities.
            </p>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12">

            <Card className="p-8">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-relaxed">
                To empower communities by providing a platform for discovering,
                hosting, and managing events. We aim to support organizers and
                connect participants through hackathons, workshops, and
                community-driven initiatives.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>

              <p className="text-gray-600 leading-relaxed">
                To become a leading event ecosystem where communities,
                organizations, and developers collaborate through impactful
                events and shared learning experiences.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles that guide our platform and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
          </div>

          <div className="relative">

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <Card className={`p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <div className="text-primary-600 font-bold text-sm mb-2">
                        {milestone.year}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>

                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>

          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover events, host your own, and grow with the DevRhylme community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" variant="secondary">
                Browse Events
              </Button>
            </Link>

            <Link href="/community">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Join Community
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}