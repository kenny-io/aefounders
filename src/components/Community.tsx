import React from 'react';

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join Dubai's Most Exclusive Founder Community
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Connect with like-minded founders who are building the future of technology and business in Dubai.
            </p>
            
            <div className="mt-12 space-y-10">
              {[
                {
                  title: "Peer-to-Peer Learning",
                  description: "Learn from experienced founders who've been through the challenges you're facing."
                },
                {
                  title: "Exclusive Events",
                  description: "Access member-only workshops, networking events, and knowledge sharing sessions."
                },
                {
                  title: "Resource Sharing",
                  description: "Get access to shared resources, tools, and best practices from the community."
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      {index + 1}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-4">
            <img
              className="rounded-lg shadow-lg object-cover"
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
              alt="Dubai Meetup"
            />
            <img
              className="rounded-lg shadow-lg object-cover mt-8"
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              alt="Collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}