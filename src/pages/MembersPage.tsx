import { useState } from 'react';
import { Search } from 'lucide-react';
import MemberCard from '../components/members/MemberCard';
import { Member } from '../types/member';
import members from '../members.json';

const allExpertise = Array.from(new Set(members.flatMap(member => member.expertise))).sort();

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const handleExpertiseChange = (expertise: string) => {
    setSelectedExpertise(prev =>
      prev.includes(expertise)
        ? prev.filter(e => e !== expertise)
        : [...prev, expertise]
    );
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExpertise = 
      selectedExpertise.length === 0 ||
      member.expertise.some(exp => selectedExpertise.includes(exp));

    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Members</h1>
          <p className="mt-2 text-gray-600">Connect with fellow founders and innovators in Dubai</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Filter by Expertise</h3>
              <div className="space-y-2">
                {allExpertise.map(expertise => (
                  <label key={expertise} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedExpertise.includes(expertise)}
                      onChange={() => handleExpertiseChange(expertise)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{expertise}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            {/* Search */}
            <div className="relative max-w-xl mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMembers.map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No members found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}