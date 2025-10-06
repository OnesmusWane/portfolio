import React, { useEffect, useState } from 'react'
import {
  ExternalLinkIcon,
  GithubIcon,
  TagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ImageIcon,
  LockIcon,
  XIcon,
} from 'lucide-react'
export function Projects() {
  const [filter, setFilter] = useState('all')
  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  // State for modal gallery
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return
      if (e.key === 'Escape') {
        setModalOpen(false)
      } else if (e.key === 'ArrowLeft') {
        navigateModalImage('prev')
      } else if (e.key === 'ArrowRight') {
        navigateModalImage('next')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    // Prevent scrolling when modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [modalOpen, modalProject, modalImageIndex])
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with product management, cart functionality, payment processing, and order tracking.',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'fullstack',
      isCompanyProject: false,
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description:
        'A Kanban-style project management tool with drag-and-drop functionality, team collaboration, and real-time updates.',
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'frontend',
      isCompanyProject: false,
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description:
        'A messaging platform with real-time communication, user authentication, and file sharing capabilities.',
      image:
        'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'fullstack',
      isCompanyProject: false,
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description:
        'A comprehensive API service with authentication, rate limiting, caching, and extensive documentation.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'backend',
      isCompanyProject: false,
    },
    {
      id: 5,
      title: 'Internal Content Management System',
      description:
        'A customizable CMS with rich text editing, media management, and role-based access control for company-wide content.',
      images: [
        'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      isCompanyProject: true,
      companyName: 'Tech Innovations Inc.',
    },
    {
      id: 6,
      title: 'DevOps Automation Tools',
      description:
        'A suite of tools for automating CI/CD pipelines, infrastructure provisioning, and monitoring.',
      image:
        'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Docker', 'AWS', 'Terraform', 'GitHub Actions'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'devops',
      isCompanyProject: false,
    },
    {
      id: 7,
      title: 'Employee Resource Management System',
      description:
        'Internal HR platform for managing employee data, time tracking, performance reviews, and resource allocation.',
      images: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux'],
      category: 'fullstack',
      isCompanyProject: true,
      companyName: 'Digital Solutions Co.',
    },
  ]
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)
  // Handle image navigation in thumbnails
  const navigateImage = (projectId, direction) => {
    setCurrentImageIndex((prev) => {
      const project = projects.find((p) => p.id === projectId)
      if (!project || !project.images) return prev
      const currentIndex = prev[projectId] || 0
      const imagesCount = project.images.length
      let newIndex
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % imagesCount
      } else {
        newIndex = (currentIndex - 1 + imagesCount) % imagesCount
      }
      return {
        ...prev,
        [projectId]: newIndex,
      }
    })
  }
  // Open modal with selected project and image
  const openImageModal = (project, initialImageIndex = 0) => {
    setModalProject(project)
    setModalImageIndex(initialImageIndex)
    setModalOpen(true)
  }
  // Navigate images in modal
  const navigateModalImage = (direction) => {
    if (!modalProject || !modalProject.images) return
    const imagesCount = modalProject.images.length
    let newIndex
    if (direction === 'next') {
      newIndex = (modalImageIndex + 1) % imagesCount
    } else {
      newIndex = (modalImageIndex - 1 + imagesCount) % imagesCount
    }
    setModalImageIndex(newIndex)
  }
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across various domains of web
            development, including both public and company-internal projects.
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {['all', 'frontend', 'backend', 'fullstack', 'devops'].map(
              (category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md transition-colors ${filter === category ? 'bg-indigo-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ),
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Project Image or Image Gallery */}
              <div className="h-48 overflow-hidden relative">
                {project.isCompanyProject ? (
                  <>
                    <div
                      className="w-full h-full cursor-pointer"
                      onClick={() =>
                        openImageModal(
                          project,
                          currentImageIndex[project.id] || 0,
                        )
                      }
                    >
                      <img
                        src={project.images[currentImageIndex[project.id] || 0]}
                        alt={`${project.title} screenshot ${(currentImageIndex[project.id] || 0) + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay hint to click */}
                      <div className="absolute inset-0 bg-black/10 hover:bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="bg-black/70 text-white px-3 py-2 rounded-full text-sm flex items-center">
                          <ImageIcon size={16} className="mr-1" />
                          View Gallery
                        </div>
                      </div>
                    </div>
                    {/* Image navigation controls */}
                    <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateImage(project.id, 'prev')
                        }}
                        className="p-1.5 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors pointer-events-auto"
                        aria-label="Previous image"
                      >
                        <ChevronLeftIcon size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateImage(project.id, 'next')
                        }}
                        className="p-1.5 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors pointer-events-auto"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon size={20} />
                      </button>
                    </div>
                    {/* Image counter */}
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      {(currentImageIndex[project.id] || 0) + 1} /{' '}
                      {project.images.length}
                    </div>
                    {/* Company project badge */}
                    <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <LockIcon size={12} className="mr-1" />
                      Company Project
                    </div>
                  </>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {project.isCompanyProject && (
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                    Built for {project.companyName}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300"
                    >
                      <TagIcon size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                {project.isCompanyProject ? (
                  <button
                    onClick={() => openImageModal(project, 0)}
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <ImageIcon size={16} className="mr-1" />
                    View {project.images.length} screenshots
                  </button>
                ) : (
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <ExternalLinkIcon size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <GithubIcon size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Full-screen Image Modal */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Close modal"
          >
            <XIcon size={24} />
          </button>
          {/* Project title */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white z-10">
            <h3 className="text-xl md:text-2xl font-bold">
              {modalProject.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              {modalProject.companyName}
            </p>
          </div>
          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1.5 rounded-full z-10">
            {modalImageIndex + 1} / {modalProject.images.length}
          </div>
          {/* Main image container */}
          <div className="w-full h-full flex items-center justify-center p-4 md:p-16">
            <img
              src={modalProject.images[modalImageIndex]}
              alt={`${modalProject.title} screenshot ${modalImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {/* Navigation arrows */}
          <button
            onClick={() => navigateModalImage('prev')}
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeftIcon size={28} />
          </button>
          <button
            onClick={() => navigateModalImage('next')}
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRightIcon size={28} />
          </button>
          {/* Thumbnail navigation */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2 overflow-x-auto px-4 py-2">
            {modalProject.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setModalImageIndex(idx)}
                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${idx === modalImageIndex ? 'border-indigo-500 opacity-100 scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
                aria-label={`View image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
