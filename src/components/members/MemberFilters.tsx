import React from 'react';
import { Filter } from 'lucide-react';

interface MemberFiltersProps {
  expertiseFilters: string[];
  locationFilters: string[];
  selectedExpertise: string[];
  selectedLocations: string[];
  toggleExpertise: (expertise: string) => void;
  toggleLocation: (location: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export default function MemberFilters({
  expertiseFilters,
  locationFilters,
  selectedExpertise,
  selectedLocations,
  toggleExpertise,
  toggleLocation,
  showFilters,
  setShowFilters
}: MemberFiltersProps) {
  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block w-64 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Expertise</h3>
          <div className="space-y-2">
            {expertiseFilters.map(filter => (
              <label key={filter} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedExpertise.includes(filter)}
                  onChange={() => toggleExpertise(filter)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{filter}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Location</h3>
          <div className="space-y-2">
            {locationFilters.map(filter => (
              <label key={filter} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(filter)}
                  onChange={() => toggleLocation(filter)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{filter}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filters Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
      >
        <Filter className="h-5 w-5 mr-2" />
        Filters
      </button>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden mb-6 space-y-4">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {expertiseFilters.map(filter => (
                <button
                  key={filter}
                  onClick={() => toggleExpertise(filter)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedExpertise.includes(filter)
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
            <div className="flex flex-wrap gap-2">
              {locationFilters.map(filter => (
                <button
                  key={filter}
                  onClick={() => toggleLocation(filter)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedLocations.includes(filter)
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}