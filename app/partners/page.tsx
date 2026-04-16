"use client";

import { useState, useMemo } from "react";
import { ExternalLink, Heart, Award } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { partners, partnerTiers, partnerTypes } from "@/lib/data/partner";
import Link from "next/link";

export default function PartnersPage() {
  const [selectedTier, setSelectedTier] =
    useState<typeof partnerTiers[number]>("all");
  const [selectedType, setSelectedType] =
    useState<typeof partnerTypes[number]>("all");

  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      const matchesTier =
        selectedTier === "all" || partner.tier === selectedTier;
      const matchesType =
        selectedType === "all" || partner.type === selectedType;
      return matchesTier && matchesType;
    });
  }, [selectedTier, selectedType]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      case "gold":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case "silver":
        return "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900";
      case "bronze":
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
      default:
        return "bg-gray-200 text-gray-900";
    }
  };

  return (
    <div className="min-h-screen">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with organizations, communities, and companies
            to host impactful events and build meaningful experiences.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap items-center gap-4">

            {/* Type */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <div className="flex gap-2">
                {partnerTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors capitalize ${
                      selectedType === type
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-6 w-px bg-gray-300"></div>

            {/* Tier */}
            <div className="flex items-center gap-2">
              <Award size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Tier:</span>
              <div className="flex gap-2">
                {partnerTiers.map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors capitalize ${
                      selectedTier === tier
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Showing {filteredPartners.length} of {partners.length} partners
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {filteredPartners.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <Card key={partner.id} hover className="p-6">

                  {/* Logo */}
                  <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-gray-400">
                      {partner.name
                        .split(" ")
                        .map((w: string) => w[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Name + Tier */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {partner.name}
                    </h3>

                    <span
                      className={`${getTierColor(
                        partner.tier || "bronze"
                      )} text-xs font-semibold px-3 py-1 rounded-full capitalize`}
                    >
                      {partner.tier}
                    </span>
                  </div>

                  {/* Type */}
                  <span className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full mb-3 capitalize">
                    {partner.type}
                  </span>

                  <p className="text-gray-600 mb-4 text-sm">
                    {partner.description}
                  </p>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center"
                  >
                    Visit Website
                    <ExternalLink size={14} className="ml-1" />
                  </a>

                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No partners found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters
              </p>

              <Button
                onClick={() => {
                  setSelectedTier("all");
                  setSelectedType("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <Heart className="w-16 h-16 mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Partner
          </h2>

          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Partner with us to support events, hackathons, and community
            initiatives. Let’s build meaningful experiences together.
          </p>

          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Partner With Us
            </Button>
          </Link>

        </div>
      </section>

    </div>
  );
}