import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Community from '../components/Community';
import { ApplicationForm } from '../components/ApplicationForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Community />
      <section id="apply" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take the first step towards joining Dubai's most exclusive founder community
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </main>
  );
} 