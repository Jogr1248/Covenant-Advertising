import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, MapPin, X } from 'lucide-react';

type Project = {
  name: string;
  location: string;
  duration: string;
  description: string;
  videoThumbnail: string;
  videoUrl: string; // can be local file or YouTube embed
  isLocalVideo?: boolean; // <-- NEW flag
  results: string[];
  status: 'Active' | 'Completed';
};


const PreviousWorks: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      name: 'Hotto Restaurant',
      location: 'Addis Ababa',
      duration: '6 Months Partnership',
      description: 'Complete social media transformation...',
      videoThumbnail: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      videoUrl: 'https://www.youtube.com/embed/ztgeMxF-xl4',
      results: ['300% increase in social engagement', 'Daily customer growth', 'Brand recognition boost'],
      status: 'Completed'
    },
    {
      name: 'Ktas Kitchen',
      location: 'Jimma',
      duration: '6 Months Success',
      description: 'Local market penetration strategy...',
      videoThumbnail: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      results: ['Local market dominance', 'Community engagement', 'Revenue growth'],
      status: 'Completed'
    },
    {
    name: 'Mafi Restaurant',
    location: 'Adama',
    duration: 'Outstanding Results',
    description: 'Strategic digital marketing campaign...',
    videoThumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    videoUrl: '/mafi.mp4', // <-- Local path
    isLocalVideo: true,
    results: ['Visual brand enhancement', 'Customer base expansion', 'Online presence growth'],
    status: 'Completed'
    },
    {
      name: 'Cloud Sun Cafe',
    location: 'Currently Active',
    duration: 'Ongoing Success',
    description: 'Real-time social media management...',
    videoThumbnail: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg',
    videoUrl: './public/mafi.mp4', // <-- Local path
    isLocalVideo: true,
    results: ['Daily content creation', 'Real-time engagement', 'Growing follower base'],
    status: 'Active'
    }
  ];

  return (
    <section id="previous-works" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Previous <span className="text-teal-400">Works & Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful campaigns and ongoing projects with restaurant partners across Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-black rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={project.videoThumbnail}
                  alt={`${project.name} project`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedVideo(project.videoUrl)}
                    className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center hover:bg-teal-300 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play size={24} className="text-black ml-1" />
                  </button>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Active'
                        ? 'bg-green-400 text-black'
                        : 'bg-gray-800 text-white'
                    }`}
                  >
                    {project.status === 'Active' ? (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        {project.status}
                      </div>
                    ) : (
                      project.status
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-teal-400">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {project.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Results:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className="w-full bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-teal-400/20 hover:border-teal-400/40">
                    View Full Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Project Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">4+</div>
                <div className="text-gray-300">Restaurant Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">18+</div>
                <div className="text-gray-300">Months Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">1</div>
                <div className="text-gray-300">Active Project</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-black rounded-xl overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white hover:text-red-400 z-10"
            >
              <X size={28} />
            </button>
            <div className="w-full h-0 pb-[56.25%] relative">
             {(() => {
  const project = projects.find(p => p.videoUrl === selectedVideo);
  if (!project) return null;

  if (project.isLocalVideo) {
    return (
      <video
        controls
        autoPlay
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      >
        <source src={project.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <iframe
        src={project.videoUrl}
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Project Video"
      />
    );
  }
})()}

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PreviousWorks;
