import React from 'react';
import { Users, Building2, Activity } from 'lucide-react';

export default function MemberStats() {
  const stats = [
    { label: 'Active Members', value: '500+', icon: Users },
    { label: 'Companies', value: '200+', icon: Building2 },
    { label: 'Monthly Connections', value: '1.5K', icon: Activity }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}