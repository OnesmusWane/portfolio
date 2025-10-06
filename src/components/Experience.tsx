import React from 'react';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
export function Experience() {
  const experiences = [{
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    description: 'Leading development of enterprise SaaS platforms using React, Node.js, and AWS. Architected microservices infrastructure that improved scalability by 300% and reduced deployment time by 70%.',
    achievements: ['Implemented CI/CD pipeline reducing deployment time from hours to minutes', 'Led migration from monolith to microservices architecture', 'Mentored junior developers and established coding standards']
  }, {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2019 - 2021',
    location: 'Austin, TX',
    description: 'Developed and maintained multiple client projects using React, Express, and MongoDB. Collaborated with UX designers to implement responsive and accessible user interfaces.',
    achievements: ['Reduced page load time by 40% through code optimization', 'Implemented real-time features using WebSockets', 'Developed reusable component library used across multiple projects']
  }, {
    id: 3,
    role: 'Frontend Developer',
    company: 'WebCraft Studios',
    period: '2017 - 2019',
    location: 'Seattle, WA',
    description: 'Created responsive web applications with modern JavaScript frameworks. Worked closely with backend team to integrate RESTful APIs and optimize data flow.',
    achievements: ['Built interactive dashboards using D3.js and React', 'Implemented state management with Redux across large applications', 'Improved accessibility compliance across all company projects']
  }];
  return <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey building digital products and solving
            complex problems.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-900/50"></div>
          {/* Experience items */}
          {experiences.map((exp, index) => <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-8 md:ml-1/2'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
              {/* Content card */}
              <div className="ml-12 md:ml-0 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="flex items-center mb-2">
                  <BriefcaseIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                </div>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {exp.company}
                </div>
                <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4 mb-2">
                    <CalendarIcon size={16} className="mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPinIcon size={16} className="mr-1" />
                    {exp.location}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-1.5 mr-2"></span>
                      {achievement}
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}