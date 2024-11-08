import { Beer, HandHeart, Coffee, MessageCircle, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Beer,
    title: 'We Hangout Often',
    description: 'From William\'s backyard BBQs to Sundays on a yacht, and everything in between. We believe that meaningful connections and great conversations happen anywhere, with the right people.'
  },
  {
    icon: HandHeart,
    title: 'We Help Each Other',
    description: 'Whether you need a co-founder, help with fundraising, navigating VC commitments, or just want to bounce ideas around - you\'ll meet a founder who\'s been there and done that.'
  },
  {
    icon: Coffee,
    title: 'Zero Corporate BS',
    description: 'No VCs pulling strings, no bureaucracy, no hidden agendas. We\'re just a group of founders who believe in keeping things real and helping each other build amazing businesses in Dubai.'
  },
  {
    icon: MessageCircle,
    title: 'We Talk Honestly',
    description: 'Have honest, unfiltered conversations about the rollercoaster of every day life. Share your wins, challenges, and lessons learned with people who truly understand.'
  },
  {
    icon: Shield,
    title: 'We Care About Quality',
    description: 'We take time to chat with potential members, not to be exclusive, but to ensure we\'re building a community where values align and everyone contributes to making it better for all.'
  },
  {
    icon: Rocket,
    title: 'We Dream Big',
    description: 'From our upcoming Founders Hub workspace to collaborative projects, we\'re dreaming big. The sky\'s the limit.'
  }
];

export default function Features() {
  return (
    <section id="activities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Thinking of joining?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Here are some of the things you can expect from us.
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
                <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <Icon className="h-8 w-8 text-gray-600" />
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