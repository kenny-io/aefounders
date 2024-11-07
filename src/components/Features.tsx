import React from 'react';
import { Users, Building2, Calendar, MessageCircle, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Peer-to-Peer Support',
    description: 'Connect directly with fellow founders in Dubai for mentorship and collaboration.'
  },
  {
    icon: Building2,
    title: 'No VC Oversight',
    description: 'A community-driven platform without management fees or external control.'
  },
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Access member-only events, workshops, and networking opportunities.'
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Secure messaging and forums for authentic connections.'
  },
  {
    icon: Shield,
    title: 'Vetted Community',
    description: 'Quality-focused membership process ensures valuable interactions.'
  },
  {
    icon: Rocket,
    title: 'Growth Resources',
    description: 'Access shared resources and tools for scaling your business.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Join AEFounders?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A community built by founders, for founders
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <Icon className="h-8 w-8 text-blue-600" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}