import React, { useState } from 'react';
import { Send, Briefcase, User, Building2, Mail } from 'lucide-react';

interface FormData {
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  professionalBio: string;
  website: string;
  expertise: string[];
  currentRole: string;
  companyName: string;
  companyWebsite: string;
  projectDescription: string;
  developmentStage: 'ideation' | 'mvp' | 'launched';
  industry: string;
  targetMarket: string;
}

export const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    professionalTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    professionalBio: '',
    website: '',
    expertise: [],
    currentRole: '',
    companyName: '',
    companyWebsite: '',
    projectDescription: '',
    developmentStage: 'ideation',
    industry: '',
    targetMarket: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [currentSection, setCurrentSection] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(value)
        ? prev.expertise.filter(item => item !== value)
        : [...prev.expertise, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const expertiseOptions = [
    'Technology',
    'Marketing',
    'Finance',
    'Operations',
    'Product Development',
    'Sales',
    'Business Strategy'
  ];

  const FormSection = ({ number, title, icon: Icon }: { number: number; title: string; icon: React.ElementType }) => (
    <div className="flex items-center space-x-2 mb-6">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white">
        <Icon className="h-4 w-4" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-8">
              {/* Personal Information */}
              <div className={`space-y-6 ${currentSection !== 1 && 'hidden'}`}>
                <FormSection number={1} title="Personal Information" icon={User} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="professionalTitle" className="block text-sm font-medium text-gray-700">
                      Professional Title *
                    </label>
                    <input
                      type="text"
                      id="professionalTitle"
                      name="professionalTitle"
                      required
                      value={formData.professionalTitle}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="Founder & CEO"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="mt-1 relative rounded-lg shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full pl-10 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className={`space-y-6 ${currentSection !== 2 && 'hidden'}`}>
                <FormSection number={2} title="Professional Information" icon={Briefcase} />
                <div className="space-y-6">
                  <div>
                    <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700">
                      LinkedIn URL *
                    </label>
                    <input
                      type="url"
                      id="linkedinUrl"
                      name="linkedinUrl"
                      required
                      value={formData.linkedinUrl}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <label htmlFor="professionalBio" className="block text-sm font-medium text-gray-700">
                      Professional Bio *
                    </label>
                    <textarea
                      id="professionalBio"
                      name="professionalBio"
                      required
                      maxLength={500}
                      rows={4}
                      value={formData.professionalBio}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="Tell us about your professional journey..."
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      {formData.professionalBio.length}/500 characters
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas of Expertise *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {expertiseOptions.map(option => (
                        <div key={option} className="relative flex items-center">
                          <input
                            type="checkbox"
                            id={option}
                            name="expertise"
                            value={option}
                            checked={formData.expertise.includes(option)}
                            onChange={handleExpertiseChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                          />
                          <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className={`space-y-6 ${currentSection !== 3 && 'hidden'}`}>
                <FormSection number={3} title="Company Information" icon={Building2} />
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="developmentStage" className="block text-sm font-medium text-gray-700">
                        Development Stage *
                      </label>
                      <select
                        id="developmentStage"
                        name="developmentStage"
                        required
                        value={formData.developmentStage}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      >
                        <option value="ideation">Ideation</option>
                        <option value="mvp">MVP</option>
                        <option value="launched">Launched</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="Describe your project or business idea..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setCurrentSection(prev => Math.max(1, prev - 1))}
                className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  currentSection === 1 ? 'invisible' : ''
                }`}
              >
                Previous
              </button>
              {currentSection < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentSection(prev => Math.min(3, prev + 1))}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {submitStatus === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Application
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              )}
            </div>

            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <div className={`mt-4 p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
                <p className={`text-sm font-medium ${submitStatus === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {submitStatus === 'success'
                    ? "Application submitted successfully! We'll be in touch soon."
                    : 'There was an error submitting your application. Please try again.'}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};