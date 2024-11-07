import React from 'react';
import { ArrowRight, Users, Building2, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Connect with Dubai's</span>
            <span className="block text-blue-600">Leading Founders</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join the exclusive community where Dubai's most ambitious founders connect, collaborate, and grow together. No VCs, no fees - just pure value.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#apply"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#features"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Active Members</dt>
              <dd className="order-1 text-5xl font-extrabold text-blue-600">500+</dd>
            </div>
            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Success Stories</dt>
              <dd className="order-1 text-5xl font-extrabold text-blue-600">100+</dd>
            </div>
            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Monthly Events</dt>
              <dd className="order-1 text-5xl font-extrabold text-blue-600">15</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}