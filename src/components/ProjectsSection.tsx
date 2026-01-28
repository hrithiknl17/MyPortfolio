import ProjectCard from './ProjectCard';
import projectHealTrack from '@/assets/project-healtrack.png';
import projectNetflix from '@/assets/project-netflix.png';
import projectSocialAgent from '@/assets/project-social-agent.png';

const projects = [
  {
    title: 'HealTrack Pro: Smart Medicine & Health Records Manager',
    image: projectSocialAgent,
    tags: ['React', 'Firebase', 'AI Integration', 'Health App'],
    docsLink: 'https://github.com/hrithiknl17/Medical-Cabinet-/blob/main/README.md',
    codeLink: 'https://github.com/hrithiknl17/Medical-Cabinet-',
    siteLink: 'https://healtrack-fd188.web.app/',
  },
  {
    title: 'Streaming UI Clone: Netflix-Style Web App',
    image: projectHealTrack,
    tags: ['React', 'TMDB API', 'Responsive UI', 'Vite'],
    docsLink: 'https://github.com/hrithiknl17/Netflix-clone/blob/main/README.md',
    codeLink: 'https://github.com/hrithiknl17/Netflix-clone',
    siteLink: '#',
  },
  {
    title: 'Social Spark: Autonomous AI Marketing Agent',
    image: projectNetflix,
    tags: ['React', 'GenAI', 'AI Orchestration', 'Agentic Workflow'],
    docsLink: 'https://github.com/hrithiknl17/Social-Agent-/blob/main/README.md',
    codeLink: 'https://github.com/hrithiknl17/Social-Agent-',
    siteLink: 'https://social-agent-c0a5f.web.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 md:px-8 lg:px-16 py-8">
      {/* Section Header */}
      <div className="section-header mb-8">
        <h2 className="text-2xl font-bold">Curated Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
