import { Metadata } from "next";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team - DevRhylme",
  description: "Meet the team behind DevRhylme event platform.",
};

const coreTeam = [
  {
    id: "1",
    name: "Laxmi Prajapati",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/laxmiprajapati2707/",
    twitter: "https://x.com/LogixCraft1",
  },
  {
    id: "2",
    name: "Durgesh Kumar Prajapati",
    role: "Founder & CMO",
    linkedin: "https://www.linkedin.com/in/durgesh4993/",
    twitter: "https://x.com/durgesh4993",
  },
  {
    id: "3",
    name: "Ghanshyam Singh",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
    twitter: "https://x.com/https_ghanshyam",
  },
];

const contributors = [
  {
    id: "1",
    name: "Aman Kumar",
    role: "Frontend Contributor",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "2",
    name: "Riya Sharma",
    role: "Design Contributor",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Backend Contributor",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "4",
    name: "Priya Singh",
    role: "Community Contributor",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-blue-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            The people behind DevRhylme building the future of event discovery
            and community-driven experiences.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Core Team
            </h2>
            <p className="text-gray-600">
              Leadership behind DevRhylme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <Card
                key={member.id}
                hover
                className="p-8 text-center border border-gray-100"
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center text-xl font-bold text-primary-600">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>

                <span className="inline-block bg-primary-50 text-primary-600 text-xs px-3 py-1 rounded-full mb-4">
                  {member.role}
                </span>

                <div className="flex justify-center gap-4 mt-2">

                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href={member.twitter}
                    target="_blank"
                    className="p-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                  >
                    <Twitter size={18} />
                  </a>

                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Contributors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Contributors
            </h2>
            <p className="text-gray-600">
              Amazing people helping build DevRhylme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributors.map((member) => (
              <Card key={member.id} hover className="p-5">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center font-bold text-primary-600">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex gap-2">

                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="text-blue-600 hover:scale-110 transition"
                    >
                      <Linkedin size={16} />
                    </a>

                    <a
                      href={member.twitter}
                      target="_blank"
                      className="text-gray-800 hover:scale-110 transition"
                    >
                      <Twitter size={16} />
                    </a>

                  </div>

                </div>

              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Contribute?
        </h2>

        <p className="mb-8 text-white/90">
          Join DevRhylme and help build the future of events
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/community">
            <Button variant="secondary">
              Join Community
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" className="border-white text-white">
              <Mail className="mr-2" size={16}/>
              Contact
            </Button>
          </Link>
        </div>

      </section>

    </div>
  );
}