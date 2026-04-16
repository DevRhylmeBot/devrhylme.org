import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Mail,
  Send,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Browse Events", href: "/events" },
    { name: "Create Event", href: "/events/create" },
    { name: "Community", href: "/community" },
    { name: "Partners", href: "/partners" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Events", href: "/events" },
    { name: "Newsletter", href: "#" },
    { name: "Support", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              DevRhylme
            </h3>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Discover, host, and manage tech events. Join a growing community
              of organizers and participants building meaningful experiences.
            </p>

            <div className="flex items-center gap-4 flex-wrap">

              <a href="https://www.linkedin.com/company/devrhylme/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>

              <a href="https://x.com/DevRhylme1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={18} />
              </a>

              <a href="https://t.me/devrhylme" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Send size={18} />
              </a>

              <a href="https://discord.gg/DgmyGzzMHt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>

              <a href="https://www.instagram.com/devrhylme1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={18} />
              </a>

              <a href="https://www.facebook.com/people/DevRhylme-Foundation/61587095802753/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={18} />
              </a>

              <a href="mailto:hello@devrhylme.org" className="hover:text-white transition-colors">
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Platform
            </h4>

            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Resources
            </h4>

            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DevRhylme. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}