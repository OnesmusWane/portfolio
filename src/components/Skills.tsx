import React from 'react';
import { CodeIcon, ServerIcon, DatabaseIcon, CloudIcon, LayoutIcon, TerminalIcon, GitBranchIcon, SettingsIcon, Shield } from 'lucide-react';
export function Skills() {
 const frontendSkills = [
  'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Redux', 'Tailwind CSS', 'Material UI', 'Framer Motion'
];

const backendSkills = [
  'PHP & Laravel (Advanced)',
  'API Architecture (REST, GraphQL)',
  'Authentication & Authorization',
  'Database Design & Optimization (MySQL, Eloquent ORM)',
  'Caching, Queues & Task Scheduling',
  'Microservices & Scalability',
  'Cloud Storage & Deployment (Azure, AWS)',
  'Security & Performance Optimization',
  'AUtomated testing (PHPUnit)'
];

const databaseSkills = [
  'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'SQL', 'NoSQL', 'Data Modeling'
];

const devOpsSkills = [
  'Git & Version Control',
  'GitHub Actions (CI/CD)',
  'Docker & Containerization',
  'Kubernetes (Basics)',
  'Azure & Google Cloud',
  'Netlify Deployment'
];

  const SkillCategory = ({
    title,
    skills,
    icon
  }) => <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
            {skill}
          </span>)}
      </div>
    </div>;
  return <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My expertise spans the entire development stack, allowing me to
            build complete, scalable applications from front to back.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory title="Frontend" skills={frontendSkills} icon={<LayoutIcon className="text-indigo-600 dark:text-indigo-400" size={24} />} />
          <SkillCategory title="Backend" skills={backendSkills} icon={<ServerIcon className="text-indigo-600 dark:text-indigo-400" size={24} />} />
          <SkillCategory title="Database" skills={databaseSkills} icon={<DatabaseIcon className="text-indigo-600 dark:text-indigo-400" size={24} />} />
          <SkillCategory title="Cloud & DevOps" skills={devOpsSkills} icon={<CloudIcon className="text-indigo-600 dark:text-indigo-400" size={24} />} />
        </div>
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">
            Development Tools & Practices
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <GitBranchIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
              <span>Git & GitHub</span>
            </div>
            <div className="flex items-center">
              <TerminalIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
              <span>Command Line & Shell Scripting </span>
            </div>
            <div className="flex items-center">
              <CodeIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
              <span>Test Driven Development</span>
            </div>
            <div className="flex items-center">
              <SettingsIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
              <span>Agile Methodology</span>
            </div>
              <div className="flex items-center">
              <Shield className="text-indigo-600 dark:text-indigo-400 mr-2" size={20} />
              <span>Security & Code Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}