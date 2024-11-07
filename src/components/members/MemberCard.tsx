import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { Member } from '../../types/member';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={member.avatar}
            alt={member.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {member.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Briefcase className="h-4 w-4 mr-1" />
              <span>{member.title} at {member.company}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{member.location}</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 line-clamp-2">
          {member.bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.expertise.map(exp => (
            <span
              key={exp}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}