import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Users,
  MessageCircle,
  Send,
  Linkedin,
  Twitter,
  Globe,
  Award,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Community - DevRhylme",
  description: "Join the DevRhylme event community.",
};

const communityWays = [
  {
    icon: Calendar,
    title: "Host Events",
    description:
      "Create hackathons, meetups and workshops and manage registrations.",
    link: "/events/create",
  },
  {
    icon: Users,
    title: "Join Events",
    description:
      "Participate in upcoming tech events and connect with builders.",
    link: "/events",
  },
  {
    icon: Award,
    title: "Become Volunteer",
    description:
      "Help organize events and grow your community leadership.",
    link: "/contact",
  },
  {
    icon: Globe,
    title: "Start Chapter",
    description:
      "Launch DevRhylme events in your city and grow local community.",
    link: "/contact",
  },
];

const communityLinks = [
  {
    name: "Discord",
    icon: MessageCircle,
    link: "https://discord.gg/DgmyGzzMHt",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Telegram",
    icon: Send,
    link: "https://t.me/devrhylme",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/company/devrhylme/",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    link: "https://x.com/DevRhylme1",
    color: "from-gray-700 to-black",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            DevRhylme Community
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join our global event community of organizers, developers and
            builders hosting hackathons, meetups and tech events.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/events">
              <Button size="lg" variant="secondary">
                Explore Events
              </Button>
            </Link>

            <Link href="/events/create">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white"
              >
                Create Event
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Community Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with DevRhylme across platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card hover className="p-6 text-center group">

                    <div
                      className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center`}
                    >
                      <Icon size={26} />
                    </div>

                    <h3 className="font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      Join community
                    </p>

                  </Card>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* Ways */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-4">
        Get Involved
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Multiple ways to be part of DevRhylme ecosystem
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Host Events */}
      <Card hover className="p-6 group">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-blue-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
          <Calendar size={22} />
        </div>

        <h3 className="font-semibold text-lg bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Host Events
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Create hackathons, meetups and workshops and manage registrations.
        </p>

        <Link
          href="/events/create"
          className="text-primary-600 text-sm font-semibold group-hover:underline"
        >
          Learn more →
        </Link>
      </Card>

      {/* Join Events */}
      <Card hover className="p-6 group">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
          <Users size={22} />
        </div>

        <h3 className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Join Events
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Participate in upcoming tech events and connect with builders.
        </p>

        <Link
          href="/events"
          className="text-primary-600 text-sm font-semibold group-hover:underline"
        >
          Learn more →
        </Link>
      </Card>

      {/* Volunteer */}
      <Card hover className="p-6 group">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
          <Award size={22} />
        </div>

        <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Become Volunteer
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Help organize events and grow your community leadership.
        </p>

        <Link
          href="/contact"
          className="text-primary-600 text-sm font-semibold group-hover:underline"
        >
          Learn more →
        </Link>
      </Card>

      {/* Chapter */}
      <Card hover className="p-6 group">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
          <Globe size={22} />
        </div>

        <h3 className="font-semibold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
          Start Chapter
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Launch DevRhylme events in your city and grow local community.
        </p>

        <Link
          href="/contact"
          className="text-primary-600 text-sm font-semibold group-hover:underline"
        >
          Learn more →
        </Link>
      </Card>

    </div>

  </div>
</section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Community Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-4xl font-bold">7+</h3>
              <p className="text-white/80 mt-2">Events Hosted</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">9000+</h3>
              <p className="text-white/80 mt-2">Participants</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">2+</h3>
              <p className="text-white/80 mt-2">Partner Companies</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">Global</h3>
              <p className="text-white/80 mt-2">Community</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}